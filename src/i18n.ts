import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About Us": "About Us",
      "Our Work": "Our Work",
      "Blog": "Blog",
      "Contact Us": "Contact Us",
      "Empowering Communities": "Empowering Communities",
      "Ree-Cycle": "Ree-Cycle",
      "A waste management company that focuses on plastic waste, turning them into usable recycled products.": "A waste management company that focuses on plastic waste, turning them into usable recycled products.",
      "Learn More": "Learn More"
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "About Us": "معلومات عنا",
      "Our Work": "أعمالنا",
      "Blog": "المدونة",
      "Contact Us": "اتصل بنا",
      "Empowering Communities": "تمكين المجتمعات",
      "Ree-Cycle": "إعادة التدوير",
      "A waste management company that focuses on plastic waste, turning them into usable recycled products.": "شركة إدارة نفايات تركز على النفايات البلاستيكية وتحويلها إلى منتجات معاد تدويرها قابلة للاستخدام.",
      "Learn More": "اعرف المزيد"
    }
  },
  zh: {
    translation: {
      "Home": "首页",
      "About Us": "关于我们",
      "Our Work": "我们的工作",
      "Blog": "博客",
      "Contact Us": "联系我们",
      "Empowering Communities": "赋能社区",
      "Ree-Cycle": "回收计划",
      "A waste management company that focuses on plastic waste, turning them into usable recycled products.": "一家专注于塑料垃圾的废物管理公司，将其转化为可用的回收产品。",
      "Learn More": "了解更多"
    }
  },
  fr: {
    translation: {
      "Home": "Accueil",
      "About Us": "À Propos",
      "Our Work": "Notre Travail",
      "Blog": "Blog",
      "Contact Us": "Contactez-Nous",
      "Empowering Communities": "Autonomiser les Communautés",
      "Ree-Cycle": "Ree-Cycle",
      "A waste management company that focuses on plastic waste, turning them into usable recycled products.": "Une entreprise de gestion des déchets qui se concentre sur les déchets plastiques, les transformant en produits recyclés utilisables.",
      "Learn More": "En Savoir Plus"
    }
  },
  ru: {
    translation: {
      "Home": "Главная",
      "About Us": "О Нас",
      "Our Work": "Наша Работа",
      "Blog": "Блог",
      "Contact Us": "Связаться С Нами",
      "Empowering Communities": "Расширение Возможностей Сообществ",
      "Ree-Cycle": "Ree-Cycle",
      "A waste management company that focuses on plastic waste, turning them into usable recycled products.": "Компания по управлению отходами, которая фокусируется на пластиковых отходах, превращая их в полезные переработанные продукты.",
      "Learn More": "Узнать Больше"
    }
  },
  es: {
    translation: {
      "Home": "Inicio",
      "About Us": "Sobre Nosotros",
      "Our Work": "Nuestro Trabajo",
      "Blog": "Blog",
      "Contact Us": "Contáctenos",
      "Empowering Communities": "Empoderando Comunidades",
      "Ree-Cycle": "Ree-Cycle",
      "A waste management company that focuses on plastic waste, turning them into usable recycled products.": "Una empresa de gestión de residuos que se centra en los residuos plásticos, convirtiéndolos en productos reciclados utilizables.",
      "Learn More": "Saber Más"
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;
