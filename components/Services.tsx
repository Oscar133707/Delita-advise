
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Calculator, TrendingUp } from 'lucide-react';
import pexelsYankrukovImage from '../Delita bilder/Nya/pexels-yankrukov-7691673.jpg';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

const services = [
  {
    icon: Users,
    title: "Löner Medarbetare",
    description: "Professionell och säker lönehantering som garanterar att dina medarbetare får rätt lön i rätt tid.",
    link: "/tjanster/loner-medarbetare",
    image: pexelsYankrukovImage,
    shortDesc: "Trygg lönehantering"
  },
  {
    icon: Calculator,
    title: "Redovisning & Beskattning",
    description: "Komplett hantering av bokföring, bokslut och skattedeklarationer för en optimerad och trygg ekonomi.",
    link: "/tjanster/redovisning-beskattning",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    shortDesc: "Full kontroll"
  },
  {
    icon: TrendingUp,
    title: "Rådgivning",
    description: "Strategisk rådgivning som hjälper dig att fatta rätt beslut för ditt företags framtida tillväxt.",
    link: "/tjanster/radgivning",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    shortDesc: "Strategisk tillväxt"
  }
];

export const Services = ({ onNavigate }: ServicesProps) => {
  return (
    <section id="tjanster" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Våra Expertområden
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-slate-900">
            Tjänster
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(service.link);
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative h-[450px] overflow-hidden rounded-sm shadow-md cursor-pointer flex flex-col bg-slate-50 border border-slate-100"
            >
              {/* Image Section (Top Half) */}
              <div className="relative h-1/2 overflow-visible">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Icon Badge */}
                <div className="absolute bottom-0 left-8 translate-y-1/2 bg-white p-4 rounded-full shadow-lg z-10">
                   <service.icon className="w-6 h-6 text-slate-700" />
                </div>
              </div>

              {/* Content Section (Bottom Half) */}
              <div className="p-8 pt-14 flex flex-col flex-grow bg-white">
                 <h3 className="font-serif text-2xl font-medium mb-3 text-slate-900 group-hover:text-slate-700 transition-colors">
                    {service.title}
                 </h3>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                 </p>
                 <div className="flex items-center text-sm font-bold tracking-widest uppercase text-slate-700 mt-auto">
                    <span className="border-b border-transparent group-hover:border-slate-700 transition-all duration-300 pb-1">Läs mer</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
