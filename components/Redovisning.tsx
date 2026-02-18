import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, CheckCircle2 } from 'lucide-react';
import bookkeepingImage from '../Delita bilder/Tjänster/aalo-lens-IN_YVhv-Le8-unsplash.jpg';
import annualReportImage from '../Delita bilder/Tjänster/pexels-karola-g-7681091.jpg';
import taxHandlingImage from '../Delita bilder/Tjänster/gabrielle-henderson-HJckKnwCXxQ-unsplash.jpg';
import { useTranslation } from '../i18n';

interface RedovisningProps {
  onNavigate: (path: string) => void;
}

export const Redovisning = ({ onNavigate }: RedovisningProps) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
            alt="Financial analysis"
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
            {t('redovisning.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            {t('redovisning.tagline')}
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
              {t('redovisning.quote')}
            </p>
            <p className="text-slate-600 leading-loose">
              {t('redovisning.introP')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

           {/* Feature 1 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">{t('redovisning.feature1title')}</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature1item1')}</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature1item2')}</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature1item3')}</span></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img
                src={bookkeepingImage}
                alt="Bookkeeping"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img
                src={annualReportImage}
                alt="Tax forms"
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
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">{t('redovisning.feature2title')}</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature2item1')}</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature2item2')}</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature2item3')}</span></li>
              </ul>
            </motion.div>
          </div>

           {/* Feature 3 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="font-serif text-3xl text-slate-900 mb-6 border-l-4 border-delita-navy pl-6">{t('redovisning.feature3title')}</h3>
              <ul className="space-y-4 text-slate-600 text-lg font-light">
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature3item1')}</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature3item2')}</span></li>
                 <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-slate-700 mr-3 mt-1 shrink-0"/> <span>{t('redovisning.feature3item3')}</span></li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative aspect-[16/9] shadow-lg rounded-sm overflow-hidden"
            >
              <img
                src={taxHandlingImage}
                alt="Tax planning"
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-slate-900">{t('redovisning.ctaHeading')}</h2>
            <p className="text-slate-700 text-lg mb-10 max-w-xl mx-auto">
              {t('redovisning.ctaText')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/boka-mote')}
                className="inline-flex items-center justify-center px-10 py-4 sm:min-w-[200px] bg-delita-navy text-slate-800 font-bold rounded-full hover:bg-[#D6CFC3] transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('redovisning.ctaButton')}
              </button>
              <button
                onClick={() => onNavigate('/')}
                className="inline-flex items-center justify-center px-10 py-4 sm:min-w-[200px] border border-slate-300 text-slate-800 font-medium hover:bg-slate-100 transition-colors rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('redovisning.back')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
