import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Save, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Share2, 
  Globe
} from 'lucide-react';

interface ContactFormData {
  heroTitle: string;
  heroSubtitle: string;
  email1: string;
  email2: string;
  location: string;
  mapEmbedUrl: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

const defaultContactData: ContactFormData = {
  heroTitle: "Join Our Journey Toward a Zero-Waste Future.",
  heroSubtitle: "Whether you are an architect looking for sustainable building supplies, a business seeking Extended Producer Responsibility (EPR) solutions, or a consumer choosing eco-friendly products, your partnership turns waste into purpose.",
  email1: "contact@paramendonepal.com",
  email2: "paramendonepal@gmail.com",
  location: "Pulchowk, Lalitpur, Nepal",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.1542112464817!2d85.31257827428458!3d27.678515376199098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19edf4545bd3%3A0xe5c043330fc58a7d!2sImpact%20Hub%20Kathmandu!5e1!3m2!1sen!2snp!4v1788077606111!5m2!1sen!2snp",
  socialLinks: {
    facebook: "https://www.facebook.com/ParamendoNepal",
    instagram: "https://www.instagram.com/paramendonepal/",
    linkedin: "https://www.linkedin.com/company/paramendo-nepal/"
  }
};

const ManageContact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(defaultContactData);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/content');
      if (res.ok) {
        const data = await res.json();
        if (data && data.contact) {
          setFormData({
            heroTitle: data.contact.heroTitle || defaultContactData.heroTitle,
            heroSubtitle: data.contact.heroSubtitle || defaultContactData.heroSubtitle,
            email1: data.contact.email1 || defaultContactData.email1,
            email2: data.contact.email2 || defaultContactData.email2,
            location: data.contact.location || defaultContactData.location,
            mapEmbedUrl: data.contact.mapEmbedUrl || defaultContactData.mapEmbedUrl,
            socialLinks: {
              facebook: data.contact.socialLinks?.facebook || defaultContactData.socialLinks.facebook,
              instagram: data.contact.socialLinks?.instagram || defaultContactData.socialLinks.instagram,
              linkedin: data.contact.socialLinks?.linkedin || defaultContactData.socialLinks.linkedin,
            }
          });
        }
      }
    } catch (err) {
      console.error(err);
      showNotification('error', 'Failed to load contact information.');
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (type: 'success' | 'error', text: string) => {
    setNotification({ type, text });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleFieldChange = (field: keyof ContactFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialChange = (network: keyof ContactFormData['socialLinks'], value: string) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [network]: value
      }
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      // Get current content first to preserve other sections
      const getRes = await fetch('/api/content');
      let currentSiteContent = {};
      if (getRes.ok) {
        currentSiteContent = await getRes.json();
      }

      const updatedSiteContent = {
        ...currentSiteContent,
        contact: formData
      };

      const putRes = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedSiteContent)
      });

      if (!putRes.ok) {
        throw new Error('Failed to update contact info on server.');
      }

      showNotification('success', 'Contact settings updated successfully! Live on /contact.');
    } catch (err: any) {
      console.error(err);
      showNotification('error', err.message || 'Error saving contact information');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            <PhoneCall className="text-primary-600" size={28} />
            Contact Page Management
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Update header copy, emails, physical location, Google Maps embed, and official social media profiles.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
          >
            <ExternalLink size={16} />
            View Live Contact Page
          </a>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium shadow-md shadow-primary-600/20 hover:shadow-lg transition-all disabled:opacity-50"
          >
            <Save size={18} />
            {isSaving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Toast Alert */}
      {notification && (
        <div 
          className={`p-4 rounded-xl flex items-center gap-3 border shadow-sm transition-all ${
            notification.type === 'success' 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
              : 'bg-rose-50 text-rose-800 border-rose-200'
          }`}
        >
          {notification.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          <span className="text-sm font-medium">{notification.text}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Card 1: Hero Header */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Globe size={20} className="text-primary-600" />
            Contact Hero Header
          </h2>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Headline Title
            </label>
            <input
              type="text"
              value={formData.heroTitle}
              onChange={(e) => handleFieldChange('heroTitle', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-medium text-slate-800"
              placeholder="e.g. Join Our Journey Toward a Zero-Waste Future."
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Intro Paragraph
            </label>
            <textarea
              rows={3}
              value={formData.heroSubtitle}
              onChange={(e) => handleFieldChange('heroSubtitle', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-700"
              placeholder="Description of partnership and purpose..."
            />
          </div>
        </div>

        {/* Card 2: Contact Information */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Mail size={20} className="text-primary-600" />
            Email Addresses & Physical Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Primary Email
              </label>
              <input
                type="email"
                value={formData.email1}
                onChange={(e) => handleFieldChange('email1', e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-800"
                placeholder="contact@paramendonepal.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Secondary Email (Optional)
              </label>
              <input
                type="email"
                value={formData.email2}
                onChange={(e) => handleFieldChange('email2', e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-800"
                placeholder="paramendonepal@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Location / Address Display Text
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleFieldChange('location', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-800"
              placeholder="Pulchowk, Lalitpur, Nepal"
            />
          </div>
        </div>

        {/* Card 3: Social Links */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Share2 size={20} className="text-primary-600" />
            "Follow our journey" Social Links
          </h2>
          <p className="text-slate-500 text-xs">
            These links power the social media buttons displayed on the Contact page.
          </p>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Facebook Profile URL
              </label>
              <input
                type="url"
                value={formData.socialLinks.facebook}
                onChange={(e) => handleSocialChange('facebook', e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-800"
                placeholder="https://www.facebook.com/ParamendoNepal"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Instagram Profile URL
              </label>
              <input
                type="url"
                value={formData.socialLinks.instagram}
                onChange={(e) => handleSocialChange('instagram', e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-800"
                placeholder="https://www.instagram.com/paramendonepal/"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                LinkedIn Profile / Company URL
              </label>
              <input
                type="url"
                value={formData.socialLinks.linkedin}
                onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-slate-800"
                placeholder="https://www.linkedin.com/company/paramendo-nepal/"
              />
            </div>
          </div>
        </div>

        {/* Card 4: Google Maps Embed URL */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <MapPin size={20} className="text-primary-600" />
            Google Maps Embed URL
          </h2>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Map iframe Source URL
            </label>
            <input
              type="text"
              value={formData.mapEmbedUrl}
              onChange={(e) => handleFieldChange('mapEmbedUrl', e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs font-mono text-slate-800"
              placeholder="https://www.google.com/maps/embed?pb=..."
            />
            <p className="text-[11px] text-slate-400 mt-1">
              Paste the <code className="text-primary-700 bg-slate-100 px-1 py-0.5 rounded">src="..."</code> URL from Google Maps Embed HTML code.
            </p>
          </div>

          {formData.mapEmbedUrl && (
            <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 h-64 w-full bg-slate-50">
              <iframe
                src={formData.mapEmbedUrl}
                className="w-full h-full"
                title="Map Preview"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>

        {/* Bottom Save Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold shadow-lg shadow-primary-600/25 transition-all disabled:opacity-50"
          >
            <Save size={18} />
            {isSaving ? 'Saving Changes...' : 'Save Contact Information'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageContact;
