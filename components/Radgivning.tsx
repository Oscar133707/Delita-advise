import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, CheckCircle2 } from 'lucide-react';
import processOptimizationImage from '../Delita bilder/Tjänster/ruthson-zimmerman-FVwG5OzPuzo-unsplash.jpg';

interface RadgivningProps {
  onNavigate: (path: string) => void;
}

export const Radgivning = ({ onNavigate }: RadgivningProps) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000" 
            alt="Strategic meeting" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-medium mb-6 drop-shadow-lg"
          >
            Rådgivning
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            Strategisk ekonomisk rådgivning för tillväxt
          </motion.p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-slate mx-auto"
          >
            <p className="text-xl md:text-2xl text-slate-800 font-serif leading-relaxed italic mb-8">
              "Vi nöjer oss inte med att bara redovisa historien – vi vill hjälpa dig att forma framtiden. Vår rådgivning syftar till att ge dig insikterna och verktygen du behöver för att ta ditt företag till nästa nivå."
            </p>
            <p className="text-slate-600 leading-loose">
              Med djupgående analys och strategisk planering hjälper vi dig att navigera genom utmaningar och identifiera nya möjligheter. Vi fungerar som ditt bollplank vid viktiga beslut, oavsett om det gäller expansion, investeringar eller effektivisering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE AREAS */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

           <div className="text-center mb-16">
             <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Expertis
             </span>
             <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Områden vi hjälper till med</h2>
          </div>

           {/* Feature 1 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">Affärsutveckling & Strategi</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Upprättande av affärsplaner och budgetar</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Likviditetsplanering och kassaflödesanalys</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Strategier för tillväxt och expansion</span></li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Business strategy" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img 
                src={processOptimizationImage} 
                alt="Process optimization" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">Processoptimering</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Effektivisering av ekonomiska rutiner</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Digitalisering av administrationen</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Kostnadsbesparingar och lönsamhetsanalys</span></li>
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900">Ta nästa steg</h2>
            <p className="text-slate-700 text-lg mb-10 max-w-xl mx-auto">
              Låt oss diskutera era framtidsplaner och hur vi kan hjälpa er att nå dit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/boka-mote')}
                className="inline-flex items-center justify-center px-10 py-4 bg-delita-navy text-slate-800 font-bold rounded-full hover:bg-[#D6CFC3] transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Boka ett rådgivningsmöte
              </button>
              <button 
                onClick={() => onNavigate('/')}
                className="inline-flex items-center justify-center px-10 py-4 border border-slate-300 text-slate-800 font-medium hover:bg-slate-100 transition-colors rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};