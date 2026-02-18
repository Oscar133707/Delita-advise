import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { useTranslation } from '../i18n';

interface BolagsbildningProps {
  onNavigate: (path: string) => void;
}

export const Bolagsbildning = ({ onNavigate }: BolagsbildningProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=2000"
            alt="Startup planning"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl md:text-6xl font-medium mb-6 drop-shadow-lg"
          >
            {t('bolagsbildning.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            {t('bolagsbildning.tagline')}
          </motion.p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-slate mx-auto"
          >
            <p className="text-xl md:text-2xl text-slate-800 font-serif leading-relaxed italic">
              {t('bolagsbildning.quote')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROCESS STEPS - Alternating Layout */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* Step 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-delita-navy text-slate-800 font-serif text-xl shadow-md">01</span>
                <h3 className="font-serif text-3xl text-slate-900">{t('bolagsbildning.step1title')}</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t('bolagsbildning.step1desc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative aspect-[4/3] shadow-xl rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=1200"
                alt="Business consultation meeting"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 relative aspect-[4/3] shadow-xl rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=1200"
                alt="Signing documents"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-delita-navy text-slate-800 font-serif text-xl shadow-md">02</span>
                <h3 className="font-serif text-3xl text-slate-900">{t('bolagsbildning.step2title')}</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t('bolagsbildning.step2desc')}
              </p>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-delita-navy text-slate-800 font-serif text-xl shadow-md">03</span>
                <h3 className="font-serif text-3xl text-slate-900">{t('bolagsbildning.step3title')}</h3>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t('bolagsbildning.step3desc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative aspect-[4/3] shadow-xl rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                alt="Financial planning structure"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 md:py-32 bg-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-800">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900">{t('bolagsbildning.ctaHeading')}</h2>
            <p className="text-slate-700 text-lg mb-10 max-w-xl mx-auto">
              {t('bolagsbildning.ctaText')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/kontakt')}
                className="inline-flex items-center justify-center px-8 py-3 sm:min-w-[160px] bg-delita-navy text-slate-800 font-medium hover:bg-[#D6CFC3] transition-colors rounded-sm shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('bolagsbildning.ctaButton')}
              </button>
              <button
                onClick={() => onNavigate('/')}
                className="inline-flex items-center justify-center px-8 py-3 sm:min-w-[160px] border border-slate-300 text-slate-800 font-medium hover:bg-slate-100 transition-colors rounded-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('bolagsbildning.backToServices')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
