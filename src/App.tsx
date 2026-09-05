import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import SingleBlogPage from './pages/SingleBlogPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import SponsorARoofPage from './pages/SponsorARoofPage';
import DataRoomPage from './pages/DataRoomPage';
import JoinTheLoopPage from './pages/JoinTheLoopPage';
import CRCPortalPage from './pages/CRCPortalPage';

// Admin Pages
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ManageBlog from './pages/admin/ManageBlog';
import ManageContent from './pages/admin/ManageContent';
import ViewMessages from './pages/admin/ViewMessages';
import ManageMedia from './pages/admin/ManageMedia';

const MainLayout = () => (
  <div className="flex flex-col min-h-screen font-sans">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Public Site */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/sponsor-a-roof" element={<SponsorARoofPage />} />
          <Route path="/transparency" element={<DataRoomPage />} />
          <Route path="/join-the-loop" element={<JoinTheLoopPage />} />
          <Route path="/crc-portal" element={<CRCPortalPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
        </Route>

        {/* Admin Login (Public) */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Panel (Protected) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="blog" element={<ManageBlog />} />
            <Route path="content" element={<ManageContent />} />
            <Route path="media" element={<ManageMedia />} />
            <Route path="messages" element={<ViewMessages />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
