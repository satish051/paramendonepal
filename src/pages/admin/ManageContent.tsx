import { Save, CheckCircle2, AlertCircle, Loader2, Upload } from 'lucide-react';
import { useState, useEffect } from 'react';

const ManageContent = () => {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [uploadingCatalogueIndex, setUploadingCatalogueIndex] = useState<number | null>(null);
  const [isUploadingNewCatalogue, setIsUploadingNewCatalogue] = useState(false);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent({
          partners: { title: '', subtitle: '', logos: [], ...data?.partners },
          hero: { title: '', subtitle: '', ...data?.hero },
          impactMetrics: { badge: '', title: '', metrics: [], ...data?.impactMetrics },
          homeProducts: {
            title: '',
            subtitle: '',
            ...data?.homeProducts,
            products: data?.homeProducts?.products || []
          },
          catalogue: data?.catalogue || {
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
          impactInsights: { title: '', subtitle: '', ...data?.impactInsights },
          sdg: { title: '', paragraph1: '', paragraph2: '', ...data?.sdg },
          transformation: { title: '', subtitle: '', ...data?.transformation },
          footer: { aboutText: '', location: '', email1: '', email2: '', ...data?.footer },
          ...data
        });
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Failed to load content:', err);
        setSaveError('Failed to fetch website content.');
        setIsLoading(false);
      });
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    setSaveError('');

    fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to update content');
      return res.json();
    })
    .then(() => {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    })
    .catch(err => {
      setSaveError(err.message || 'Error updating content');
    })
    .finally(() => {
      setIsSaving(false);
    });
  };

  const handleNestedChange = (section: string, field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleMetricChange = (index: number, field: string, value: string) => {
    setContent((prev: any) => {
      const newMetrics = [...prev.impactMetrics.metrics];
      newMetrics[index] = { ...newMetrics[index], [field]: value };
      return {
        ...prev,
        impactMetrics: {
          ...prev.impactMetrics,
          metrics: newMetrics
        }
      };
    });
  };

  const handleProductImageUpload = async (index: number, file: File) => {
    // 2MB product upload limit
    const MAX_SIZE = 2 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      alert(`File size (${(file.size / (1024 * 1024)).toFixed(2)} MB) exceeds the 2MB limit for products.`);
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    setUploadingIndex(index);
    try {
      const res = await fetch('/api/upload/product', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Upload failed');
      }
      const newProducts = [...(content.homeProducts?.products || [])];
      newProducts[index] = { ...newProducts[index], image: data.url };
      handleNestedChange('homeProducts', 'products', newProducts);
    } catch (err: any) {
      alert(err.message || 'Error uploading product image');
    } finally {
      setUploadingIndex(null);
    }
  };

  const handleCatalogueUpload = async (index: number | null, file: File) => {
    // 10MB catalogue upload limit
    const MAX_SIZE = 10 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      alert(`File size (${(file.size / (1024 * 1024)).toFixed(2)} MB) exceeds the 10MB limit for the product catalogue.`);
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    if (index !== null) {
      setUploadingCatalogueIndex(index);
    } else {
      setIsUploadingNewCatalogue(true);
    }

    try {
      const res = await fetch('/api/upload/catalogue', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Upload failed');
      }

      if (index !== null) {
        const newImages = [...(content.catalogue?.images || [])];
        newImages[index] = data.url;
        handleNestedChange('catalogue', 'images', newImages);
      } else {
        const newImages = [...(content.catalogue?.images || []), data.url];
        handleNestedChange('catalogue', 'images', newImages);
      }
    } catch (err: any) {
      alert(err.message || 'Error uploading catalogue page');
    } finally {
      if (index !== null) {
        setUploadingCatalogueIndex(null);
      } else {
        setIsUploadingNewCatalogue(false);
      }
    }
  };

  if (isLoading) return <div className="text-slate-500">Loading content...</div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Edit Website Content</h1>
          <p className="text-slate-500 text-sm mt-1">Manage global website sections, texts, products, and catalogue.</p>
        </div>

        <button 
          onClick={handleSave} 
          disabled={isSaving}
          className="flex items-center px-6 py-2.5 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-sm disabled:opacity-50 text-sm"
        >
          {isSaving ? <Loader2 size={18} className="mr-2 animate-spin" /> : <Save size={18} className="mr-2" />}
          {isSaving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      {saveSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center shadow-sm max-w-3xl">
          <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-600 flex-shrink-0" />
          <span className="text-sm font-medium">All website content and products have been saved successfully!</span>
        </div>
      )}

      {saveError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center shadow-sm max-w-3xl">
          <AlertCircle className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
          <span className="text-sm font-medium">{saveError}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Our Partners Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">Our Partners</h2>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Main Title</label>
              <input type="text" value={content.partners.title} onChange={(e) => handleNestedChange('partners', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
              <textarea rows={3} value={content.partners.subtitle} onChange={(e) => handleNestedChange('partners', 'subtitle', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-700 mb-3">Partner Logos</h3>
          <div className="space-y-4">
            {content.partners.logos?.map((logo: any, index: number) => (
              <div key={logo.id || index} className="flex gap-4 items-end bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex-1">
                  <label className="block text-xs font-bold text-slate-500 mb-1">Partner Name</label>
                  <input type="text" value={logo.name} onChange={(e) => {
                    const newLogos = [...(content.partners.logos || [])];
                    newLogos[index] = { ...newLogos[index], name: e.target.value };
                    handleNestedChange('partners', 'logos', newLogos);
                  }} className="w-full px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="flex-[2]">
                  <label className="block text-xs font-bold text-slate-500 mb-1">Logo Image URL</label>
                  <input type="text" value={logo.url} onChange={(e) => {
                    const newLogos = [...(content.partners.logos || [])];
                    newLogos[index] = { ...newLogos[index], url: e.target.value };
                    handleNestedChange('partners', 'logos', newLogos);
                  }} className="w-full px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <button 
                  type="button" 
                  onClick={() => {
                    const newLogos = content.partners.logos.filter((_: any, i: number) => i !== index);
                    handleNestedChange('partners', 'logos', newLogos);
                  }}
                  className="px-3 py-1.5 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button 
              type="button"
              onClick={() => {
                const newLogos = [...(content.partners.logos || []), { id: Date.now(), name: 'New Partner', url: '' }];
                handleNestedChange('partners', 'logos', newLogos);
              }}
              className="mt-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors border border-slate-200"
            >
              + Add Partner Logo
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">Hero Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Main Title</label>
              <input type="text" value={content.hero.title} onChange={(e) => handleNestedChange('hero', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
              <textarea rows={3} value={content.hero.subtitle} onChange={(e) => handleNestedChange('hero', 'subtitle', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>
        </div>

        {/* Impact Metrics Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">Impact Metrics (Verified Impact)</h2>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Badge Text</label>
              <input type="text" value={content.impactMetrics.badge} onChange={(e) => handleNestedChange('impactMetrics', 'badge', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Main Title</label>
              <input type="text" value={content.impactMetrics.title} onChange={(e) => handleNestedChange('impactMetrics', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>
          
          <h3 className="text-md font-semibold text-slate-700 mb-3">Metric Items</h3>
          <div className="space-y-6">
            {content.impactMetrics.metrics.map((metric: any, index: number) => (
              <div key={metric.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Metric {index + 1} - Title</label>
                  <input type="text" value={metric.title} onChange={(e) => handleMetricChange(index, 'title', e.target.value)} className="w-full px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Metric {index + 1} - Value</label>
                  <input type="text" value={metric.value} onChange={(e) => handleMetricChange(index, 'value', e.target.value)} className="w-full px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Metric {index + 1} - Description</label>
                  <textarea rows={2} value={metric.description} onChange={(e) => handleMetricChange(index, 'description', e.target.value)} className="w-full px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Products Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">Our Products</h2>
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input type="text" value={content.homeProducts?.title || ''} onChange={(e) => handleNestedChange('homeProducts', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
              <textarea rows={2} value={content.homeProducts?.subtitle || ''} onChange={(e) => handleNestedChange('homeProducts', 'subtitle', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>

          <h3 className="text-md font-semibold text-slate-700 mb-3">Product Items</h3>
          <div className="space-y-4">
            {content.homeProducts?.products?.map((product: any, index: number) => (
              <div key={product.id || index} className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Product #{index + 1}</span>
                  <button 
                    type="button" 
                    onClick={() => {
                      const newProducts = content.homeProducts.products.filter((_: any, i: number) => i !== index);
                      handleNestedChange('homeProducts', 'products', newProducts);
                    }}
                    className="px-2.5 py-1 bg-red-100 text-red-600 rounded text-xs font-medium hover:bg-red-200 transition-colors"
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Product Title</label>
                  <input 
                    type="text" 
                    value={product.title || ''} 
                    onChange={(e) => {
                      const newProducts = [...(content.homeProducts.products || [])];
                      newProducts[index] = { ...newProducts[index], title: e.target.value };
                      handleNestedChange('homeProducts', 'products', newProducts);
                    }} 
                    className="w-full px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Description</label>
                  <textarea 
                    rows={2} 
                    value={product.description || ''} 
                    onChange={(e) => {
                      const newProducts = [...(content.homeProducts.products || [])];
                      newProducts[index] = { ...newProducts[index], description: e.target.value };
                      handleNestedChange('homeProducts', 'products', newProducts);
                    }} 
                    className="w-full px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Product Image (Max 2MB)</label>
                  <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                    <input 
                      type="text" 
                      value={product.image || ''} 
                      onChange={(e) => {
                        const newProducts = [...(content.homeProducts.products || [])];
                        newProducts[index] = { ...newProducts[index], image: e.target.value };
                        handleNestedChange('homeProducts', 'products', newProducts);
                      }} 
                      placeholder="https://... or upload image"
                      className="flex-1 px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500 w-full sm:w-auto" 
                    />
                    <label className={`inline-flex items-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 rounded text-sm font-medium cursor-pointer transition-colors flex-shrink-0 ${uploadingIndex === index ? 'opacity-50 pointer-events-none' : ''}`}>
                      {uploadingIndex === index ? (
                        <>
                          <Loader2 size={16} className="mr-1.5 animate-spin text-primary-600" />
                          <span>Uploading...</span>
                        </>
                      ) : (
                        <>
                          <Upload size={16} className="mr-1.5 text-primary-600" />
                          <span>Upload (Max 2MB)</span>
                        </>
                      )}
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleProductImageUpload(index, e.target.files[0]);
                          }
                        }}
                      />
                    </label>
                  </div>

                  {product.image && (
                    <div className="mt-2.5 flex items-center gap-3">
                      <div className="h-16 w-16 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt="Product preview" 
                          className="h-full w-full object-cover" 
                          onError={(e: any) => { e.target.style.display = 'none'; }}
                        />
                      </div>
                      <span className="text-xs text-slate-500 truncate max-w-xs">{product.image}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const newProducts = [...(content.homeProducts.products || [])];
                          newProducts[index] = { ...newProducts[index], image: '' };
                          handleNestedChange('homeProducts', 'products', newProducts);
                        }}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Remove Image
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button 
              type="button"
              onClick={() => {
                const newProducts = [
                  ...(content.homeProducts?.products || []),
                  { id: Date.now(), title: 'New Product', description: '', image: '' }
                ];
                handleNestedChange('homeProducts', 'products', newProducts);
              }}
              className="mt-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors border border-slate-200"
            >
              + Add Product
            </button>
          </div>
        </div>

        {/* Product Catalogue Section */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800">Product Catalogue</h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-secondary-50 text-secondary-700 border border-secondary-200">
              10MB Limit per File
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Catalogue Section Title</label>
              <input 
                type="text" 
                value={content.catalogue?.title || ''} 
                onChange={(e) => handleNestedChange('catalogue', 'title', e.target.value)} 
                className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Catalogue Subtitle</label>
              <textarea 
                rows={2} 
                value={content.catalogue?.subtitle || ''} 
                onChange={(e) => handleNestedChange('catalogue', 'subtitle', e.target.value)} 
                className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" 
              />
            </div>
          </div>

          <h3 className="text-md font-semibold text-slate-700 mb-3">Catalogue Pages (Max 10MB per file)</h3>
          <div className="space-y-3">
            {content.catalogue?.images?.map((imgUrl: string, index: number) => (
              <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                <div className="flex gap-2 items-center">
                  <span className="text-xs font-bold text-slate-500 w-14 flex-shrink-0">Page {index + 1}</span>
                  <input 
                    type="text" 
                    value={imgUrl} 
                    onChange={(e) => {
                      const newImages = [...(content.catalogue?.images || [])];
                      newImages[index] = e.target.value;
                      handleNestedChange('catalogue', 'images', newImages);
                    }} 
                    placeholder="/catalogue/1.jpg or image URL"
                    className="flex-1 px-3 py-1.5 text-sm border rounded focus:ring-primary-500 focus:border-primary-500 min-w-0" 
                  />
                  <label className={`inline-flex items-center px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded text-sm font-medium cursor-pointer transition-colors flex-shrink-0 ${uploadingCatalogueIndex === index ? 'opacity-50 pointer-events-none' : ''}`}>
                    {uploadingCatalogueIndex === index ? (
                      <>
                        <Loader2 size={16} className="mr-1 animate-spin text-primary-600" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload size={16} className="mr-1 text-primary-600" />
                        <span>Upload (10MB)</span>
                      </>
                    )}
                    <input 
                      type="file" 
                      accept="image/*,application/pdf" 
                      className="hidden" 
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleCatalogueUpload(index, e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                  <button 
                    type="button" 
                    onClick={() => {
                      const newImages = content.catalogue.images.filter((_: any, i: number) => i !== index);
                      handleNestedChange('catalogue', 'images', newImages);
                    }}
                    className="px-3 py-1.5 bg-red-100 text-red-600 rounded text-sm hover:bg-red-200 transition-colors flex-shrink-0"
                  >
                    Remove
                  </button>
                </div>

                {imgUrl && (
                  <div className="flex items-center gap-3 pl-14">
                    <div className="h-12 w-12 rounded border border-slate-200 overflow-hidden bg-white flex-shrink-0">
                      <img 
                        src={imgUrl} 
                        alt={`Page ${index + 1}`} 
                        className="h-full w-full object-cover" 
                        onError={(e: any) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <span className="text-xs text-slate-500 truncate max-w-sm">{imgUrl}</span>
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                type="button"
                onClick={() => {
                  const newImages = [...(content.catalogue?.images || []), ''];
                  handleNestedChange('catalogue', 'images', newImages);
                }}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors border border-slate-200"
              >
                + Add Empty Page URL
              </button>

              <label className={`inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 hover:bg-primary-100 border border-primary-200 rounded-lg text-sm font-medium cursor-pointer transition-colors ${isUploadingNewCatalogue ? 'opacity-50 pointer-events-none' : ''}`}>
                {isUploadingNewCatalogue ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin text-primary-600" />
                    <span>Uploading Catalogue Page...</span>
                  </>
                ) : (
                  <>
                    <Upload size={16} className="mr-2 text-primary-600" />
                    <span>Upload New Page (Max 10MB)</span>
                  </>
                )}
                <input 
                  type="file" 
                  accept="image/*,application/pdf" 
                  className="hidden" 
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleCatalogueUpload(null, e.target.files[0]);
                    }
                  }}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Impact & Insights */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">Impact & Insights</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input type="text" value={content.impactInsights.title} onChange={(e) => handleNestedChange('impactInsights', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
              <textarea rows={3} value={content.impactInsights.subtitle} onChange={(e) => handleNestedChange('impactInsights', 'subtitle', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>
        </div>

        {/* SDG Commitment */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">SDG Commitment</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input type="text" value={content.sdg.title} onChange={(e) => handleNestedChange('sdg', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Paragraph 1</label>
              <textarea rows={3} value={content.sdg.paragraph1} onChange={(e) => handleNestedChange('sdg', 'paragraph1', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Paragraph 2</label>
              <textarea rows={3} value={content.sdg.paragraph2} onChange={(e) => handleNestedChange('sdg', 'paragraph2', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>
        </div>

        {/* The Transformation */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
          <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">The Transformation</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input type="text" value={content.transformation.title} onChange={(e) => handleNestedChange('transformation', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
              <textarea rows={2} value={content.transformation.subtitle} onChange={(e) => handleNestedChange('transformation', 'subtitle', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-start max-w-3xl pt-4">
          <button 
            type="submit" 
            disabled={isSaving}
            className="flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg disabled:opacity-50"
          >
            {isSaving ? <Loader2 size={20} className="mr-2 animate-spin" /> : <Save size={20} className="mr-2" />}
            {isSaving ? 'Saving Changes...' : 'Save All Content Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageContent;
