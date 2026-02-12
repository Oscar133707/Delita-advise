import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';

interface BolagsbildningProps {
  onNavigate: (path: string) => void;
}

export const Bolagsbildning = ({ onNavigate }: BolagsbildningProps) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=2000" 
            alt="Startup planning" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-medium mb-6 drop-shadow-lg"
          >
            Bolagsbildning
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            Vi gör det enkelt att förverkliga din affärsidé
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
            <p className="text-xl md:text-2xl text-slate-800 font-serif leading-relaxed italic">
              "Vi på Delita Advise förstår att vägen till att starta ett företag kan kännas komplicerad. Med vår erfarenhet och kunskap inom bolagsbildning gör vi det enkelt för dig att ta steget. Oavsett vilken företagsform du väljer, är vårt mål att guida dig genom varje steg och säkerställa en effektiv och smidig start på din företagsresa."
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS STEPS - Alternating Layout */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-delita-navy text-slate-800 font-serif text-xl shadow-md">01</span>
                <h3 className="font-serif text-3xl text-slate-900">Möte och företagsform</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Vi börjar med ett möte där vi diskuterar dina visioner och mål för företaget. Tillsammans går vi igenom de olika företagsformerna och väljer den som passar dina behov bäst. Vi kartlägger förutsättningarna för just din verksamhet.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative aspect-[4/3] shadow-xl rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=1200" 
                alt="Business consultation meeting" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 relative aspect-[4/3] shadow-xl rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200" 
                alt="Signing documents" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-delita-navy text-slate-800 font-serif text-xl shadow-md">02</span>
                <h3 className="font-serif text-3xl text-slate-900">Bolagsbildning</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Att starta ett bolag innebär många beslut och formaliteter. Behöver du momsregistreras, eller krävs det en revisor för din verksamhet? Vi guidar dig genom reglerna, hanterar dokumentationen och säkerställer att kommunikationen med myndigheterna går smidigt och korrekt, så att du kan känna dig trygg genom hela processen.
              </p>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-delita-navy text-slate-800 font-serif text-xl shadow-md">03</span>
                <h3 className="font-serif text-3xl text-slate-900">Bokföringsstruktur & Stöd</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                Vi hjälper dig att bygga upp en bokföringsstruktur som är skräddarsydd för ditt företag. Genom vår vägledning får du en tydlig grund att stå på och stöd i att sätta upp effektiva rutiner som förenklar den ekonomiska hanteringen framöver.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative aspect-[4/3] shadow-xl rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Financial planning structure" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900">Vill du veta mer om bolagsbildning?</h2>
            <p className="text-slate-700 text-lg mb-10 max-w-xl mx-auto">
              Boka ett möte med oss så hjälper vi dig att komma igång på bästa sätt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('/kontakt')}
                className="inline-flex items-center justify-center px-8 py-3 bg-delita-navy text-slate-800 font-medium hover:bg-[#D6CFC3] transition-colors rounded-sm shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Kontakta oss
              </button>
              <button 
                onClick={() => onNavigate('/')}
                className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-slate-800 font-medium hover:bg-slate-100 transition-colors rounded-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till tjänster
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};