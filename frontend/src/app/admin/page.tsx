export const dynamic = "force-dynamic";
import { getQuoteRequests } from '../actions/admin';

export default async function AdminDashboard() {
  const quotes = await getQuoteRequests();
  const pendingQuotes = quotes.filter(q => q.status === 'PENDING').length;

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-[var(--color-primary)] mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium mb-2">Total Quote Requests</h3>
          <p className="text-4xl font-bold text-gray-900">{quotes.length}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium mb-2">Pending Quotes</h3>
          <p className="text-4xl font-bold text-yellow-600">{pendingQuotes}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Recent Leads & Quotes</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-sm font-medium">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {quotes.slice(0, 10).map((quote) => (
                <tr key={quote.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{quote.firstName} {quote.lastName}</td>
                  <td className="px-6 py-4 text-gray-600">{quote.email}</td>
                  <td className="px-6 py-4 text-gray-600">{quote.inquiryType}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      quote.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 
                      quote.status === 'REVIEWED' ? 'bg-blue-100 text-blue-700' : 
                      'bg-green-100 text-green-700'
                    }`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {new Date(quote.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {quotes.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No quote requests yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
