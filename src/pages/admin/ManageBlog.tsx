import { Plus, Edit, Trash2, X, Upload, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const ManageBlog = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({ 
    title: '', status: 'Draft', content: '', 
    excerpt: '', author: '', category: '', image: '', externalLink: '' 
  });

  const loadPosts = () => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load posts:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const openModal = (post: any = null) => {
    setEditingPost(post);
    setUploadError(null);
    if (post) {
      setFormData({ 
        title: post.title, status: post.status, content: post.content || '',
        excerpt: post.excerpt || '', author: post.author || '', category: post.category || '', image: post.image || '', externalLink: post.externalLink || ''
      });
    } else {
      setFormData({ 
        title: '', status: 'Draft', content: '', 
        excerpt: '', author: '', category: '', image: '', externalLink: '' 
      });
    }
    setIsModalOpen(true);
  };

  const handleImageUpload = async (file: File) => {
    // 2MB product/blog image limit
    const MAX_SIZE = 2 * 1024 * 1024;
    setUploadError(null);

    if (file.size > MAX_SIZE) {
      setUploadError(`File size (${(file.size / (1024 * 1024)).toFixed(2)} MB) exceeds the 2MB limit.`);
      return;
    }

    setIsUploadingImage(true);
    const body = new FormData();
    body.append('image', file);

    try {
      const res = await fetch('/api/upload/product', {
        method: 'POST',
        body
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || 'Failed to upload image');
      }
      setFormData(prev => ({ ...prev, image: data.url }));
    } catch (err: any) {
      setUploadError(err.message || 'Error uploading image');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = editingPost ? `/api/blogs/${editingPost.id}` : '/api/blogs';
    const method = editingPost ? 'PUT' : 'POST';

    setIsSaving(true);
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to save blog post');
      return res.json();
    })
    .then(() => {
      setIsModalOpen(false);
      loadPosts();
    })
    .catch(err => {
      alert(err.message || 'Error saving post');
    })
    .finally(() => {
      setIsSaving(false);
    });
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      fetch(`/api/blogs/${id}`, { method: 'DELETE' }).then(() => loadPosts());
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Manage Blog Posts</h1>
        <button 
          onClick={() => openModal()}
          className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors w-full sm:w-auto justify-center"
        >
          <Plus size={20} className="mr-2" />
          New Post
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-600">
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={4} className="text-center py-8 text-slate-500">Loading blogs...</td></tr>
              ) : posts.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-8 text-slate-500">No blog posts found. Create one!</td></tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{post.title}</td>
                    <td className="px-6 py-4 text-slate-600">{post.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.status === 'Published' ? 'bg-primary-100 text-primary-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => openModal(post)} className="p-2 text-slate-400 hover:text-blue-600 transition-colors mr-2">
                        <Edit size={18} />
                      </button>
                      <button onClick={() => handleDelete(post.id)} className="p-2 text-slate-400 hover:text-red-600 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-xl my-8">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-900">{editingPost ? 'Edit Post' : 'Create New Post'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                <input 
                  required 
                  type="text" 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                  <select 
                    value={formData.status} 
                    onChange={e => setFormData({...formData, status: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                  <input 
                    type="text" 
                    value={formData.category} 
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
                  <input 
                    type="text" 
                    value={formData.author} 
                    onChange={e => setFormData({...formData, author: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">External Link (for News)</label>
                  <input 
                    type="text" 
                    value={formData.externalLink} 
                    onChange={e => setFormData({...formData, externalLink: e.target.value})}
                    placeholder="https://..."
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-700">Cover Image</label>
                  <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded">Max 2MB</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <label className={`inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-xl text-sm font-semibold cursor-pointer transition-colors shrink-0 ${isUploadingImage ? 'opacity-50 pointer-events-none' : ''}`}>
                    {isUploadingImage ? (
                      <>
                        <Loader2 size={16} className="animate-spin text-emerald-600" />
                        <span>Uploading (≤2MB)...</span>
                      </>
                    ) : (
                      <>
                        <Upload size={16} className="text-emerald-600" />
                        <span>Upload Image (≤ 2MB)</span>
                      </>
                    )}
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file);
                      }}
                    />
                  </label>

                  <input 
                    type="text" 
                    value={formData.image} 
                    onChange={e => setFormData({...formData, image: e.target.value})}
                    placeholder="Or paste image URL (e.g. /uploads/... or https://...)"
                    className="flex-1 w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 text-sm" 
                  />
                </div>

                {uploadError && (
                  <p className="text-xs text-rose-600 font-medium">{uploadError}</p>
                )}

                {formData.image ? (
                  <div className="mt-2 flex items-center gap-3">
                    <div className="rounded-xl overflow-hidden border border-slate-200 h-24 w-40 bg-slate-100 shrink-0">
                      <img 
                        src={formData.image} 
                        alt="Preview" 
                        className="w-full h-full object-cover" 
                        onError={(e: any) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, image: '' })}
                      className="text-xs text-rose-600 hover:text-rose-700 hover:underline"
                    >
                      Remove image
                    </button>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400">
                    Upload an image directly from your computer or enter an image link. Limit: 2MB.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label>
                <textarea 
                  rows={2} 
                  value={formData.excerpt} 
                  onChange={e => setFormData({...formData, excerpt: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Content</label>
                <textarea 
                  required 
                  rows={6} 
                  value={formData.content} 
                  onChange={e => setFormData({...formData, content: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" 
                />
              </div>
              
              <div className="flex justify-end pt-4 space-x-3">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)} 
                  disabled={isSaving}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSaving}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
                >
                  {isSaving ? 'Saving...' : editingPost ? 'Update' : 'Publish'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlog;
