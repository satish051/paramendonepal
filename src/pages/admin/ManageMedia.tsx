import { useState, useEffect, useRef } from 'react';
import { Upload, Trash2, Image as ImageIcon, Loader2 } from 'lucide-react';

interface MediaImage {
  filename: string;
  url: string;
  time: number;
}

const ManageMedia = () => {
  const [images, setImages] = useState<MediaImage[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // You will need to replace this base URL with your actual backend URL in production if different
  // For dev we proxy or use full url
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  const BASE_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : 'http://localhost:5000';

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${API_URL}/upload`);
      if (res.ok) {
        const data = await res.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      setIsUploading(true);
      const res = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        fetchImages();
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDelete = async (filename: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return;

    try {
      const res = await fetch(`${API_URL}/upload/${filename}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        setImages(images.filter(img => img.filename !== filename));
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const copyToClipboard = (url: string) => {
    const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
    navigator.clipboard.writeText(fullUrl);
    alert('Image URL copied to clipboard!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Media Gallery</h1>
        
        <div>
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden" 
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
          >
            {isUploading ? <Loader2 size={20} className="mr-2 animate-spin" /> : <Upload size={20} className="mr-2" />}
            Upload Image
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        {isLoading ? (
          <div className="flex justify-center items-center h-48">
            <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <ImageIcon className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No images uploaded yet</h3>
            <p className="mt-1 text-slate-500">Upload an image to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <div key={img.filename} className="group relative rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
                <div className="aspect-w-1 aspect-h-1 w-full bg-slate-100">
                  <img 
                    src={`${BASE_URL}${img.url}`} 
                    alt={img.filename}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center gap-3">
                  <button 
                    onClick={() => copyToClipboard(img.url)}
                    className="px-4 py-2 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors w-32"
                  >
                    Copy URL
                  </button>
                  <button 
                    onClick={() => handleDelete(img.filename)}
                    className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center w-32"
                  >
                    <Trash2 size={16} className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMedia;
