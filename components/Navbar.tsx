import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown, ChevronRight, Globe, User, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../Images:Logos/delita-advise-high-resolution-logo-transparent.png';

interface NavbarProps {
  onNavigate: (path: string) => void;
  currentRoute: string;
  language: 'sv' | 'en';
  onToggleLanguage: () => void;
}

export const Navbar = ({ onNavigate, currentRoute, language, onToggleLanguage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile toggle
  const [hoverServices, setHoverServices] = useState(false);   // For desktop hover

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Lock body scroll and remember scroll position
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top ? Math.abs(parseInt(document.body.style.top, 10)) : 0;
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, scrollY);
      }
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => currentRoute === path;
  const isServicesActive = currentRoute.startsWith('/tjanster');

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
          : 'bg-white/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleNavClick('/')} className="flex items-center group shrink-0 mr-8">
          <img 
            src={logoImage} 
            alt="Delita Advise" 
            className="h-10 md:h-12 w-auto transition-opacity group-hover:opacity-80"
          />
        </button>

        {/* Desktop Menu - Center */}
        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setHoverServices(true)}
            onMouseLeave={() => setHoverServices(false)}
          >
            <button
              className={`flex items-center text-sm font-medium transition-colors tracking-wide ${
                isServicesActive ? 'text-slate-700 font-semibold' : 'text-slate-600 hover:text-slate-700'
              }`}
              onClick={(e) => e.preventDefault()}
            >
              Tjänster
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${hoverServices ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {hoverServices && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4"
                >
                   <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2">
                      <button
                        onClick={() => {
                            handleNavClick('/tjanster/loner-medarbetare');
                            setHoverServices(false);
                        }}
                        className={`block w-full text-left px-6 py-3 text-sm transition-colors ${
                          isActive('/tjanster/loner-medarbetare') 
                            ? 'bg-slate-50 text-slate-700 font-medium' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-700'
                        }`}
                      >
                        Löner Medarbetare
                      </button>
                      <button
                        onClick={() => {
                            handleNavClick('/tjanster/redovisning-beskattning');
                            setHoverServices(false);
                        }}
                        className={`block w-full text-left px-6 py-3 text-sm transition-colors ${
                          isActive('/tjanster/redovisning-beskattning') 
                            ? 'bg-slate-50 text-slate-700 font-medium' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-700'
                        }`}
                      >
                        Redovisning & Beskattning
                      </button>
                      <button
                        onClick={() => {
                            handleNavClick('/tjanster/radgivning');
                            setHoverServices(false);
                        }}
                        className={`block w-full text-left px-6 py-3 text-sm transition-colors ${
                          isActive('/tjanster/radgivning') 
                            ? 'bg-slate-50 text-slate-700 font-medium' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-700'
                        }`}
                      >
                        Rådgivning
                      </button>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleNavClick('/om-oss')}
            className={`text-sm font-medium transition-colors tracking-wide ${
              isActive('/om-oss') ? 'text-slate-700 font-semibold underline underline-offset-4' : 'text-slate-600 hover:text-slate-700'
            }`}
          >
            Om oss
          </button>

          <button
            onClick={() => handleNavClick('/karriar')}
            className={`text-sm font-medium transition-colors tracking-wide ${
              isActive('/karriar') ? 'text-slate-700 font-semibold underline underline-offset-4' : 'text-slate-600 hover:text-slate-700'
            }`}
          >
            Karriär
          </button>
          
          <button
            onClick={() => handleNavClick('/kontakt')}
            className={`text-sm font-medium transition-colors tracking-wide ${
              isActive('/kontakt') ? 'text-slate-700 font-semibold underline underline-offset-4' : 'text-slate-600 hover:text-slate-700'
            }`}
          >
            Kontakt
          </button>
        </div>

        {/* Right Side - Actions */}
        <div className="hidden lg:flex items-center space-x-6 shrink-0">
          
          {/* Language Selector */}
          <button 
            onClick={onToggleLanguage}
            className="text-sm font-medium text-slate-600 hover:text-slate-700 transition-colors flex items-center space-x-1"
          >
            <span className={language === 'sv' ? 'font-bold text-slate-700' : ''}>SV</span>
            <span className="text-slate-300">|</span>
            <span className={language === 'en' ? 'font-bold text-slate-700' : ''}>EN</span>
          </button>

          {/* Login Link */}
          <button
            onClick={() => handleNavClick('/login')}
            className={`text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded-full transition-colors ${
              isActive('/login') ? 'text-slate-700 bg-slate-50' : 'text-slate-600 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Logga in</span>
          </button>

          {/* Boka Möte Button */}
          <button
            onClick={() => handleNavClick('/boka-mote')}
            className="px-6 py-2.5 bg-delita-navy text-slate-800 text-sm font-medium rounded-full hover:bg-[#D6CFC3] transition-colors duration-300 shadow-lg shadow-delita-navy/20 hover:shadow-xl"
          >
            Boka möte
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu: full-screen overlay portaled to body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="delita-mobile-menu-overlay"
              role="dialog"
              aria-modal="true"
              aria-label="Meny"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="delita-mobile-menu lg:hidden fixed inset-0 w-screen h-screen z-[1000] flex flex-col bg-white"
            >
              {/* Header: Logo + close (X) pinned to top */}
              <header className="relative flex-shrink-0 w-full px-6 pt-6 pb-4 flex items-center justify-between">
                <button
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-3 min-w-0"
                >
                  <img
                    src={logoImage}
                    alt="Delita Advise"
                    className="h-10 w-auto"
                  />
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors touch-manipulation"
                  aria-label="Stäng meny"
                >
                  <X size={24} aria-hidden strokeWidth={1.5} />
                </button>
              </header>

              {/* Centered navigation */}
              <nav
                className="flex-1 flex flex-col items-center justify-center px-8 space-y-8"
                aria-label="Huvudmeny"
              >
                {/* Hem */}
                <button
                  onClick={() => handleNavClick('/')}
                  className={`text-center font-serif text-2xl tracking-wide text-slate-900 touch-manipulation ${
                    isActive('/') ? 'font-semibold underline underline-offset-8' : 'font-normal'
                  }`}
                >
                  Hem
                </button>

                {/* Tjänster with expandable submenu */}
                <div className="flex flex-col items-center space-y-4">
                  <button
                    onClick={() => setIsServicesOpen((open) => !open)}
                    className={`flex items-center gap-2 font-serif text-2xl tracking-wide text-slate-900 touch-manipulation ${
                      isServicesActive ? 'font-semibold underline underline-offset-8' : 'font-normal'
                    }`}
                  >
                    <span>Tjänster</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center space-y-3"
                      >
                        <button
                          onClick={() => handleNavClick('/tjanster/loner-medarbetare')}
                          className={`font-serif text-lg text-slate-800 touch-manipulation ${
                            isActive('/tjanster/loner-medarbetare')
                              ? 'font-semibold underline underline-offset-4'
                              : 'font-normal'
                          }`}
                        >
                          Löner Medarbetare
                        </button>
                        <button
                          onClick={() => handleNavClick('/tjanster/redovisning-beskattning')}
                          className={`font-serif text-lg text-slate-800 touch-manipulation ${
                            isActive('/tjanster/redovisning-beskattning')
                              ? 'font-semibold underline underline-offset-4'
                              : 'font-normal'
                          }`}
                        >
                          Redovisning & Beskattning
                        </button>
                        <button
                          onClick={() => handleNavClick('/tjanster/radgivning')}
                          className={`font-serif text-lg text-slate-800 touch-manipulation ${
                            isActive('/tjanster/radgivning')
                              ? 'font-semibold underline underline-offset-4'
                              : 'font-normal'
                          }`}
                        >
                          Rådgivning
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Om oss */}
                <button
                  onClick={() => handleNavClick('/om-oss')}
                  className={`text-center font-serif text-2xl tracking-wide text-slate-900 touch-manipulation ${
                    isActive('/om-oss') ? 'font-semibold underline underline-offset-8' : 'font-normal'
                  }`}
                >
                  Om oss
                </button>

                {/* Karriär */}
                <button
                  onClick={() => handleNavClick('/karriar')}
                  className={`text-center font-serif text-2xl tracking-wide text-slate-900 touch-manipulation ${
                    isActive('/karriar')
                      ? 'font-semibold underline underline-offset-8'
                      : 'font-normal'
                  }`}
                >
                  Karriär
                </button>

                {/* Kontakt */}
                <button
                  onClick={() => handleNavClick('/kontakt')}
                  className={`text-center font-serif text-2xl tracking-wide text-slate-900 touch-manipulation ${
                    isActive('/kontakt')
                      ? 'font-semibold underline underline-offset-8'
                      : 'font-normal'
                  }`}
                >
                  Kontakt
                </button>
              </nav>

              {/* Bottom section: language, login, CTA */}
              <div className="flex-shrink-0 w-full px-8 pb-8 pt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <button
                    onClick={onToggleLanguage}
                    className="flex items-center gap-2 text-sm font-medium text-slate-800 touch-manipulation"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'sv' ? 'Svenska' : 'English'}</span>
                  </button>

                  <button
                    onClick={() => handleNavClick('/login')}
                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 touch-manipulation"
                  >
                    <User className="w-4 h-4" />
                    <span>Logga in</span>
                  </button>
                </div>

                <button
                  onClick={() => handleNavClick('/boka-mote')}
                  className="w-full py-4 px-6 bg-[#E6DED1] text-slate-900 text-sm font-semibold uppercase tracking-[0.2em] rounded-full hover:bg-[#DDD6C9] active:bg-[#D6CFC3] transition-colors touch-manipulation"
                >
                  Boka möte
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};