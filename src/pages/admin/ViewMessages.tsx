import { MailOpen, Trash2 } from 'lucide-react';

const ViewMessages = () => {
  const dummyMessages = [
    { id: 1, name: 'Satis Bdr', email: 'satis@example.com', subject: 'Partnership Inquiry', date: '2023-11-25', status: 'Unread' },
    { id: 2, name: 'Ramesh K.', email: 'ramesh@example.com', subject: 'Recycling Collection Request', date: '2023-11-24', status: 'Read' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Contact Messages</h1>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-slate-600">
                <th className="px-6 py-4 font-medium">Sender</th>
                <th className="px-6 py-4 font-medium">Subject</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyMessages.map((msg) => (
                <tr key={msg.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{msg.name}</div>
                    <div className="text-sm text-slate-500">{msg.email}</div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800">{msg.subject}</td>
                  <td className="px-6 py-4 text-slate-600">{msg.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      msg.status === 'Unread' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {msg.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-green-600 transition-colors mr-2" title="Mark as read">
                      <MailOpen size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 transition-colors" title="Delete">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewMessages;
