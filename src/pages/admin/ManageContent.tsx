import { Save } from 'lucide-react';
import { useState, useEffect } from 'react';

const ManageContent = () => {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setIsLoading(false);
      });
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content)
    })
    .then(res => res.json())
    .then(() => alert('Content updated successfully!'));
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

  if (isLoading) return <div className="text-slate-500">Loading content...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Website Content</h1>

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
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
              <input type="text" value={content.homeProducts.title} onChange={(e) => handleNestedChange('homeProducts', 'title', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Subtitle</label>
              <textarea rows={2} value={content.homeProducts.subtitle} onChange={(e) => handleNestedChange('homeProducts', 'subtitle', e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-primary-500 focus:border-primary-500" />
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

        <div className="flex justify-start max-w-3xl">
          <button type="submit" className="flex items-center px-8 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-colors shadow-lg">
            <Save size={20} className="mr-2" />
            Save All Content Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageContent;
