import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, CheckCircle2 } from 'lucide-react';
import pexelsYankrukovImage from '../Delita bilder/Nya/pexels-yankrukov-7691673.jpg';

interface LonerProps {
  onNavigate: (path: string) => void;
}

export const Loner = ({ onNavigate }: LonerProps) => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pexelsYankrukovImage}
            alt="Payroll and employee management"
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
            Löner Medarbetare
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            Professionell lönehantering för ditt företag
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
              "Lönehantering är en av de viktigaste funktionerna i ett företag. Felaktiga löner skapar oro och missnöje, medan en korrekt hantering bygger förtroende. Vi på Delita Advise tar hand om hela löneprocessen så att ni kan vara trygga med att allt blir rätt, varje gång."
            </p>
            <p className="text-slate-600 leading-loose">
              Genom att outsourca er lönehantering till oss frigör ni värdefull tid och minskar sårbarheten vid sjukdom eller semester. Vi håller oss ständigt uppdaterade med gällande lagar och regler inom lön och arbetsrätt, vilket säkerställer att ni alltid uppfyller era skyldigheter som arbetsgivare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED - Alternating Layout */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          <div className="text-center mb-16">
             <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Vårt Erbjudande
             </span>
             <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Vad vi hjälper er med</h2>
          </div>

          {/* Feature 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">Löpande lönehantering</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Månatlig löneberedning och utbetalningsfiler</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Hantering av semester, sjuklön och traktamenten</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Digitala lönespecifikationer direkt till medarbetarna</span></li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200" 
                alt="Payroll calculation" 
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
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200" 
                alt="Tax reporting" 
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
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">Skatt & Rapportering</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Beräkning av arbetsgivaravgifter och skatt</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Arbetsgivardeklarationer på individnivå (AGI)</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Rapportering till Fora och Collectum</span></li>
              </ul>
            </motion.div>
          </div>
          
           {/* Feature 3 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">Personalstöd</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Support i frågor kring lön och förmåner</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Intyg och underlag vid behov</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>Hantering av förmånsbilar och traktamenten</span></li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                alt="Employee support" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

        </div>
      </section>
      
      {/* PROCESS */}
      <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
             <div className="text-center mb-16">
                 <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Så fungerar det</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    {step: "01", title: "Uppstart", desc: "Vi lägger in er personal och era avtal i våra system."},
                    {step: "02", title: "Rapportering", desc: "Ni rapporterar avvikelser digitalt (tid, frånvaro)."},
                    {step: "03", title: "Bearbetning", desc: "Vi bereder lönen, kontrollerar och skickar underlag."},
                    {step: "04", title: "Utbetalning", desc: "Efter godkännande får personalen sina lönebesked."}
                ].map((item, idx) => (
                    <div key={idx} className="text-center group">
                        <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-6 text-xl font-serif font-bold text-slate-700 shadow-sm group-hover:bg-delita-navy group-hover:text-slate-800 transition-colors duration-300">
                            {item.step}
                        </div>
                        <h4 className="font-serif text-xl font-medium mb-3">{item.title}</h4>
                        <p className="text-slate-600 font-light">{item.desc}</p>
                    </div>
                ))}
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900">Säkra er lönehantering idag</h2>
            <p className="text-slate-700 text-lg mb-10 max-w-xl mx-auto">
              Kontakta oss för en smidig lösning anpassad efter era behov.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/kontakt')}
                className="inline-flex items-center justify-center px-10 py-4 bg-delita-navy text-slate-800 font-bold rounded-full hover:bg-[#D6CFC3] transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Kontakta oss för lönehantering
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