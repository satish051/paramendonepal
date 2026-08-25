'use client';

import { useEffect, useState } from 'react';
import { getBlogs, upsertBlog, deleteBlog } from '../../actions/admin';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

export default function BlogManager() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    type: 'Blog'
  });

  async function load() {
    setLoading(true);
    const data = await getBlogs();
    setBlogs(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const openModal = (blog?: any) => {
    if (blog) {
      setEditingId(blog.id);
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        imageUrl: blog.imageUrl || '',
        type: blog.type || 'Blog',
      });
    } else {
      setEditingId(null);
      setFormData({ title: '', excerpt: '', content: '', imageUrl: '', type: 'Blog' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await upsertBlog(editingId, formData);
    setIsModalOpen(false);
    load();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deleteBlog(id);
      load();
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">Media & Blog</h1>
        <button 
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-opacity-90"
        >
          <Plus className="w-5 h-5 mr-2" /> Add Post
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-500 text-sm font-medium">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Type</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-bold text-gray-900">{blog.title}</td>
                <td className="px-6 py-4 text-gray-600">
                  <span className="px-2 py-1 bg-gray-100 text-xs rounded-full">{blog.type}</span>
                </td>
                <td className="px-6 py-4 text-gray-600">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right">
                  <button onClick={() => openModal(blog)} className="text-blue-600 hover:text-blue-800 p-2">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button onClick={() => handleDelete(blog.id)} className="text-red-600 hover:text-red-800 p-2 ml-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {blogs.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  No posts found. Click "Add Post" to create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6">{editingId ? 'Edit Post' : 'Add Post'}</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input required type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg">
                    <option value="Blog">Blog</option>
                    <option value="Media">Media</option>
                    <option value="News">News</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input type="url" value={formData.imageUrl} onChange={(e) => setFormData({...formData, imageUrl: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="https://example.com/image.jpg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Short description)</label>
                <textarea required rows={2} value={formData.excerpt} onChange={(e) => setFormData({...formData, excerpt: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Content</label>
                <textarea required rows={8} value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div className="pt-4 flex justify-end">
                <button type="submit" className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-opacity-90">
                  Save Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
