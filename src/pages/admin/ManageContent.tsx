import { Save, CheckCircle2, AlertCircle, Loader2, Package, ArrowUpRight, PhoneCall, Upload, Trash2, Plus, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageContent = () => {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [uploadingPartnerIndex, setUploadingPartnerIndex] = useState<number | null>(null);
  const [partnerUploadError, setPartnerUploadError] = useState<string | null>(null);

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
          contact: {
            heroTitle: '',
            heroSubtitle: '',
            email1: '',
            email2: '',
            location: '',
            socialLinks: { facebook: '', instagram: '', linkedin: '' },
            ...data?.contact
          },
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

  const handlePartnerLogoUpload = async (index: number, file: File) => {
    const MAX_SIZE = 2 * 1024 * 1024; // 2MB limit
    setPartnerUploadError(null);

    if (file.size > MAX_SIZE) {
      setPartnerUploadError(`File size (${(file.size / (1024 * 1024)).toFixed(2)} MB) exceeds the 2MB limit.`);
      return;
    }

    setUploadingPartnerIndex(index);
    const body = new FormData();
    body.append('image', file);

    try {
      const res = await fetch('/api/upload/product', {
        method: 'POST',
        body
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to upload partner logo');
      }

      setContent((prev: any) => {
        const newLogos = [...(prev.partners?.logos || [])];
        newLogos[index] = { ...newLogos[index], url: data.url };
        return {
          ...prev,
          partners: {
            ...prev.partners,
            logos: newLogos
          }
        };
      });
    } catch (err: any) {
      setPartnerUploadError(err.message || 'Error uploading partner logo');
    } finally {
      setUploadingPartnerIndex(null);
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
          
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-md font-semibold text-slate-800">Partner Logos</h3>
              <p className="text-xs text-slate-500">Add partner organization logos either by direct image upload (≤ 2MB) or external URL.</p>
            </div>
            <button 
              type="button"
              onClick={() => {
                const newLogos = [...(content.partners.logos || []), { id: Date.now(), name: 'New Partner', url: '' }];
                handleNestedChange('partners', 'logos', newLogos);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 text-primary-700 hover:bg-primary-100 rounded-lg text-xs font-bold border border-primary-200 transition-colors"
            >
              <Plus size={14} />
              <span>Add Partner</span>
            </button>
          </div>

          {partnerUploadError && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-medium flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{partnerUploadError}</span>
            </div>
          )}

          <div className="space-y-4">
            {content.partners.logos?.length === 0 && (
              <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-slate-500 text-sm">
                No partner logos added yet. Click &quot;Add Partner&quot; to begin.
              </div>
            )}

            {content.partners.logos?.map((logo: any, index: number) => {
              const isUploadingThis = uploadingPartnerIndex === index;
              return (
                <div key={logo.id || index} className="bg-slate-50/70 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {/* Logo Preview thumbnail */}
                    <div className="w-24 h-20 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-2 shrink-0 shadow-sm overflow-hidden relative group">
                      {logo.url ? (
                        <img 
                          src={logo.url} 
                          alt={logo.name || 'Partner logo'} 
                          className="max-w-full max-h-full object-contain"
                          onError={(e: any) => { e.target.style.opacity = '0.3'; }}
                        />
                      ) : (
                        <div className="flex flex-col items-center text-slate-300">
                          <ImageIcon size={24} />
                          <span className="text-[10px] text-slate-400 mt-1 font-medium">No Logo</span>
                        </div>
                      )}
                    </div>

                    {/* Inputs */}
                    <div className="flex-1 w-full space-y-3">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                          <label className="block text-xs font-bold text-slate-600 mb-1">Partner Organization Name</label>
                          <input 
                            type="text" 
                            value={logo.name} 
                            placeholder="e.g. Prarambha, WWF, Coca-Cola..."
                            onChange={(e) => {
                              const newLogos = [...(content.partners.logos || [])];
                              newLogos[index] = { ...newLogos[index], name: e.target.value };
                              handleNestedChange('partners', 'logos', newLogos);
                            }} 
                            className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                          />
                        </div>

                        <div className="sm:w-auto self-end">
                          <button 
                            type="button" 
                            onClick={() => {
                              const newLogos = content.partners.logos.filter((_: any, i: number) => i !== index);
                              handleNestedChange('partners', 'logos', newLogos);
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-medium transition-colors border border-rose-200"
                            title="Remove Partner"
                          >
                            <Trash2 size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      {/* Image Upload + URL Input */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-600">Logo Image (Upload or URL)</label>
                          <span className="text-[10px] text-slate-500 bg-slate-200/70 px-1.5 py-0.5 rounded font-medium">Max 2MB</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                          <label className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-lg text-xs font-semibold cursor-pointer transition-colors shrink-0 shadow-sm ${isUploadingThis ? 'opacity-60 pointer-events-none' : ''}`}>
                            {isUploadingThis ? (
                              <>
                                <Loader2 size={14} className="animate-spin text-emerald-600" />
                                <span>Uploading...</span>
                              </>
                            ) : (
                              <>
                                <Upload size={14} className="text-emerald-600" />
                                <span>Upload File</span>
                              </>
                            )}
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              disabled={isUploadingThis}
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handlePartnerLogoUpload(index, file);
                                e.target.value = '';
                              }}
                            />
                          </label>

                          <input 
                            type="text" 
                            value={logo.url} 
                            placeholder="Or paste image URL (e.g. /uploads/... or https://...)"
                            onChange={(e) => {
                              const newLogos = [...(content.partners.logos || [])];
                              newLogos[index] = { ...newLogos[index], url: e.target.value };
                              handleNestedChange('partners', 'logos', newLogos);
                            }} 
                            className="flex-1 px-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 font-mono" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <button 
              type="button"
              onClick={() => {
                const newLogos = [...(content.partners.logos || []), { id: Date.now(), name: 'New Partner', url: '' }];
                handleNestedChange('partners', 'logos', newLogos);
              }}
              className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-sm font-semibold transition-colors border border-dashed border-slate-300 flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              <span>Add Another Partner Logo</span>
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

        {/* Products & Catalogue Shortcut Notice */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 max-w-3xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-emerald-600 text-white rounded-xl shrink-0">
                <Package size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800">Looking to manage Products & Catalogue?</h3>
                <p className="text-slate-600 text-xs mt-1">
                  Products (2MB image limit) and Catalogue (10MB image/PDF limit) are now exclusively managed in the dedicated <strong>Products & Catalogue</strong> panel to prevent accidental double-updates.
                </p>
              </div>
            </div>
            <Link
              to="/admin/products"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm shrink-0"
            >
              <span>Open Products Panel</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Contact Page Shortcut Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 max-w-3xl shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-blue-600 text-white rounded-xl shrink-0">
                <PhoneCall size={24} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800">Looking to manage Contact Details & Social Links?</h3>
                <p className="text-slate-600 text-xs mt-1">
                  Contact information (Emails, Physical Address, Google Map Embed, and Social Media links) has its own dedicated <strong>Contact Page</strong> tab on the left sidebar to prevent double-updates.
                </p>
              </div>
            </div>
            <Link
              to="/admin/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm shrink-0"
            >
              <span>Open Contact Panel</span>
              <ArrowUpRight size={14} />
            </Link>
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
