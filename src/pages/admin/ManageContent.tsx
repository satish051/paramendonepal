import { Save } from 'lucide-react';
import { useState } from 'react';

const ManageContent = () => {
  const [heroTitle, setHeroTitle] = useState('Ree-Cycle');
  const [heroSubtitle, setHeroSubtitle] = useState('A waste management company that focuses on plastic waste, turning them into usable recycled products.');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Content saved! (This is a mock action. Real backend required for actual saving.)');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Website Content</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 max-w-3xl">
        <h2 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-100">Hero Section</h2>
        
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Main Title
            </label>
            <input
              type="text"
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Subtitle Description
            </label>
            <textarea
              rows={4}
              value={heroSubtitle}
              onChange={(e) => setHeroSubtitle(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save size={20} className="mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageContent;
