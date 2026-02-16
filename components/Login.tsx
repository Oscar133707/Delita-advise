import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, ExternalLink, Mail, ArrowLeft } from 'lucide-react';
import fortnoxIcon from '../Delita bilder/Logos/fortnox-icon.svg';
import accountecLogo from '../Delita bilder/Logos/674ec2a544b7a38a39f18497_logo-cirkel-green-white.png';

interface LoginProps {
  onNavigate: (path: string) => void;
}

const portals = [
  {
    name: "Fortnox",
    description: "Affärssystem & Bokföring",
    logo: fortnoxIcon,
    url: "https://www.fortnox.se/logga-in"
  },
  {
    name: "Accountec",
    description: "Redovisningssystem",
    logo: accountecLogo,
    url: "https://delita.byraonline.se/"
  }
];

export const Login = ({ onNavigate }: LoginProps) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-24 bg-white" />

      <main className="flex-grow flex flex-col items-center justify-center py-20 px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-delita-navy text-slate-800 text-xs font-bold tracking-widest uppercase mb-6">
            Kundportal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-6">
            Logga in
          </h1>
          <p className="text-lg text-slate-600 font-light">
            Välj din redovisningsplattform nedan för att komma vidare till inloggningen.
          </p>
        </motion.div>

        {/* Portals Grid */}
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portals.map((portal, index) => (
            <motion.a
              key={index}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center text-center h-64 justify-between"
            >
              <div className="w-full flex-grow flex flex-col justify-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <img
                    src={portal.logo}
                    alt={`${portal.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-serif text-2xl text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {portal.name}
                </h3>
                <p className="text-slate-500 text-sm font-light">
                  {portal.description}
                </p>
              </div>

              <div className="w-full">
                <span className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full bg-slate-50 text-slate-700 font-medium text-sm group-hover:bg-delita-navy group-hover:text-slate-800 transition-all duration-300">
                  Logga in
                  <ExternalLink className="w-4 h-4 ml-2" />
                </span>
              </div>
            </motion.a>
          ))}
          
          {/* Contact Support Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-delita-navy/5 rounded-2xl p-8 border border-delita-navy/10 flex flex-col items-center text-center h-64 justify-center"
          >
             <h3 className="font-serif text-xl text-slate-800 mb-4">Behöver du hjälp?</h3>
             <p className="text-slate-600 text-sm mb-6">
               Har du problem med inloggningen eller saknar uppgifter?
             </p>
             <a 
               href="mailto:kontakt@delita.se"
               className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-slate-800 font-medium text-sm shadow-sm hover:shadow-md transition-all border border-slate-200 hover:border-slate-300"
             >
               <Mail className="w-4 h-4 mr-2" />
               Kontakta support
             </a>
          </motion.div>
        </div>

        {/* Security Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="flex items-center text-slate-400 text-sm">
            <Shield className="w-4 h-4 mr-2" />
            <span>Alla inloggningar är säkra och krypterade</span>
          </div>
          
          <button 
            onClick={() => onNavigate('/')}
            className="text-slate-500 hover:text-slate-700 text-sm font-medium flex items-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Tillbaka till startsidan
          </button>
        </motion.div>

      </main>
    </div>
  );
};