import { Mail, MapPin } from 'lucide-react';

const Contact = () => {

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Header */}
      <div className="bg-slate-900 pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden mb-16 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="absolute inset-0 group">
          <img src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1600" className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-[2000ms]" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary-500/20 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-primary-500/30">
            <span className="text-sm font-bold text-primary-300 tracking-wide uppercase">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Join Our Journey Toward a <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">Zero-Waste Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Whether you are an architect looking for sustainable building supplies, a business seeking Extended Producer Responsibility (EPR) solutions, or a consumer choosing eco-friendly products, your partnership turns waste into purpose.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mb-20 relative">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch relative z-10">
          
          {/* Contact Info Cards */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* Email Card */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors"></div>
              <div className="flex flex-col sm:flex-row items-start relative z-10">
                <div className="p-5 bg-white dark:bg-slate-950 rounded-2xl shadow-sm text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-800 mb-6 sm:mb-0">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="sm:ml-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Email Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 font-light">For any inquiries, partnerships, or general questions.</p>
                  <div className="space-y-3">
                    <a href="mailto:contact@paramendonepal.com" className="flex items-center text-lg font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                      contact@paramendonepal.com
                    </a>
                    <a href="mailto:paramendonepal@gmail.com" className="flex items-center text-lg font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                      paramendonepal@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Card */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-secondary-500/5 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl group-hover:bg-secondary-500/20 transition-colors"></div>
              <div className="flex flex-col sm:flex-row items-start relative z-10">
                <div className="p-5 bg-white dark:bg-slate-950 rounded-2xl shadow-sm text-secondary-600 dark:text-secondary-400 group-hover:scale-110 transition-transform duration-300 border border-slate-100 dark:border-slate-800 mb-6 sm:mb-0">
                  <MapPin className="w-8 h-8" />
                </div>
                <div className="sm:ml-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Visit Us</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 font-light">Come see our Community Recycling Center in action.</p>
                  <p className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    Pulchowk, Lalitpur, Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
              <span className="font-bold text-slate-900 dark:text-white text-xl mb-6 sm:mb-0">Follow our journey:</span>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/ParamendoNepal" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/paramendonepal/" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-[#E1306C] hover:text-white transition-all duration-300 shadow-sm border border-slate-100 dark:border-slate-800 hover:-translate-y-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#fd1d1d] to-[#fcb045] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="h-[500px] lg:h-auto w-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 flex items-center justify-center -z-10">
              <div className="animate-pulse flex flex-col items-center">
                <MapPin className="w-8 h-8 text-slate-400 dark:text-slate-600 mb-4" />
                <span className="text-slate-400 dark:text-slate-600 font-medium">Loading Interactive Map...</span>
              </div>
            </div>
            {/* Overlay to prevent map scroll trapping until hover/click */}
            <div className="absolute inset-0 bg-slate-900/5 dark:bg-slate-900/20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.1542112464817!2d85.31257827428458!3d27.678515376199098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19edf4545bd3%3A0xe5c043330fc58a7d!2sImpact%20Hub%20Kathmandu!5e1!3m2!1sen!2snp!4v1788077606111!5m2!1sen!2snp" 
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
