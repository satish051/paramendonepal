'use client';

import { useEffect, useState } from 'react';
import { getQuoteRequests, updateQuoteStatus } from '../../actions/admin';
import { Mail, User, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function QuoteManager() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const data = await getQuoteRequests();
    setQuotes(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  const handleStatusChange = async (id: string, status: string) => {
    await updateQuoteStatus(id, status);
    load();
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-[var(--color-primary)]">Quote Requests</h1>
      </div>

      <div className="space-y-6">
        {quotes.map((quote) => (
          <div key={quote.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center border border-gray-200">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{quote.firstName} {quote.lastName}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Mail className="h-4 w-4 mr-1" /> {quote.email}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  value={quote.status}
                  onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                  className={`px-4 py-2 rounded-full text-sm font-bold border-0 cursor-pointer ${
                    quote.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                    quote.status === 'REVIEWED' ? 'bg-blue-100 text-blue-700' :
                    'bg-green-100 text-green-700'
                  }`}
                >
                  <option value="PENDING">Pending</option>
                  <option value="REVIEWED">Reviewed</option>
                  <option value="COMPLETED">Completed</option>
                </select>
                <div className="flex items-center text-gray-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {new Date(quote.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">
                {quote.inquiryType}
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{quote.message}</p>
            </div>
          </div>
        ))}
        {quotes.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900">No quote requests yet</h3>
            <p className="text-gray-500 mt-1">When customers contact you, their messages will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
