import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Shield } from 'lucide-react';
import { useTranslation } from '../i18n';
import johannaPhoto from '../Delita bilder/Team/johanna-andersson.jpg';
import niclasPhoto from '../Delita bilder/Team/niclas-herslow.jpg';

interface AboutProps {
  onNavigate: (path: string) => void;
}

export const About = ({ onNavigate }: AboutProps) => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Users,
      title: t('about.value1title'),
      desc: t('about.value1desc'),
    },
    {
      icon: Award,
      title: t('about.value2title'),
      desc: t('about.value2desc'),
    },
    {
      icon: Shield,
      title: t('about.value3title'),
      desc: t('about.value3desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.value4title'),
      desc: t('about.value4desc'),
    },
  ];

  return (
    <div className="pt-0 min-h-screen bg-white font-sans">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000"
            alt="Modern conference room"
            loading="lazy"
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
            {t('about.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-slate-200 font-light"
          >
            {t('about.tagline')}
          </motion.p>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                alt="Consultation meeting"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase">
                {t('about.missionLabel')}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
                {t('about.missionHeading')}
              </h2>
              <div className="prose prose-lg text-slate-600 font-light leading-relaxed">
                <p>{t('about.missionP1')}</p>
                <p>{t('about.missionP2')}</p>
                <p>{t('about.missionP3')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 space-y-10"
            >
              <div>
                <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  {t('about.valuesLabel')}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
                  {t('about.valuesHeading')}
                </h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  {t('about.valuesSubtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col space-y-3"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 bg-white rounded-full shadow-sm text-slate-700">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-12 border-l border-slate-200">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square rounded-sm overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                alt="Strategy session"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-12">{t('about.whyHeading')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">{t('about.why1title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('about.why1desc')}</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">{t('about.why2title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('about.why2desc')}</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">{t('about.why3title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('about.why3desc')}</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="font-serif text-xl font-semibold mb-4 text-slate-700">{t('about.why4title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('about.why4desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              {t('about.teamLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-900">
              {t('about.teamHeading')}
            </h2>
          </div>

          <div className="space-y-20">

            {/* Johanna Andersson */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start"
            >
              <div className="group relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                <img
                  src={johannaPhoto}
                  alt="Johanna Andersson"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-medium text-slate-900">Johanna Andersson</h3>
                  <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.2em] mt-2">{t('about.johannaRole')}</p>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                  <p>{t('about.johannaP1')}</p>
                  <p>{t('about.johannaP2')}</p>
                  <p>{t('about.johannaP3')}</p>
                  <p>{t('about.johannaP4')}</p>
                </div>
                <p className="font-serif text-lg text-slate-700 italic border-l-2 border-delita-navy pl-5">
                  "{t('about.johannaQuote')}"
                </p>
              </div>
            </motion.div>

            <div className="border-t border-slate-200" />

            {/* Niclas Herslow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start"
            >
              <div className="space-y-6 order-2 lg:order-1">
                <div>
                  <h3 className="font-serif text-3xl font-medium text-slate-900">Niclas Herslow</h3>
                  <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.2em] mt-2">{t('about.niclasRole')}</p>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                  <p>{t('about.niclasP1')}</p>
                  <p>{t('about.niclasP2')}</p>
                  <p>{t('about.niclasP3')}</p>
                  <p>{t('about.niclasP4')}</p>
                  <p>{t('about.niclasP5')}</p>
                </div>
                <p className="font-serif text-lg text-slate-700 italic border-l-2 border-delita-navy pl-5">
                  "{t('about.niclasQuote')}"
                </p>
              </div>
              <div className="group relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl order-1 lg:order-2">
                <img
                  src={niclasPhoto}
                  alt="Niclas Herslow"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <div className="border-t border-slate-200" />

            {/* Tommy Magnusson */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start"
            >
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl bg-slate-100 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-28 h-28 rounded-full bg-slate-200 mx-auto mb-5 flex items-center justify-center">
                    <span className="font-serif text-4xl text-slate-400">TM</span>
                  </div>
                  <p className="text-slate-400 text-sm tracking-wide">{t('about.tommyPhotoSoon')}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-3xl font-medium text-slate-900">Tommy Magnusson</h3>
                  <p className="text-slate-600 text-sm font-bold uppercase tracking-[0.2em] mt-2">{t('about.tommyRole')}</p>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed font-light">
                  <p>{t('about.tommyP1')}</p>
                  <p>{t('about.tommyP2')}</p>
                  <p>{t('about.tommyP3')}</p>
                </div>
                <p className="font-serif text-lg text-slate-700 italic border-l-2 border-delita-navy pl-5">
                  "{t('about.tommyQuote')}"
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white text-slate-800 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6">{t('about.ctaHeading')}</h2>
            <p className="text-slate-600 text-lg md:text-xl font-light mb-10 leading-relaxed">
              {t('about.ctaText')}
            </p>
            <button
              onClick={() => onNavigate('/boka-mote')}
              className="inline-block px-10 py-4 bg-delita-navy text-slate-800 font-bold text-lg rounded-full hover:bg-[#D6CFC3] transition-colors shadow-lg"
            >
              {t('about.ctaButton')}
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};
