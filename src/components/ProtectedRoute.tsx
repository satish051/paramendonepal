import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // For now, we use a simple mock authentication by checking localStorage
  // In a real app, this would check Firebase/Supabase auth state
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

  if (!isAuthenticated) {
    // Redirect them to the login page, but save the current location they were trying to go to
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
