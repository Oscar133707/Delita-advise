import React from 'react';
import { MapPin, Mail, Phone, ExternalLink, Instagram, Facebook, Shield } from 'lucide-react';
import fortnoxIcon from '../Delita bilder/Logos/fortnox-icon.svg';
import accountecLogo from '../Delita bilder/Logos/674ec2a544b7a38a39f18497_logo-cirkel-green-white.png';
import srfLogo from '../Delita bilder/Logos/srf_bildmarke_kvadrat-1-removebg-preview.png';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-[#D6CFC3] text-slate-800 pt-20 pb-10 border-t border-slate-300/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          
          {/* Column 1 - Company Info & Socials */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-tight mb-2">DELITA ADVISE</h3>
              <p className="text-slate-600 font-light text-sm tracking-wide uppercase">
                Professionell rådgivning i Malmö
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-slate-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-slate-800 font-medium">Södergatan 19</p>
                  <p className="text-slate-600">211 34 Malmö</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-slate-700 mt-0.5 shrink-0" />
                <a href="mailto:kontakt@delita.se" className="text-slate-600 hover:text-slate-800 transition-colors">
                  kontakt@delita.se
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-slate-700 mt-0.5 shrink-0" />
                <a href="tel:+46703626744" className="text-slate-600 hover:text-slate-800 transition-colors">
                  +46(0) 70 36 26 744
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
               <h4 className="text-sm font-bold uppercase tracking-widest text-slate-700 mb-4">Följ oss</h4>
               <div className="flex space-x-4">
                  <a href="https://instagram.com/delitaadvise" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700/20 rounded-full hover:bg-slate-700/40 hover:scale-110 transition-all text-slate-800 border border-slate-400/30">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com/delitaadvise" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-700/20 rounded-full hover:bg-slate-700/40 hover:scale-110 transition-all text-slate-800 border border-slate-400/30">
                    <Facebook className="w-5 h-5" />
                  </a>
               </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-700">Snabblänkar</h4>
            <ul className="space-y-4">
              {[
                { label: 'Hem', path: '/' },
                { label: 'Om oss', path: '/om-oss' },
                { label: 'Tjänster', path: '/' },
                { label: 'Karriär', path: '/karriar' },
                { label: 'Kontakt', path: '/kontakt' },
                { label: 'Login', path: '/login' },
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => onNavigate(link.path)}
                    className="text-slate-600 hover:text-slate-800 hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services & Membership */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-700">Våra Tjänster</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => onNavigate('/tjanster/loner-medarbetare')} className="text-slate-600 hover:text-slate-800 hover:translate-x-1 transition-all duration-300 text-left">
                  Löner Medarbetare
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/tjanster/redovisning-beskattning')} className="text-slate-600 hover:text-slate-800 hover:translate-x-1 transition-all duration-300 text-left">
                  Redovisning & Beskattning
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/tjanster/radgivning')} className="text-slate-600 hover:text-slate-800 hover:translate-x-1 transition-all duration-300 text-left">
                  Rådgivning
                </button>
              </li>
            </ul>

          </div>

          {/* Column 4 - Partners & Certifications */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-700">Partners & Certifieringar</h4>
            <div className="space-y-6">
              {/* Fortnox */}
              <div className="pt-2">
                <a
                  href="https://www.fortnox.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={fortnoxIcon}
                      alt="Fortnox logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Fortnox</p>
                    <p className="text-xs text-slate-600">Certifierad partner</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* SRF Redovisningskonsulterna */}
              <div className="pt-2">
                <a
                  href="https://www.srfkonsult.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={srfLogo}
                      alt="SRF Redovisningskonsulterna logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">SRF Redovisningskonsulterna</p>
                    <p className="text-xs text-slate-600">Medlem i förbundet</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Accountec */}
              <div className="pt-2">
                <a
                  href="https://www.accountec.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-3 text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={accountecLogo}
                      alt="Accountec logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Accountec</p>
                    <p className="text-xs text-slate-600">Certifierad partner</p>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-400/30 pt-8 text-center text-sm text-slate-600">
          <p>&copy; {new Date().getFullYear()} Delita Advise. Alla rättigheter förbehållna. | Hemsida producerad av <a href="https://oscarjohansson.eu/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 hover:text-slate-900 underline decoration-slate-400 hover:decoration-slate-700 transition-all duration-300">Oscar Johansson</a></p>
        </div>
      </div>
    </footer>
  );
};