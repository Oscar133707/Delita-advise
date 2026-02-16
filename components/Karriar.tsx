import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, MapPin, Users, Coins, Heart, Upload, CheckCircle, Mail, Phone, ChevronRight } from 'lucide-react';

interface KarriarProps {
  onNavigate: (path: string) => void;
}

export const Karriar = ({ onNavigate }: KarriarProps) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    position: '',
    coverLetter: '',
    gdpr: false
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        position: '',
        coverLetter: '',
        gdpr: false
      });
      setFile(null);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const benefits = [
    { icon: Clock, title: "Flexibel arbetstid", desc: "Vi värdesätter resultat över närvaro och erbjuder flexibilitet." },
    { icon: TrendingUp, title: "Professionell utveckling", desc: "Kontinuerlig utbildning och karriärsteg." },
    { icon: MapPin, title: "Modernt kontor", desc: "Nyrenoverade lokaler i centrala Malmö." },
    { icon: Users, title: "Samarbete & Teamwork", desc: "En prestigelös kultur där vi hjälper varandra." },
    { icon: Coins, title: "Konkurrenskraftiga villkor", desc: "Marknadsmässiga löner och bra förmåner." },
    { icon: Heart, title: "Work-life balance", desc: "Vi månar om att du ska må bra både på och utanför jobbet." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
            alt="Colleagues laughing and talking in a modern space" 
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
            Karriär hos Delita Advise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            Bli en del av vårt team i Malmö
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-slate mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-8">Arbeta med oss</h2>
            <p className="text-slate-600 leading-relaxed font-light mb-8">
              På Delita Advise är vi mer än bara kollegor – vi är ett team som drivs av passion för ekonomi och viljan att göra skillnad för våra kunder. Vi tror på en arbetsplats där innovation möter tradition, och där varje medarbetare får utrymme att växa.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Vi söker ständigt efter talanger som delar våra värderingar om professionalism, engagemang och personlig service. Hos oss får du arbeta i en modern, digital miljö med spännande uppdrag och härliga kollegor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Förmåner
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">Varför välja oss?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-700 mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">Lediga tjänster</h2>
            <p className="text-slate-600 font-light">
              Just nu har vi inga specifika tjänster utannonserade, men vi letar alltid efter rätt kompetens.
              Skicka gärna en spontanansökan nedan!
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  Ansökan
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
                  Skicka din ansökan
                </h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  Vi ser fram emot att höra från dig! Fyll i formuläret så återkommer vi så snart vi kan.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 space-y-6">
                <h3 className="font-serif text-xl font-medium text-slate-900">Frågor?</h3>
                <div className="flex items-start space-x-3 text-slate-600">
                  <Mail className="w-5 h-5 mt-1 shrink-0 text-slate-700" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">E-post</p>
                    <a href="mailto:kontakt@delita.se" className="text-sm hover:text-slate-700 transition-colors">kontakt@delita.se</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-slate-600">
                  <Phone className="w-5 h-5 mt-1 shrink-0 text-slate-700" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">Telefon</p>
                    <a href="tel:+46703626744" className="text-sm hover:text-slate-700 transition-colors">+46(0) 70 36 26 744</a>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200">
                   <p className="text-sm text-slate-600 mb-4">Eller vill du diskutera dina möjligheter över en kaffe?</p>
                   <button 
                     onClick={() => onNavigate('/kontakt')}
                     className="flex items-center text-slate-700 font-medium text-sm group"
                   >
                     Boka ett möte <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-slate-100">
                {status === 'success' ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-3xl text-slate-900 mb-4">Tack för din ansökan!</h3>
                    <p className="text-slate-600 text-lg">Vi har mottagit dina uppgifter och återkommer inom kort.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-8 py-3 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
                    >
                      Skicka en ny ansökan
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Förnamn *</label>
                        <input 
                          type="text" name="firstName" required
                          value={formState.firstName} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Efternamn *</label>
                        <input 
                          type="text" name="lastName" required
                          value={formState.lastName} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">E-post *</label>
                        <input 
                          type="email" name="email" required
                          value={formState.email} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Telefon *</label>
                        <input 
                          type="tel" name="phone" required
                          value={formState.phone} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn profil (frivilligt)</label>
                      <input 
                        type="url" name="linkedin" 
                        value={formState.linkedin} onChange={handleChange}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Tjänst du söker</label>
                      <select 
                        name="position" 
                        value={formState.position} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Välj tjänst...</option>
                        <option value="Spontanansökan">Spontanansökan</option>
                        <option value="Redovisningskonsult">Redovisningskonsult</option>
                        <option value="Löneadministratör">Löneadministratör</option>
                        <option value="Praktik">Praktik</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">CV / Meritförteckning</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-sm hover:bg-slate-50 transition-colors">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-slate-400" />
                          <div className="flex text-sm text-slate-600 justify-center">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-slate-700 hover:text-slate-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-delita-navy">
                              <span>Ladda upp en fil</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                            </label>
                            <p className="pl-1">eller dra och släpp</p>
                          </div>
                          <p className="text-xs text-slate-500">
                            {file ? file.name : "PDF, DOC, DOCX upp till 10MB"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Personligt brev *</label>
                      <textarea 
                        name="coverLetter" required
                        rows={6}
                        value={formState.coverLetter} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Berätta lite om dig själv och varför du vill jobba hos oss..."
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input 
                          id="gdpr" name="gdpr" type="checkbox" required
                          checked={formState.gdpr}
                          // @ts-ignore - onChange handles checkbox properly in implementation
                          onChange={handleChange}
                          className="focus:ring-delita-navy h-4 w-4 text-slate-700 border-slate-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="gdpr" className="font-medium text-slate-700">Samtycke till personuppgiftsbehandling</label>
                        <p className="text-slate-500">Jag samtycker till att Delita Advise behandlar mina personuppgifter enligt GDPR i syfte att hantera min ansökan.</p>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full py-4 bg-delita-navy text-slate-800 font-medium rounded-full hover:bg-[#D6CFC3] transition-all shadow-lg flex items-center justify-center space-x-2 ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                    >
                      {status === 'submitting' ? 'Skickar...' : 'Skicka ansökan'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};