import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { useTranslation } from '../i18n';

interface EmissionerProps {
  onNavigate: (path: string) => void;
}

export const Emissioner = ({ onNavigate }: EmissionerProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000"
            alt="Financial growth"
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
            {t('emissioner.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            {t('emissioner.tagline')}
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
            <p className="text-xl md:text-2xl text-slate-800 font-serif leading-relaxed italic mb-8">
              {t('emissioner.quote')}
            </p>
            <p className="text-slate-600 leading-loose">
              {t('emissioner.introP')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE AREAS - Alternating Layout */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {/* Item 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">{t('emissioner.feature1title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t('emissioner.feature1desc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200"
                alt="Financial calculations"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Valuation analysis"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">{t('emissioner.feature2title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t('emissioner.feature2desc')}
              </p>
            </motion.div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">{t('emissioner.feature3title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t('emissioner.feature3desc')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?auto=format&fit=crop&q=80&w=1200"
                alt="Legal documentation"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Item 4 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Corporate registration"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">{t('emissioner.feature4title')}</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-light">
                {t('emissioner.feature4desc')}
              </p>
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900">{t('emissioner.ctaHeading')}</h2>
            <p className="text-slate-700 text-lg mb-10 max-w-xl mx-auto">
              {t('emissioner.ctaText')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/kontakt')}
                className="inline-flex items-center justify-center px-8 py-3 sm:min-w-[160px] bg-delita-navy text-slate-800 font-medium hover:bg-[#D6CFC3] transition-colors rounded-sm shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('emissioner.ctaButton')}
              </button>
              <button
                onClick={() => onNavigate('/')}
                className="inline-flex items-center justify-center px-8 py-3 sm:min-w-[160px] border border-slate-300 text-slate-800 font-medium hover:bg-slate-100 transition-colors rounded-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('emissioner.backToServices')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
