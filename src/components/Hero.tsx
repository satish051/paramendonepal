import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-slate-100 z-0"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-green-200/50 blur-3xl opacity-50 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-300/30 blur-3xl opacity-50 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold tracking-wide uppercase border border-green-200">
          {t('Empowering Communities')}
        </div>
        <h1 className="mt-2 text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl">
          <span className="block mb-2">{t('Ree-Cycle')}</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 sm:text-xl md:text-2xl leading-relaxed">
          {t('A waste management company that focuses on plastic waste, turning them into usable recycled products.')}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('Learn More')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all"
          >
            {t('Contact Us')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
