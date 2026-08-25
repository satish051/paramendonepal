import { FileText, MessageSquare, Eye } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Blog Posts', value: '12', icon: FileText, color: 'bg-blue-500' },
    { name: 'Unread Messages', value: '4', icon: MessageSquare, color: 'bg-green-500' },
    { name: 'Website Views', value: '1,204', icon: Eye, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex items-center">
              <div className={`p-4 rounded-lg ${stat.color} text-white mr-4`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.name}</p>
                <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Welcome to your Admin Panel</h2>
        <p className="text-slate-600 mb-4">
          This is a placeholder dashboard. Once we integrate a real backend like Firebase or Supabase, 
          you will see actual statistics here.
        </p>
        <p className="text-slate-600">
          Use the sidebar on the left to navigate to different sections where you can manage your blog posts,
          edit website content, and view contact form submissions.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
