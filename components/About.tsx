import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Clock, Shield } from 'lucide-react';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About = ({ onNavigate }: AboutProps) => {
  const values = [
    {
      icon: Users,
      title: "Engagemang",
      desc: "Vi sätter alltid kunden i fokus och arbetar för att överträffa dina förväntningar."
    },
    {
      icon: Award,
      title: "Kvalitet",
      desc: "Noggrannhet och professionalism är ledord i allt vi gör."
    },
    {
      icon: Shield,
      title: "Transparens",
      desc: "Vi arbetar öppet och tydligt, så att du alltid vet vad du kan förvänta dig."
    },
    {
      icon: Lightbulb,
      title: "Prisvärd kvalitet",
      desc: "Hög kvalitet till rimliga priser."
    }
  ];

  return (
    <div className="pt-0 min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern conference room" 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-medium mb-6"
          >
            Om Delita Advise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-200 font-light"
          >
            Din partner för ekonomisk framgång
          </motion.p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200" 
                alt="Consultation meeting" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Text Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase">
                Vår Mission
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
                Vi förenklar det komplexa för din framgång.
              </h2>
              <div className="prose prose-lg text-slate-600 font-light leading-relaxed">
                <p>
                  På Delita Advise arbetar vi för att förenkla det komplexa. Vi grundades med visionen att erbjuda personlig, tillgänglig och professionell ekonomisk rådgivning till företag i alla storlekar.
                </p>
                <p>
                  Vårt fokus ligger på att bygga långsiktiga relationer baserade på förtroende och expertis. Vi tror att en trygg ekonomi är grunden för allt framgångsrikt företagande, och vi finns här för att lägga den grunden tillsammans med er.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-10"
            >
              <div>
                <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  Våra Värderingar
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
                  Vad vi står för
                </h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  Våra värderingar genomsyrar allt vi gör, från den första kontakten till det löpande samarbetet.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col space-y-3"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-white rounded-full shadow-sm text-slate-700">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-12 border-l border-slate-200">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square rounded-sm overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                alt="Strategy session" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-12">Varför välja oss?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">Helt digitaliserade</h3>
                <p className="text-slate-600 leading-relaxed">
                  Vi använder marknadens ledande digitala verktyg för att effektivisera din administration. Detta sparar tid och minskar risken för fel, samtidigt som du har tillgång till din ekonomi var du än är.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">Personligt engagemang</h3>
                <p className="text-slate-600 leading-relaxed">
                  Trots våra digitala verktyg tummar vi aldrig på den personliga kontakten. Hos oss får du en dedikerad rådgivare som lär känna din verksamhet på djupet.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">Lokalt & Nationellt</h3>
                <p className="text-slate-600 leading-relaxed">
                  Med bas i Malmö har vi en stark lokal förankring, men tack vare våra digitala arbetssätt hjälper vi kunder över hela Sverige med samma höga servicenivå.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">Trygghet med SRF</h3>
                <p className="text-slate-600 leading-relaxed">
                  Som medlemmar i SRF följer vi strikta kvalitetskrav och etiska regler. Det är din garanti för att din ekonomi hanteras korrekt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="hidden py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Våra Experter
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900">
              Möt vårt team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-slate-200 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${item === 1 ? '1560250097-0b93528c311a' : item === 2 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&q=80&w=800`}
                    alt="Team member" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-slate-900">
                    {item === 1 ? 'Magnus Andersson' : item === 2 ? 'Anna Lindberg' : 'Johan Nilsson'}
                  </h3>
                  <p className="text-slate-700 text-sm font-medium uppercase tracking-wider mt-1">
                    {item === 1 ? 'Grundare / Senior Rådgivare' : item === 2 ? 'Redovisningskonsult' : 'Löneexpert'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP BADGE SECTION */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <div className="inline-flex items-center justify-center space-x-4 p-8 bg-slate-50 rounded-sm border border-slate-100">
              <Award className="w-12 h-12 text-slate-700" />
              <div className="text-left">
                <h4 className="font-serif text-lg font-bold text-slate-900">SRF Konsult</h4>
                <p className="text-slate-600 text-sm">Medlem i Sveriges Redovisningskonsulters Förbund</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white text-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Redo att komma igång?</h2>
            <p className="text-slate-600 text-lg md:text-xl font-light mb-10 leading-relaxed">
              Låt oss ta hand om ekonomin så att du kan fokusera på att driva ditt företag framåt.
              Kontakta oss idag för en kostnadsfri konsultation.
            </p>
            <button
              onClick={() => onNavigate('/boka-mote')}
              className="inline-block px-10 py-4 bg-delita-navy text-slate-800 font-bold text-lg rounded-full hover:bg-[#D6CFC3] transition-colors shadow-lg"
            >
              Boka ett möte
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};