import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft } from 'lucide-react';
import { useTranslation } from '../i18n';

interface NyheterKommerSnartProps {
  onNavigate: (path: string) => void;
}

export const NyheterKommerSnart = ({ onNavigate }: NyheterKommerSnartProps) => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 min-h-screen bg-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto px-6 text-center"
      >
        <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Clock className="w-9 h-9 text-slate-400" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl text-slate-900 mb-4">
          {t('shared.comingSoonHeading')}
        </h1>

        <p className="text-slate-600 text-lg font-light leading-relaxed mb-10">
          {t('shared.comingSoonDesc')}
        </p>

        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-delita-navy text-slate-800 font-medium rounded-full hover:bg-[#D6CFC3] transition-colors duration-300 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('shared.backToHome')}
        </button>
      </motion.div>
    </div>
  );
};
