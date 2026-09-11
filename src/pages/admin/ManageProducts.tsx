import React, { useState, useEffect } from 'react';
import { 
  Package, 
  BookOpen, 
  Upload, 
  Plus, 
  Trash2, 
  Save, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Image as ImageIcon,
  FileText,
  MoveUp,
  MoveDown
} from 'lucide-react';

interface ProductItem {
  id: number;
  title: string;
  description: string;
  image?: string;
}

interface HomeProductsData {
  title: string;
  subtitle: string;
  products: ProductItem[];
}

interface CatalogueData {
  title: string;
  subtitle: string;
  images: string[];
}

const ManageProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'catalogue'>('products');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Products state
  const [productsData, setProductsData] = useState<HomeProductsData>({
    title: 'Our Products',
    subtitle: 'Premium recycled boards, structural materials, and eco-friendly products made from high-density plastics and multi-layered waste.',
    products: []
  });

  // Catalogue state
  const [catalogueData, setCatalogueData] = useState<CatalogueData>({
    title: 'Product Catalogue',
    subtitle: 'Flip through our digital catalogue below to explore technical specifications, material dimensions, and full product line.',
    images: []
  });

  // Uploading state tracking
  const [uploadingProductId, setUploadingProductId] = useState<number | null>(null);
  const [isUploadingCatalogue, setIsUploadingCatalogue] = useState(false);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/content');
      if (res.ok) {
        const data = await res.json();
        if (data.homeProducts) {
          setProductsData(data.homeProducts);
        }
        if (data.catalogue) {
          setCatalogueData(data.catalogue);
        }
      }
    } catch (err) {
      console.error('Failed to fetch site content:', err);
      setMessage({ type: 'error', text: 'Failed to load existing products and catalogue data.' });
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  // Product handlers
  const handleProductFieldChange = (id: number, field: keyof ProductItem, value: string) => {
    setProductsData(prev => ({
      ...prev,
      products: prev.products.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  const handleAddProduct = () => {
    const newId = Date.now();
    const newProduct: ProductItem = {
      id: newId,
      title: 'New Recycled Product',
      description: 'Product description and technical advantages...',
      image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    setProductsData(prev => ({
      ...prev,
      products: [...prev.products, newProduct]
    }));
  };

  const handleDeleteProduct = (id: number) => {
    if (!window.confirm('Are you sure you want to remove this product?')) return;
    setProductsData(prev => ({
      ...prev,
      products: prev.products.filter(p => p.id !== id)
    }));
  };

  const handleProductUpload = async (id: number, file: File) => {
    // Client-side quick check
    if (file.size > 2 * 1024 * 1024) {
      showNotification('error', `Selected file "${file.name}" exceeds the 2MB limit for product images.`);
      return;
    }

    setUploadingProductId(id);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload/product', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      handleProductFieldChange(id, 'image', data.url);
      showNotification('success', 'Product image uploaded successfully (within 2MB limit)!');
    } catch (err: any) {
      console.error(err);
      showNotification('error', err.message || 'Failed to upload product image.');
    } finally {
      setUploadingProductId(null);
    }
  };

  // Catalogue handlers
  const handleCatalogueUpload = async (file: File) => {
    // Client-side quick check (10MB)
    if (file.size > 10 * 1024 * 1024) {
      showNotification('error', `Selected file "${file.name}" exceeds the 10MB limit for catalogue items.`);
      return;
    }

    setIsUploadingCatalogue(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/upload/catalogue', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      setCatalogueData(prev => ({
        ...prev,
        images: [...prev.images, data.url]
      }));
      showNotification('success', 'Catalogue page/document uploaded successfully (within 10MB limit)!');
    } catch (err: any) {
      console.error(err);
      showNotification('error', err.message || 'Failed to upload catalogue file.');
    } finally {
      setIsUploadingCatalogue(false);
    }
  };

  const handleDeleteCatalogueImage = (index: number) => {
    setCatalogueData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleMoveCatalogueImage = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= catalogueData.images.length) return;
    
    const updated = [...catalogueData.images];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;

    setCatalogueData(prev => ({
      ...prev,
      images: updated
    }));
  };

  // Save all changes
  const handleSaveAll = async () => {
    setIsSaving(true);
    try {
      // First get existing content to preserve other sections
      const getRes = await fetch('/api/content');
      let currentFullContent = {};
      if (getRes.ok) {
        currentFullContent = await getRes.json();
      }

      const updatedContent = {
        ...currentFullContent,
        homeProducts: productsData,
        catalogue: catalogueData
      };

      const putRes = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedContent)
      });

      if (!putRes.ok) {
        throw new Error('Failed to save changes to the server.');
      }

      showNotification('success', 'Products & Catalogue saved successfully! Changes are live on the website.');
    } catch (err: any) {
      console.error(err);
      showNotification('error', err.message || 'An error occurred while saving.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            <Package className="text-emerald-600" size={28} />
            Products & Catalogue Management
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your featured eco-products and flipbook digital catalogue.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/products"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <ExternalLink size={16} />
            View Live Page
          </a>
          <button
            onClick={handleSaveAll}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all disabled:opacity-50"
          >
            <Save size={18} />
            {isSaving ? 'Saving Changes...' : 'Save All Changes'}
          </button>
        </div>
      </div>

      {/* Notification Toast */}
      {message && (
        <div 
          className={`p-4 rounded-xl flex items-center gap-3 border shadow-sm transition-all ${
            message.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
              : 'bg-rose-50 text-rose-800 border-rose-200'
          }`}
        >
          {message.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span className="text-sm font-medium">{message.text}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 gap-6">
        <button
          onClick={() => setActiveTab('products')}
          className={`pb-4 px-2 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'products'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Package size={18} />
          Products Section ({productsData.products?.length || 0})
        </button>
        <button
          onClick={() => setActiveTab('catalogue')}
          className={`pb-4 px-2 text-sm font-bold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'catalogue'
              ? 'border-emerald-600 text-emerald-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <BookOpen size={18} />
          Digital Catalogue ({catalogueData.images?.length || 0} Pages)
        </button>
      </div>

      {/* Tab 1: Products */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          {/* Section Headers Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-lg font-bold text-slate-800">Section Header & Subtitle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Section Title
                </label>
                <input
                  type="text"
                  value={productsData.title}
                  onChange={(e) => setProductsData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. Our Products"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Section Subtitle
                </label>
                <input
                  type="text"
                  value={productsData.subtitle}
                  onChange={(e) => setProductsData(prev => ({ ...prev, subtitle: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Subtitle description..."
                />
              </div>
            </div>
          </div>

          {/* Product Items List */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">Product Items</h2>
            <button
              onClick={handleAddProduct}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl text-sm font-semibold transition-colors"
            >
              <Plus size={16} />
              Add Product
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {productsData.products?.map((product, idx) => (
              <div 
                key={product.id}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg">
                      Product #{idx + 1}
                    </span>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* Image Preview & Upload */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Product Image (Max: 2MB)
                    </label>
                    <div className="flex items-start gap-4">
                      <div className="relative w-28 h-28 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        {product.image ? (
                          <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <ImageIcon size={24} />
                          </div>
                        )}
                        {uploadingProductId === product.id && (
                          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-b-transparent"></div>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 space-y-2">
                        <label className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl cursor-pointer transition-colors">
                          <Upload size={14} />
                          Choose Image (≤ 2MB)
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleProductUpload(product.id, file);
                            }}
                          />
                        </label>
                        <input
                          type="text"
                          value={product.image || ''}
                          onChange={(e) => handleProductFieldChange(product.id, 'image', e.target.value)}
                          placeholder="Or paste image URL"
                          className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                        <p className="text-[11px] text-slate-400">
                          Strictly enforced backend limit: 2MB per product image.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={product.title}
                      onChange={(e) => handleProductFieldChange(product.id, 'title', e.target.value)}
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="e.g. Recycled HDPE Boards"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={product.description}
                      onChange={(e) => handleProductFieldChange(product.id, 'description', e.target.value)}
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Heavy-duty boards designed to replace timber..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Digital Catalogue */}
      {activeTab === 'catalogue' && (
        <div className="space-y-6">
          {/* Section Headers Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-lg font-bold text-slate-800">Catalogue Header & Intro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Catalogue Title
                </label>
                <input
                  type="text"
                  value={catalogueData.title}
                  onChange={(e) => setCatalogueData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="e.g. Product Catalogue"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Catalogue Subtitle
                </label>
                <input
                  type="text"
                  value={catalogueData.subtitle}
                  onChange={(e) => setCatalogueData(prev => ({ ...prev, subtitle: e.target.value }))}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Flip through our digital catalogue..."
                />
              </div>
            </div>
          </div>

          {/* Upload New Catalogue Page / Document */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-bold text-slate-800">Upload Catalogue Pages / PDF</h2>
                <p className="text-slate-500 text-xs mt-0.5">
                  Upload catalog pages (Images or PDF) up to <strong>10MB</strong> per file.
                </p>
              </div>

              <label className={`inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium text-sm cursor-pointer shadow-md shadow-emerald-600/20 transition-all ${isUploadingCatalogue ? 'opacity-50 pointer-events-none' : ''}`}>
                <Upload size={16} />
                {isUploadingCatalogue ? 'Uploading (≤ 10MB)...' : 'Upload File (≤ 10MB)'}
                <input 
                  type="file" 
                  accept="image/*,application/pdf" 
                  className="hidden" 
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleCatalogueUpload(file);
                  }}
                />
              </label>
            </div>
          </div>

          {/* Catalogue Pages Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider">
              Current Catalogue Sequence ({catalogueData.images.length} pages)
            </h3>

            {catalogueData.images.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 text-slate-500">
                <BookOpen size={40} className="mx-auto text-slate-400 mb-2" />
                <p className="text-sm font-medium">No catalogue pages uploaded yet.</p>
                <p className="text-xs text-slate-400">Upload images or PDF documents up to 10MB to build the interactive flipbook viewer.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {catalogueData.images.map((src, index) => {
                  const isPdf = src.toLowerCase().endsWith('.pdf');
                  return (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm group hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="aspect-[3/4] relative bg-slate-100 flex items-center justify-center overflow-hidden">
                        {isPdf ? (
                          <div className="flex flex-col items-center justify-center p-4 text-center">
                            <FileText size={36} className="text-rose-500 mb-2" />
                            <span className="text-[11px] font-semibold text-slate-700 truncate max-w-full">
                              PDF Document
                            </span>
                          </div>
                        ) : (
                          <img 
                            src={src} 
                            alt={`Page ${index + 1}`} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                          Page {index + 1}
                        </span>
                      </div>

                      <div className="p-2.5 bg-white border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => handleMoveCatalogueImage(index, 'up')}
                            disabled={index === 0}
                            className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-30 rounded hover:bg-slate-100"
                            title="Move Earlier"
                          >
                            <MoveUp size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleMoveCatalogueImage(index, 'down')}
                            disabled={index === catalogueData.images.length - 1}
                            className="p-1 text-slate-400 hover:text-slate-700 disabled:opacity-30 rounded hover:bg-slate-100"
                            title="Move Later"
                          >
                            <MoveDown size={14} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleDeleteCatalogueImage(index)}
                          className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                          title="Remove Page"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
