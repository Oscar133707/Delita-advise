import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Award, Monitor, BadgeCheck } from 'lucide-react';
import { useTranslation } from '../i18n';

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: HeartHandshake,
      title: t('whyChooseUs.feature1title'),
      description: t('whyChooseUs.feature1desc'),
    },
    {
      icon: Award,
      title: t('whyChooseUs.feature2title'),
      description: t('whyChooseUs.feature2desc'),
    },
    {
      icon: Monitor,
      title: t('whyChooseUs.feature3title'),
      description: t('whyChooseUs.feature3desc'),
    },
    {
      icon: BadgeCheck,
      title: t('whyChooseUs.feature4title'),
      description: t('whyChooseUs.feature4desc'),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Subtle textured background or gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="text-slate-700 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('whyChooseUs.label')}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-8">
            {t('whyChooseUs.heading')}
          </h2>
          <div className="w-20 h-1 bg-delita-navy mx-auto mb-8" />
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
            {t('whyChooseUs.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group flex flex-col items-center text-center"
            >
              <div className="mb-8 p-4 rounded-full bg-slate-50 group-hover:bg-delita-navy transition-colors duration-500">
                <feature.icon className="w-8 h-8 text-slate-700 group-hover:text-slate-900 transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
