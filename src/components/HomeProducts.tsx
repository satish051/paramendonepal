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

  const allProducts = content?.products || [];
  const selectedProducts = allProducts.filter((p: any) => p.showOnHome);
  const homeProductsToShow = selectedProducts.length > 0 
    ? selectedProducts.slice(0, 3) 
    : allProducts.slice(0, 3);

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading tracking-wider uppercase text-black text-center"
          >
            {content.title}
          </motion.h2>
          <div className="w-12 h-0.5 bg-red mt-4 mb-12 mx-auto" />
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black/60 font-body text-sm max-w-2xl mx-auto"
          >
            {content.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {homeProductsToShow.map((product: any, index: number) => (
            <motion.div 
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-black/10 rounded-lg overflow-hidden hover:border-black/40 hover:-translate-y-1 transition-all duration-300"
            >
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full aspect-video object-cover" 
                />
              ) : (
                <div className="w-full aspect-video bg-black/5 flex items-center justify-center">
                  <Layers className="w-7 h-7 text-black/40" />
                </div>
              )}
              
              <h3 className="font-heading text-xl tracking-wider text-black p-6 pb-2">
                {product.title}
              </h3>
              <p className="text-black/60 font-body text-sm px-6 pb-6">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link 
            to="/products" 
            className="text-black font-body text-sm tracking-wide hover:text-red transition-colors inline-flex items-center gap-2"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProducts;
