import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '../Delita bilder/Tjänster/aleksandrs-karevs-ZCDA1-cih6o-unsplash.jpg';
import { useTranslation } from '../i18n';

interface HeroProps {
  onNavigate?: (path: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="Modern Office Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-slate-200 text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-6 drop-shadow-sm">
            {t('hero.tagline')}
          </span>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6 drop-shadow-lg">
            {t('hero.welcomeTo')} <br />
            <span className="italic">Delita Advise</span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-100 font-light mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {t('hero.subtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => onNavigate && onNavigate('/boka-mote')}
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-delita-navy text-slate-800 text-base font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-[#D6CFC3] hover:shadow-2xl ring-1 ring-slate-300/30"
            >
              <span className="relative z-10 flex items-center gap-3 tracking-wide">
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
