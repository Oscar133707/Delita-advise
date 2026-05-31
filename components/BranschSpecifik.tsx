import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Music, Star, Building2, Store } from 'lucide-react';
import { useTranslation } from '../i18n';

interface BranschSpecifikProps {
  onNavigate: (path: string) => void;
}

export const BranschSpecifik = ({ onNavigate }: BranschSpecifikProps) => {
  const { t } = useTranslation();

  const industries = [
    { icon: Music,     titleKey: 'nav.br1' },
    { icon: Star,      titleKey: 'nav.br2' },
    { icon: Building2, titleKey: 'nav.br3' },
    { icon: Store,     titleKey: 'nav.br4' },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('shared.specialization')}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-slate-900">
            {t('nav.branschLabel')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.button
              key={index}
              onClick={() => onNavigate('/nyheter-kommer-snart')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white border border-slate-100 rounded-sm p-8 flex flex-col items-center text-center gap-4 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div className="p-4 bg-slate-50 rounded-full border border-slate-100 group-hover:bg-delita-navy transition-colors duration-300">
                <industry.icon className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors" />
              </div>

              <h3 className="font-serif text-lg font-medium text-slate-900 leading-snug">
                {t(industry.titleKey)}
              </h3>

              <div className="flex items-center gap-1.5 mt-auto">
                <span className="text-xs text-slate-400 font-medium tracking-wide">
                  {t('shared.comingSoon')}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
