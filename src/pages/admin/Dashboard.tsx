import { FileText, MessageSquare, Eye, TrendingUp, Users, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [statsData, setStatsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stats from our new Node.js backend!
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => {
        setStatsData(data.stats);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch stats", err);
        setLoading(false);
      });
  }, []);

  // Map backend data to UI config (icons/colors)
  const uiConfig: Record<string, any> = {
    'Total Blog Posts': { icon: FileText, color: 'from-blue-500 to-indigo-500' },
    'Unread Messages': { icon: MessageSquare, color: 'from-primary-500 to-rose-400' },
    'Website Views': { icon: Eye, color: 'from-secondary-500 to-emerald-400' },
    'Active Users': { icon: Users, color: 'from-purple-500 to-fuchsia-400' },
  };

  const stats = statsData.map(stat => ({
    ...stat,
    ...uiConfig[stat.name]
  }));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200 text-sm font-medium text-slate-600">
          <Activity size={16} className="text-secondary-500" />
          <span>System Status: <span className="text-secondary-600 font-bold">Online</span></span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {loading ? (
          <div className="col-span-4 py-8 text-center text-slate-500">Loading live data from Node.js backend...</div>
        ) : (
          stats.map((stat) => {
            const Icon = stat.icon || Activity;
            return (
              <div key={stat.name} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 p-6 relative overflow-hidden group">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color || 'from-gray-200 to-gray-300'} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
                
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.name}</p>
                    <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color || 'from-gray-200 to-gray-300'} text-white shadow-sm`}>
                    <Icon size={20} />
                  </div>
                </div>
                
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp size={16} className="text-secondary-500 mr-1" />
                  <span className="text-slate-600 font-medium">{stat.trend}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none -mr-20 -mt-20" />
          
          <h2 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Welcome to Paramendo Admin</h2>
          <p className="text-slate-600 mb-6 leading-relaxed max-w-2xl relative z-10">
            This dashboard gives you complete control over your platform. Once connected to a live database, 
            these statistics will update in real-time to reflect your impact across Nepal.
          </p>
          
          <div className="flex flex-wrap gap-4 relative z-10">
            <button className="px-6 py-2.5 bg-primary-600 text-white font-medium rounded-lg shadow-sm hover:bg-primary-700 transition-colors">
              Write New Blog Post
            </button>
            <button className="px-6 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg shadow-sm hover:bg-slate-50 transition-colors">
              Review Messages
            </button>
          </div>
        </div>
        
        <div className="bg-slate-900 rounded-2xl shadow-md p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 z-0" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary-500/20 rounded-full blur-2xl z-0" />
          
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <div className="w-2 h-2 rounded-full bg-secondary-400 mr-2 animate-pulse" />
              Quick Actions
            </h3>
            
            <div className="space-y-3">
              <a href="/admin/blog" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="font-medium">Manage Blog</div>
                <div className="text-sm text-slate-400 mt-1">Publish and edit articles</div>
              </a>
              <a href="/admin/content" className="block p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="font-medium">Edit Website</div>
                <div className="text-sm text-slate-400 mt-1">Update text and images</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
