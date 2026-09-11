import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const blogsFilePath = path.join(dataDir, 'blogs.json');
const messagesFilePath = path.join(dataDir, 'messages.json');
const contentFilePath = path.join(dataDir, 'content.json');

const loadData = (filePath, defaultData) => {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error(`Error loading ${filePath}:`, err);
  }
  return defaultData;
};

const saveData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error saving ${filePath}:`, err);
  }
};

// Default mock data for messages
const defaultMessages = [
  { id: 1, name: 'Satis Bdr', email: 'satis@example.com', subject: 'Partnership Inquiry', message: 'Hello Paramendo team, we would like to collaborate on community plastic waste collection in Dhading.', date: '2024-11-25', status: 'Unread' },
  { id: 2, name: 'Ramesh K.', email: 'ramesh@example.com', subject: 'Recycling Collection Request', message: 'We have collected approximately 200kg of HDPE containers ready for upcycling.', date: '2024-11-24', status: 'Read' },
];
let messages = loadData(messagesFilePath, defaultMessages);
let nextMessageId = Math.max(...messages.map(m => m.id || 0), 2) + 1;

// Default blogs
const defaultBlogs = [
  { 
    id: 1, 
    title: 'The Future of Recycling in Nepal', 
    date: '2024-10-15', 
    status: 'Published', 
    content: 'Recycling in Nepal is taking a new turn with community initiatives...',
    excerpt: 'Discover how local communities are driving the new wave of recycling in Nepal.',
    author: 'Paramendo Team',
    category: 'Innovation',
    image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    id: 2, 
    title: 'How We Process Plastic Waste', 
    date: '2024-11-02', 
    status: 'Published', 
    content: 'We collect HDPE and PP plastics, wash them, and shred them into granules...',
    excerpt: 'A deep dive into our manufacturing process that turns waste into durable tiles.',
    author: 'Operations',
    category: 'Process',
    image: 'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  { 
    id: 3, 
    title: 'New Community Initiatives', 
    date: '2024-11-20', 
    status: 'Draft', 
    content: 'Our upcoming projects in Dhading...',
    excerpt: 'Upcoming projects aiming to empower the Dhading community.',
    author: 'Community Outreach',
    category: 'Community',
    image: 'https://images.pexels.com/photos/3182512/pexels-photo-3182512.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];
let blogs = loadData(blogsFilePath, defaultBlogs);
let nextId = Math.max(...blogs.map(b => b.id || 0), 3) + 1;

// Dashboard stats endpoint (dynamically computed from current blogs & messages)
router.get('/stats', (req, res) => {
  const unreadMessagesCount = messages.filter(m => m.status === 'Unread').length;
  const publishedBlogsCount = blogs.filter(b => b.status === 'Published').length;

  res.json({
    stats: [
      { name: 'Total Blog Posts', value: blogs.length.toString(), trend: `${publishedBlogsCount} published` },
      { name: 'Unread Messages', value: unreadMessagesCount.toString(), trend: unreadMessagesCount > 0 ? `${unreadMessagesCount} require attention` : 'All read' },
      { name: 'Website Views', value: '1,204', trend: '+18% from last week' },
      { name: 'Active Users', value: '328', trend: '+5% from last week' }
    ]
  });
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running correctly' });
});

// --- Blog Endpoints ---

// Get all blogs
router.get('/blogs', (req, res) => {
  res.json(blogs);
});

// Get a single blog by ID
router.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Create a new blog
router.post('/blogs', (req, res) => {
  const { title, status, content, excerpt, author, category, image, externalLink } = req.body;
  const newBlog = {
    id: nextId++,
    title: title || 'Untitled Blog',
    date: new Date().toISOString().split('T')[0],
    status: status || 'Draft',
    content: content || '',
    excerpt: excerpt || '',
    author: author || 'Admin',
    category: category || 'Uncategorized',
    image: image || 'https://images.pexels.com/photos/1250283/pexels-photo-1250283.jpeg?auto=compress&cs=tinysrgb&w=800',
    externalLink: externalLink || ''
  };
  blogs.push(newBlog);
  saveData(blogsFilePath, blogs);
  res.status(201).json(newBlog);
});

// Update a blog
router.put('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex(b => b.id === id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...req.body };
    saveData(blogsFilePath, blogs);
    res.json(blogs[index]);
  } else {
    res.status(404).json({ error: 'Blog not found' });
  }
});

// Delete a blog
router.delete('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  blogs = blogs.filter(b => b.id !== id);
  saveData(blogsFilePath, blogs);
  res.status(204).send();
});

// --- Messages Endpoints ---

// Get all messages
router.get('/messages', (req, res) => {
  res.json(messages);
});

// Submit a new contact message
router.post('/messages', (req, res) => {
  const { name, email, subject, message } = req.body;
  const newMsg = {
    id: nextMessageId++,
    name: name || 'Anonymous',
    email: email || '',
    subject: subject || 'General Inquiry',
    message: message || '',
    date: new Date().toISOString().split('T')[0],
    status: 'Unread'
  };
  messages.unshift(newMsg);
  saveData(messagesFilePath, messages);
  res.status(201).json(newMsg);
});

// Update a message (status: Read / Unread)
router.put('/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = messages.findIndex(m => m.id === id);
  if (index !== -1) {
    messages[index] = { ...messages[index], ...req.body };
    saveData(messagesFilePath, messages);
    res.json(messages[index]);
  } else {
    res.status(404).json({ error: 'Message not found' });
  }
});

// Delete a message
router.delete('/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
  messages = messages.filter(m => m.id !== id);
  saveData(messagesFilePath, messages);
  res.status(204).send();
});

// --- Content Endpoints ---
const defaultSiteContent = {
  hero: {
    title: "Turning Himalayan Plastic Waste into Sustainable Value",
    subtitle: "Paramendo Nepal builds community-centric circular economies by upcycling high-density plastics and multi-layered waste into premium recycled boards, structural materials, and eco-friendly products."
  },
  impactMetrics: {
    badge: "Verified Impact",
    title: "Measurable Change, Real-World Value",
    metrics: [
      {
        id: 1,
        title: 'Plastic Waste Diverted',
        value: '10,000+ kg',
        description: 'Low-value plastics collected across remote high-altitude regions including Ree Village & Ruby Valley.',
      },
      {
        id: 2,
        title: 'Recycled Polymer Types',
        value: 'HDPE, PP & MLP',
        description: 'Upcycling multi-layered and rigid plastics that standard recyclers usually reject.',
      },
      {
        id: 3,
        title: 'Community Reach',
        value: 'Mountain Ecosystems',
        description: 'Local collection models providing income and environmental protection to remote Himalayan villages.',
      }
    ]
  },
  homeProducts: {
    title: "Our Products",
    subtitle: "Premium recycled boards, structural materials, and eco-friendly products made from high-density plastics and multi-layered waste.",
    products: [
      {
        id: 1,
        title: "Recycled HDPE Boards",
        description: "Heavy-duty boards designed to replace traditional timber and plywood."
      },
      {
        id: 2,
        title: "Eco-Friendly Furniture",
        description: "Sustainable furniture pieces crafted from upcycled multi-layered plastics."
      },
      {
        id: 3,
        title: "\"Carry Everest\" Souvenirs",
        description: "Premium eco-friendly mountain souvenirs supporting local communities."
      }
    ]
  },
  catalogue: {
    title: "Product Catalogue",
    subtitle: "Flip through our digital catalogue below to explore technical specifications, material dimensions, and full product line.",
    images: [
      '/catalogue/1.jpg',
      '/catalogue/2.jpg',
      '/catalogue/3.jpg',
      '/catalogue/4.jpg',
      '/catalogue/5.jpg',
      '/catalogue/6.jpg'
    ]
  },
  partners: {
    title: "Our Awesome Partners",
    subtitle: "Teaming up with incredible organizations to make Nepal cleaner and greener!",
    logos: [
      { id: 1, name: "Prarambha", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images.jpeg" },
      { id: 2, name: "Partner 2", url: "https://paramendonepal.com/wp-content/uploads/2024/07/2-1.png" },
      { id: 3, name: "Partner 3", url: "https://paramendonepal.com/wp-content/uploads/2024/07/download-2.png" },
      { id: 4, name: "Partner 4", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images-1.png" },
      { id: 5, name: "Partner 5", url: "https://paramendonepal.com/wp-content/uploads/2024/07/images-2.png" }
    ]
  },
  impactInsights: {
    title: "Impact & Insights",
    subtitle: "Watch how we are transforming plastic waste into sustainable solutions and building circular economies in remote Himalayan villages. Stay up to date with our newest recycling innovations, community stories, and environmental milestones."
  },
  sdg: {
    title: "Our Commitment To UN Sustainable Development Goals",
    paragraph1: "Paramendo Nepal activities are focused on adding value to the Triple Bottom Line of 'People, Planet and Prosperity', thereby creating an entity that can truly achieve a Net Positive Impact.",
    paragraph2: "With the United Nation's Sustainable Development Goals serving as a guiding light, all our activities have a positive environmental and social impact on individuals and communities across Nepal."
  },
  transformation: {
    title: "The Transformation",
    subtitle: "Drag the slider to see how shredded plastic waste from Dhading becomes high-grade construction material."
  },
  footer: {
    aboutText: "Transforming plastic waste into sustainable solutions. We are dedicated to creating a circular economy that empowers rural communities across Nepal.",
    location: "Pulchowk, Lalitpur, Bagmati Province, Nepal",
    email1: "contact@paramendonepal.com",
    email2: "paramendonepal@gmail.com"
  },
  contact: {
    heroTitle: "Join Our Journey Toward a Zero-Waste Future.",
    heroSubtitle: "Whether you are an architect looking for sustainable building supplies, a business seeking Extended Producer Responsibility (EPR) solutions, or a consumer choosing eco-friendly products, your partnership turns waste into purpose.",
    email1: "contact@paramendonepal.com",
    email2: "paramendonepal@gmail.com",
    location: "Pulchowk, Lalitpur, Nepal",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.1542112464817!2d85.31257827428458!3d27.678515376199098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19edf4545bd3%3A0xe5c043330fc58a7d!2sImpact%20Hub%20Kathmandu!5e1!3m2!1sen!2snp!4v1788077606111!5m2!1sen!2snp",
    socialLinks: {
      facebook: "https://www.facebook.com/ParamendoNepal",
      instagram: "https://www.instagram.com/paramendonepal/",
      linkedin: "https://www.linkedin.com/company/paramendo-nepal/"
    }
  }
};

let siteContent = loadData(contentFilePath, defaultSiteContent);

router.get('/content', (req, res) => {
  res.json(siteContent);
});

router.put('/content', (req, res) => {
  // Simple deep merge
  for (const key in req.body) {
    if (typeof req.body[key] === 'object' && !Array.isArray(req.body[key])) {
      siteContent[key] = { ...siteContent[key], ...req.body[key] };
    } else {
      siteContent[key] = req.body[key];
    }
  }
  saveData(contentFilePath, siteContent);
  res.json(siteContent);
});

export default router;
