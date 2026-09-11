import { useState, useEffect } from 'react';
import { Mail, MailOpen, Trash2, X, RefreshCw, Eye } from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message?: string;
  date: string;
  status: string;
}

const ViewMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const fetchMessages = () => {
    setLoading(true);
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading messages:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const toggleStatus = (id: number, currentStatus: string) => {
    const nextStatus = currentStatus === 'Unread' ? 'Read' : 'Unread';
    fetch(`/api/messages/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: nextStatus })
    })
    .then(res => res.json())
    .then(updated => {
      setMessages(prev => prev.map(m => m.id === id ? { ...m, status: updated.status } : m));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(prev => prev ? { ...prev, status: updated.status } : null);
      }
    })
    .catch(console.error);
  };

  const handleDelete = (id: number) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    fetch(`/api/messages/${id}`, { method: 'DELETE' })
      .then(() => {
        setMessages(prev => prev.filter(m => m.id !== id));
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage(null);
        }
      })
      .catch(console.error);
  };

  const openMessage = (msg: ContactMessage) => {
    setSelectedMessage(msg);
    if (msg.status === 'Unread') {
      toggleStatus(msg.id, 'Unread');
    }
  };

  const unreadCount = messages.filter(m => m.status === 'Unread').length;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Contact Messages</h1>
          <p className="text-slate-500 text-sm mt-1">
            {unreadCount > 0 ? `${unreadCount} unread inquiry` : 'All inquiries read'}
          </p>
        </div>
        <button 
          onClick={fetchMessages}
          className="flex items-center px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-sm font-medium"
        >
          <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-600 text-sm">
                <th className="px-6 py-4 font-semibold">Sender</th>
                <th className="px-6 py-4 font-semibold">Subject</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-slate-500">Loading messages...</td>
                </tr>
              ) : messages.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-slate-500">
                    <Mail className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    No messages received yet.
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr 
                    key={msg.id} 
                    className={`hover:bg-slate-50/70 transition-colors cursor-pointer ${
                      msg.status === 'Unread' ? 'bg-primary-50/20 font-medium' : ''
                    }`}
                    onClick={() => openMessage(msg)}
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-900">{msg.name}</div>
                      <div className="text-xs text-slate-500">{msg.email}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-800 max-w-xs truncate">
                      {msg.subject}
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm whitespace-nowrap">
                      {msg.date}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                        msg.status === 'Unread' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {msg.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2" onClick={e => e.stopPropagation()}>
                      <button 
                        onClick={() => openMessage(msg)}
                        className="p-1.5 text-slate-400 hover:text-primary-600 rounded hover:bg-slate-100 transition-colors"
                        title="View details"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => toggleStatus(msg.id, msg.status)}
                        className="p-1.5 text-slate-400 hover:text-blue-600 rounded hover:bg-slate-100 transition-colors" 
                        title={msg.status === 'Unread' ? "Mark as read" : "Mark as unread"}
                      >
                        {msg.status === 'Unread' ? <MailOpen size={18} /> : <Mail size={18} />}
                      </button>
                      <button 
                        onClick={() => handleDelete(msg.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded hover:bg-slate-100 transition-colors" 
                        title="Delete message"
                      >
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

      {/* Message View Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-6">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedMessage.subject}</h3>
                <div className="text-sm text-slate-500 mt-1">
                  From: <span className="font-semibold text-slate-800">{selectedMessage.name}</span> ({selectedMessage.email})
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Date: {selectedMessage.date}</div>
              </div>
              <button 
                onClick={() => setSelectedMessage(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700 leading-relaxed whitespace-pre-wrap min-h-[120px]">
              {selectedMessage.message || 'No additional message body provided.'}
            </div>

            <div className="flex justify-between items-center pt-2">
              <a 
                href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                Reply via Email
              </a>

              <div className="space-x-3">
                <button 
                  onClick={() => toggleStatus(selectedMessage.id, selectedMessage.status)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Mark as {selectedMessage.status === 'Unread' ? 'Read' : 'Unread'}
                </button>
                <button 
                  onClick={() => setSelectedMessage(null)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMessages;
