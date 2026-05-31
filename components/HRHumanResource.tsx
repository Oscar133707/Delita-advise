import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import heroImage from '../Delita bilder/Tjänster/pexels-cottonbro-7437499.jpg';
import { useTranslation } from '../i18n';

interface Props {
  onNavigate: (path: string) => void;
}

export const HRHumanResource = ({ onNavigate }: Props) => {
  const { t } = useTranslation();

  const services = [
    { labelKey: 'nav.ba2i1', path: '/nyheter-kommer-snart', active: false },
    { labelKey: 'nav.ba2i2', path: '/tjanster/interim', active: true },
    { labelKey: 'nav.ba2i3', path: '/tjanster/rekrytering', active: true },
    { labelKey: 'nav.ba2i4', path: '/nyheter-kommer-snart', active: false },
    { labelKey: 'nav.ba2i5', path: '/nyheter-kommer-snart', active: false },
    { labelKey: 'nav.ba2i6', path: '/nyheter-kommer-snart', active: false },
  ];

  return (
    <div className="pt-0 min-h-screen bg-white font-sans">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="HR Human Resource"
            loading="eager"
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
            {t('hrHuman.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-200 font-light"
          >
            {t('hrHuman.tagline')}
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {t('hrHuman.intro')}
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.button
                key={service.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => onNavigate(service.path)}
                className="group flex items-center justify-between bg-white rounded-xl px-6 py-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all text-left"
              >
                <span className="text-slate-700 font-medium text-sm">{t(service.labelKey)}</span>
                {service.active ? (
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0 ml-4" />
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 ml-4 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {t('shared.comingSoon')}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl text-slate-900 mb-6"
          >
            {t('shared.wantToKnowMore')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => onNavigate('/boka-mote')}
              className="px-8 py-3.5 bg-delita-navy text-slate-800 font-medium rounded-full hover:bg-[#D6CFC3] transition-colors"
            >
              {t('shared.bookMeeting')}
            </button>
            <button
              onClick={() => onNavigate('/kontakt')}
              className="flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-300 text-slate-700 font-medium rounded-full hover:bg-slate-50 transition-colors"
            >
              {t('shared.contactUs')} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
