import { ArrowRight, Layers } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const defaultHomeProducts = {
  title: "Our Products",
  subtitle: "Premium recycled boards, structural materials, and eco-friendly products made from high-density plastics and multi-layered waste.",
  products: [
    {
      id: 1,
      title: "Recycled HDPE Boards",
      description: "Heavy-duty boards designed to replace traditional timber and plywood.",
      image: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Eco-Friendly Furniture",
      description: "Sustainable furniture pieces crafted from upcycled multi-layered plastics.",
      image: "https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "\"Carry Everest\" Souvenirs",
      description: "Premium eco-friendly mountain souvenirs supporting local communities.",
      image: "https://images.pexels.com/photos/3182512/pexels-photo-3182512.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ]
};

const HomeProducts = () => {
  const [content, setContent] = useState(defaultHomeProducts);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && data.homeProducts) setContent(data.homeProducts);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
            >
              {content.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 dark:text-slate-400"
            >
              {content.subtitle}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/products" 
              className="hidden md:inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              View All Products <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.products.map((product: any, index: number) => (
            <motion.div 
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800"
            >
              <div>
                {product.image ? (
                  <div className="rounded-2xl overflow-hidden mb-6 h-52 bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 flex items-center justify-center mb-6">
                    <Layers className="w-7 h-7" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{product.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800">
                <Link 
                  to="/products" 
                  className="inline-flex items-center font-semibold text-secondary-600 dark:text-secondary-400 group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors"
                >
                  View Details <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
