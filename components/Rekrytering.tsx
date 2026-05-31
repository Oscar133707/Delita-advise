import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Target, Users, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n';

interface RekryteringProps {
  onNavigate: (path: string) => void;
}

export const Rekrytering = ({ onNavigate }: RekryteringProps) => {
  const { t } = useTranslation();

  const roles = [
    t('rekrytering.role1'),
    t('rekrytering.role2'),
    t('rekrytering.role3'),
    t('rekrytering.role4'),
    t('rekrytering.role5'),
    t('rekrytering.role6'),
    t('rekrytering.role7'),
    t('rekrytering.role8'),
    t('rekrytering.role9'),
    t('rekrytering.role10'),
    t('rekrytering.role11'),
    t('rekrytering.role12'),
    t('rekrytering.role13'),
  ];

  const highlights = [
    { icon: Target, title: t('rekrytering.highlight1title'), desc: t('rekrytering.highlight1desc') },
    { icon: Users, title: t('rekrytering.highlight2title'), desc: t('rekrytering.highlight2desc') },
    { icon: Star, title: t('rekrytering.highlight3title'), desc: t('rekrytering.highlight3desc') },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('shared.back')}
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              {t('rekrytering.parentLabel')}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-slate-900 mb-6">
              {t('rekrytering.heading')}
            </h1>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              {t('rekrytering.tagline')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-slate-600 leading-relaxed text-lg font-light mb-6">
                {t('rekrytering.introP1')}
              </p>
              <p className="text-slate-600 leading-relaxed font-light mb-6">
                {t('rekrytering.introP2')}
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                {t('rekrytering.introP3')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-slate-50 border border-slate-100 rounded-sm p-8"
            >
              <h3 className="font-serif text-xl text-slate-900 mb-6">{t('rekrytering.rolesHeading')}</h3>
              <ul className="space-y-3">
                {roles.map((role, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 text-sm">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group bg-white border border-slate-100 rounded-sm p-8 hover:border-slate-200 hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-slate-50 rounded-full w-fit mb-4 border border-slate-100 group-hover:bg-delita-navy transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-slate-700" />
                </div>
                <h3 className="font-serif text-lg font-medium text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-8">{t('rekrytering.processHeading')}</h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>{t('rekrytering.processP1')}</p>
              <p>{t('rekrytering.processP2')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">
            {t('rekrytering.ctaHeading')}
          </h2>
          <p className="text-slate-700 mb-8 font-light">
            {t('rekrytering.ctaText')}{' '}
            <a href="mailto:tm@delita.se" className="font-medium underline hover:text-slate-900 transition-colors">
              tm@delita.se
            </a>
          </p>
          <button
            onClick={() => onNavigate('/boka-mote')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-700 transition-colors duration-300"
          >
            {t('shared.bookMeeting')}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
