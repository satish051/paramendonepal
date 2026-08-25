'use client';

import { useEffect, useState } from 'react';
import { getSiteContent, updateSiteContent } from '../../actions/admin';
import { Save } from 'lucide-react';

export default function ContentEditor() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function load() {
      const data = await getSiteContent();
      setContent({
        hero_title: data.hero_title || 'Building a Sustainable Future for Nepal',
        hero_subtitle: data.hero_subtitle || 'Transforming plastic waste into high-quality PP tiles and LDPE roofing sheets. Empowering communities through the Plastic to Ghar (P2G) Makeathon.',
        about_text: data.about_text || 'Our story...',
      });
      setLoading(false);
    }
    load();
  }, []);

  const handleChange = (key: string, value: string) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    
    try {
      for (const [key, value] of Object.entries(content)) {
        await updateSiteContent(key, value);
      }
      setMessage('Content saved successfully!');
    } catch (err) {
      setMessage('Failed to save content.');
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">Site Content</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-4xl">
        <form onSubmit={handleSave} className="space-y-8">
          
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">Hero Section</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
                <input
                  type="text"
                  value={content.hero_title}
                  onChange={(e) => handleChange('hero_title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hero Subtitle</label>
                <textarea
                  rows={3}
                  value={content.hero_subtitle}
                  onChange={(e) => handleChange('hero_subtitle', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">About Section</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">About Text</label>
              <textarea
                rows={5}
                value={content.about_text}
                onChange={(e) => handleChange('about_text', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center justify-end pt-4 space-x-4">
            {message && <span className="text-sm font-medium text-green-600">{message}</span>}
            <button
              type="submit"
              disabled={saving}
              className="flex items-center px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
            >
              <Save className="w-5 h-5 mr-2" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
