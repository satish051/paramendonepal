'use client';

import { useEffect, useState } from 'react';
import { getSiteMetrics, updateSiteMetric, deleteSiteMetric } from '../../actions/admin';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

export default function MetricsManager() {
  const [metrics, setMetrics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingKey, setEditingKey] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    key: '',
    value: '',
    label: '',
    icon: 'Recycle'
  });

  async function load() {
    setLoading(true);
    const data = await getSiteMetrics();
    setMetrics(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const openModal = (metric?: any) => {
    if (metric) {
      setEditingKey(metric.metricKey);
      setFormData({
        key: metric.metricKey,
        value: metric.metricValue.toString(),
        label: metric.label,
        icon: metric.icon || 'Recycle'
      });
    } else {
      setEditingKey(null);
      setFormData({ key: '', value: '', label: '', icon: 'Recycle' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateSiteMetric(
      editingKey || formData.key, 
      parseFloat(formData.value), 
      formData.label, 
      formData.icon
    );
    setIsModalOpen(false);
    load();
  };

  const handleDelete = async (key: string) => {
    if (confirm('Are you sure you want to delete this metric?')) {
      await deleteSiteMetric(key);
      load();
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">Metrics</h1>
        <button 
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-opacity-90"
        >
          <Plus className="w-5 h-5 mr-2" /> Add Metric
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-sm font-medium">
            <tr>
              <th className="px-6 py-4">Key</th>
              <th className="px-6 py-4">Label</th>
              <th className="px-6 py-4">Value</th>
              <th className="px-6 py-4">Icon</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {metrics.map((metric) => (
              <tr key={metric.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-sm text-gray-500">{metric.metricKey}</td>
                <td className="px-6 py-4 font-bold text-gray-900">{metric.label}</td>
                <td className="px-6 py-4 text-gray-600">{metric.metricValue}</td>
                <td className="px-6 py-4 text-gray-600">{metric.icon || '-'}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => openModal(metric)} className="text-blue-600 hover:text-blue-800 p-2">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(metric.metricKey)} className="text-red-600 hover:text-red-800 p-2 ml-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {metrics.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No metrics found. Click "Add Metric" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">{editingKey ? 'Edit Metric' : 'Add Metric'}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Metric Key (unique)</label>
                <input 
                  required 
                  type="text" 
                  value={formData.key} 
                  onChange={(e) => setFormData({...formData, key: e.target.value})} 
                  disabled={!!editingKey}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg disabled:bg-gray-100" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Label (e.g. Kg Plastic Recycled)</label>
                <input required type="text" value={formData.label} onChange={(e) => setFormData({...formData, label: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Value (Number)</label>
                <input required type="number" step="0.01" value={formData.value} onChange={(e) => setFormData({...formData, value: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Icon Name</label>
                <select 
                  value={formData.icon} 
                  onChange={(e) => setFormData({...formData, icon: e.target.value})} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="Recycle">Recycle</option>
                  <option value="Home">Home</option>
                  <option value="Factory">Factory</option>
                  <option value="Users">Users</option>
                </select>
              </div>
              <div className="pt-4 flex justify-end">
                <button type="submit" className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-opacity-90">
                  Save Metric
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
