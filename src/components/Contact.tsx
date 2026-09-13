import { Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const defaultContact = {
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

const Contact = () => {
  const [contactData, setContactData] = useState(defaultContact);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.contact) {
          setContactData({
            ...defaultContact,
            ...data.contact,
            socialLinks: {
              ...defaultContact.socialLinks,
              ...(data.contact.socialLinks || {})
            }
          });
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-white py-24 px-6 md:px-12 lg:px-20 text-center relative overflow-hidden">
        {/* Decorative line art — flower & mountains */}
        <img 
          src="/art-flower.png" 
          alt="" 
          aria-hidden="true"
          className="absolute -bottom-10 right-0 w-[450px] lg:w-[550px] opacity-[0.08] pointer-events-none select-none"
        />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 mb-6 border border-black/10 rounded-full">
            <span className="text-sm font-bold text-black font-body tracking-wide uppercase">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black text-center mb-4">
            {contactData.heroTitle}
          </h1>
          <div className="w-12 h-0.5 bg-red mt-4 mb-8" />
          <p className="text-lg md:text-xl text-black/60 font-body leading-relaxed">
            {contactData.heroSubtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20 mb-20 relative">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch relative z-10">
          
          {/* Contact Info Cards */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Email Card */}
            <div className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start">
                <div className="p-3 text-red mb-6 sm:mb-0">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="sm:ml-8">
                  <h3 className="font-heading text-xl tracking-wider text-black mb-2">Email Us</h3>
                  <p className="text-black/60 font-body mb-6">For any inquiries, partnerships, or general questions.</p>
                  <div className="space-y-3">
                    <a href={`mailto:${contactData.email1}`} className="flex items-center text-lg font-body text-black hover:text-red transition-colors">
                      {contactData.email1}
                    </a>
                    {contactData.email2 && (
                      <a href={`mailto:${contactData.email2}`} className="flex items-center text-lg font-body text-black hover:text-red transition-colors">
                        {contactData.email2}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Card */}
            <div className="bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start">
                <div className="p-3 text-red mb-6 sm:mb-0">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="sm:ml-8">
                  <h3 className="font-heading text-xl tracking-wider text-black mb-2">Visit Us</h3>
                  <p className="text-black/60 font-body mb-6">Come see our Community Recycling Center in action.</p>
                  <p className="text-xl font-body text-black">
                    {contactData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between bg-white border border-black/10 rounded-lg p-8 hover:border-black/40 transition-all duration-300">
              <span className="font-heading text-xl tracking-wider text-black mb-6 sm:mb-0">Follow our journey:</span>
              <div className="flex space-x-4 sm:space-x-6">
                {contactData.socialLinks?.facebook && (
                  <a 
                    href={contactData.socialLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Facebook"
                    className="flex items-center justify-center text-black/50 hover:text-black transition-colors border border-black/10 rounded-full p-3 hover:border-black/40"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                )}
                {contactData.socialLinks?.instagram && (
                  <a 
                    href={contactData.socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Instagram"
                    className="flex items-center justify-center text-black/50 hover:text-black transition-colors border border-black/10 rounded-full p-3 hover:border-black/40"
                  >
                    <span className="relative z-10">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </span>
                  </a>
                )}
                {contactData.socialLinks?.linkedin && (
                  <a 
                    href={contactData.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    className="flex items-center justify-center text-black/50 hover:text-black transition-colors border border-black/10 rounded-full p-3 hover:border-black/40"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-[500px] lg:h-auto w-full min-h-[500px] rounded-lg overflow-hidden relative border border-black/10 bg-black/5 group">
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center -z-10">
              <div className="animate-pulse flex flex-col items-center">
                <MapPin className="w-8 h-8 text-black/40 mb-4" />
                <span className="text-black/40 font-body">Loading Interactive Map...</span>
              </div>
            </div>
            {/* Overlay to prevent map scroll trapping until hover/click */}
            <div className="absolute inset-0 bg-black/5 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
            <iframe 
              src={contactData.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.1542112464817!2d85.31257827428458!3d27.678515376199098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19edf4545bd3%3A0xe5c043330fc58a7d!2sImpact%20Hub%20Kathmandu!5e1!3m2!1sen!2snp!4v1788077606111!5m2!1sen!2snp"} 
              className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
