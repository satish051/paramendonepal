import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const imageFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|webp|svg/;
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only image files (JPEG, PNG, WebP, GIF, SVG) are allowed'));
};

const catalogueFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|webp|svg|pdf/;
  const mimetype = filetypes.test(file.mimetype) || file.mimetype === 'application/pdf';
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error('Only images and PDF files are allowed for catalogue'));
};

// 2MB product image uploader
const productUpload = multer({
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: imageFilter
}).single('image');

// 10MB catalogue file uploader
const catalogueUpload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: catalogueFilter
}).single('image');

// Generic handler wrapper with error handling
const processUpload = (uploader, limitMessage) => {
  return (req, res) => {
    uploader(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ message: limitMessage });
        }
        return res.status(400).json({ message: `Upload error: ${err.message}` });
      } else if (err) {
        return res.status(400).json({ message: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const fileUrl = `/uploads/${req.file.filename}`;
      res.status(200).json({
        message: 'File uploaded successfully',
        url: fileUrl,
        filename: req.file.filename,
        size: req.file.size
      });
    });
  };
};

// Route for product images (2MB limit)
router.post('/product', processUpload(productUpload, 'File size exceeds the 2MB limit for products.'));

// Route for catalogue files (10MB limit)
router.post('/catalogue', processUpload(catalogueUpload, 'File size exceeds the 10MB limit for the product catalogue.'));

// Default route supports query parameter: /api/upload?type=product or /api/upload?type=catalogue
router.post('/', (req, res, next) => {
  const type = req.query.type;
  if (type === 'product') {
    return processUpload(productUpload, 'File size exceeds the 2MB limit for products.')(req, res, next);
  }
  return processUpload(catalogueUpload, 'File size exceeds the 10MB limit for the product catalogue.')(req, res, next);
});

// Get all uploaded images
router.get('/', (req, res) => {
  try {
    fs.readdir(uploadDir, (err, files) => {
      if (err) {
        return res.status(500).json({ message: 'Unable to scan directory' });
      }
      
      const imageExtensions = /\.(jpeg|jpg|png|gif|webp|svg)$/i;
      const images = files
        .filter(file => imageExtensions.test(file))
        .map(file => {
          try {
            const stats = fs.statSync(path.join(uploadDir, file));
            return {
              filename: file,
              url: `/uploads/${file}`,
              time: stats.mtime.getTime()
            };
          } catch {
            return {
              filename: file,
              url: `/uploads/${file}`,
              time: Date.now()
            };
          }
        })
        .sort((a, b) => b.time - a.time); // newest first
      
      res.status(200).json(images);
    });
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete an image
router.delete('/:filename', (req, res) => {
  try {
    const filePath = path.join(uploadDir, req.params.filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      res.status(200).json({ message: 'File deleted successfully' });
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  } catch (error) {
    console.error('Error deleting file:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
