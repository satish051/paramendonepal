'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Package, BarChart2, MessageSquare, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Very simple client-side check for now (cookie or local storage)
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    } else if (pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [pathname, router]);

  if (!isAuthenticated && pathname !== '/admin/login') {
    return null; // Don't render anything while redirecting
  }

  // If on login page, don't show the dashboard shell
  if (pathname === '/admin/login') {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_auth');
    router.push('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: <LayoutDashboard className="w-5 h-5 mr-3" /> },
    { name: 'Site Content', href: '/admin/content', icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: 'Products', href: '/admin/products', icon: <Package className="w-5 h-5 mr-3" /> },
    { name: 'Media & Blog', href: '/admin/blog', icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: 'Metrics', href: '/admin/metrics', icon: <BarChart2 className="w-5 h-5 mr-3" /> },
    { name: 'Quote Requests', href: '/admin/quotes', icon: <MessageSquare className="w-5 h-5 mr-3" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 border-b border-gray-100 text-center">
          <h2 className="text-xl font-extrabold text-[var(--color-primary)]">Admin Panel</h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--color-primary)]'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
