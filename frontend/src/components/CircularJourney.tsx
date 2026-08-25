"use client";

import { motion } from "framer-motion";
import { Trash2, Factory, Recycle, Home } from "lucide-react";

const steps = [
  {
    id: 1,
    name: "Collection",
    description: "Plastic waste is gathered from communities and local partners.",
    icon: Trash2,
  },
  {
    id: 2,
    name: "CRC Processing",
    description: "Sorting, cleaning, and shredding at our Community Recycling Center.",
    icon: Factory,
  },
  {
    id: 3,
    name: "Upcycling",
    description: "Melting and molding shredded plastic using eco-friendly processes.",
    icon: Recycle,
  },
  {
    id: 4,
    name: "Final Product",
    description: "Durable PP tiles and LDPE sheets ready for construction.",
    icon: Home,
  },
];

export default function CircularJourney() {
  return (
    <section className="py-24 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">Our Circular Journey</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how we transform everyday plastic waste into valuable construction materials.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[var(--color-secondary)]/30 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center relative"
                >
                  <div className="w-16 h-16 mx-auto bg-[var(--color-secondary)] rounded-full flex items-center justify-center mb-4 text-[var(--color-primary)] shadow-md">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{step.name}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  {/* Step number indicator */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                    {step.id}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
