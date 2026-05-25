
import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Users, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { useTranslation } from '../i18n';

interface ServicesProps {
  onNavigate: (path: string) => void;
}

const businessAreas = [
  {
    icon: Calculator,
    title: 'Redovisning & rapportering',
    subtitle: undefined,
    description: 'Löpande bokföring, bokslut, moms, deklaration, budget och hållbarhetsrapportering.',
    path: '/tjanster/redovisning-rapportering',
  },
  {
    icon: Users,
    title: 'HR Human Resource',
    subtitle: undefined,
    description: 'Bemanning, interim, rekrytering, arbetsrätt och second opinion för din organisation.',
    path: '/tjanster/hr-human-resource',
  },
  {
    icon: Globe,
    title: 'Internationella & specialiserade uppdrag',
    subtitle: undefined,
    description: 'Bolagsstrukturering för utländska ägare, stiftelser och specialiserad skatterådgivning.',
    path: '/tjanster/internationella-uppdrag',
  },
  {
    icon: TrendingUp,
    title: 'Management',
    subtitle: 'ägare, styrelse, ledningsgrupp',
    description: 'Ekonomistyrning, M&A, generationsskiften, emissioner och strategisk affärsrådgivning.',
    path: '/tjanster/management',
  },
];

export const Services = ({ onNavigate }: ServicesProps) => {
  const { t } = useTranslation();

  return (
    <section id="affarsomraden" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <span className="text-slate-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            {t('services.label')}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-slate-900">
            {t('services.heading')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {businessAreas.map((area, index) => (
            <motion.button
              key={index}
              onClick={() => onNavigate(area.path)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-slate-50 border border-slate-100 rounded-sm p-8 flex flex-col gap-5 text-left hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full shadow-sm border border-slate-100 shrink-0 group-hover:bg-delita-navy transition-colors duration-300">
                  <area.icon className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-slate-900 leading-tight text-left">
                    {area.title}
                  </h3>
                  {area.subtitle && (
                    <p className="text-slate-500 text-sm mt-0.5 italic">{area.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {area.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 mt-auto text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                <span>Utforska</span>
                <ArrowRight className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 opacity-60 group-hover:opacity-100 transition-all duration-200" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
