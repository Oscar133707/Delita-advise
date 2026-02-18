import React from 'react';
import { motion } from 'framer-motion';
import minaRadImage from '../Delita bilder/Nya/mina-rad-qFSQFSmfZkA-unsplash.jpg';
import { useTranslation } from '../i18n';

export const MainContent = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src={minaRadImage}
                alt="Delita Advise team consultation"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-50 -z-10 rounded-full opacity-50" />
            <div className="absolute -top-10 -left-10 w-32 h-32 border border-delita-navy/10 -z-10" />
          </motion.div>

          {/* Right Column: Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-slate-600 text-sm font-bold tracking-[0.2em] uppercase">
              {t('mainContent.label')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 leading-tight">
              {t('mainContent.heading1')} <br />
              <span className="italic text-slate-900">{t('mainContent.heading2')}</span>
            </h2>

            <div className="prose prose-lg prose-slate text-slate-600 leading-relaxed font-light">
              <p>
                {t('mainContent.p1before')} <span className="font-medium text-slate-900">Delita Advise</span>{t('mainContent.p1after')}
              </p>
              <p>
                {t('mainContent.p2')}
              </p>
              <p>
                {t('mainContent.p3before')} <span className="font-medium text-slate-900">{t('mainContent.p3srf')}</span> {t('mainContent.p3after')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
