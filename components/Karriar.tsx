import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, MapPin, Users, Coins, Heart, Upload, CheckCircle, Mail, Phone, ChevronRight } from 'lucide-react';
import { useTranslation } from '../i18n';

interface KarriarProps {
  onNavigate: (path: string) => void;
}

export const Karriar = ({ onNavigate }: KarriarProps) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    position: '',
    coverLetter: '',
    gdpr: false
  });
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const benefits = [
    { icon: Clock, title: t('career.benefit1title'), desc: t('career.benefit1desc') },
    { icon: TrendingUp, title: t('career.benefit2title'), desc: t('career.benefit2desc') },
    { icon: MapPin, title: t('career.benefit3title'), desc: t('career.benefit3desc') },
    { icon: Users, title: t('career.benefit4title'), desc: t('career.benefit4desc') },
    { icon: Coins, title: t('career.benefit5title'), desc: t('career.benefit5desc') },
    { icon: Heart, title: t('career.benefit6title'), desc: t('career.benefit6desc') },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        linkedin: '',
        position: '',
        coverLetter: '',
        gdpr: false
      });
      setFile(null);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000"
            alt="Colleagues laughing and talking in a modern space"
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
            {t('career.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto"
          >
            {t('career.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-slate mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-8">{t('career.introHeading')}</h2>
            <p className="text-slate-600 leading-relaxed font-light mb-8">{t('career.introP1')}</p>
            <p className="text-slate-600 leading-relaxed">{t('career.introP2')}</p>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              {t('career.benefitsLabel')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">{t('career.benefitsHeading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-700 mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">{t('career.openingsHeading')}</h2>
            <p className="text-slate-600 font-light">{t('career.openingsText')}</p>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Left Info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <span className="text-slate-700 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                  {t('career.applicationLabel')}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
                  {t('career.applicationHeading')}
                </h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8">
                  {t('career.applicationIntro')}
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 space-y-6">
                <h3 className="font-serif text-xl font-medium text-slate-900">{t('career.questionsHeading')}</h3>
                <div className="flex items-start space-x-3 text-slate-600">
                  <Mail className="w-5 h-5 mt-1 shrink-0 text-slate-700" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{t('career.emailLabel')}</p>
                    <a href="mailto:kontakt@delita.se" className="text-sm hover:text-slate-700 transition-colors">kontakt@delita.se</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-slate-600">
                  <Phone className="w-5 h-5 mt-1 shrink-0 text-slate-700" />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{t('career.phoneLabel')}</p>
                    <a href="tel:+46703626744" className="text-sm hover:text-slate-700 transition-colors">+46(0) 70 36 26 744</a>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200">
                   <p className="text-sm text-slate-600 mb-4">{t('career.coffeeText')}</p>
                   <button
                     onClick={() => onNavigate('/kontakt')}
                     className="flex items-center text-slate-700 font-medium text-sm group"
                   >
                     {t('career.bookMeeting')} <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-slate-100">
                {status === 'success' ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-3xl text-slate-900 mb-4">{t('career.successHeading')}</h3>
                    <p className="text-slate-600 text-lg">{t('career.successText')}</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-8 py-3 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
                    >
                      {t('career.sendNew')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.firstName')} *</label>
                        <input
                          type="text" name="firstName" required
                          value={formState.firstName} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.lastName')} *</label>
                        <input
                          type="text" name="lastName" required
                          value={formState.lastName} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.labelEmail')} *</label>
                        <input
                          type="email" name="email" required
                          value={formState.email} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.labelPhone')} *</label>
                        <input
                          type="tel" name="phone" required
                          value={formState.phone} onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.linkedin')}</label>
                      <input
                        type="url" name="linkedin"
                        value={formState.linkedin} onChange={handleChange}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.positionLabel')}</label>
                      <select
                        name="position"
                        value={formState.position} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                      >
                        <option value="">{t('career.positionPlaceholder')}</option>
                        <option value="Spontanansökan">{t('career.positionSpontan')}</option>
                        <option value="Redovisningskonsult">{t('career.positionAccountant')}</option>
                        <option value="Löneadministratör">{t('career.positionPayroll')}</option>
                        <option value="Praktik">{t('career.positionIntern')}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.cvLabel')}</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-sm hover:bg-slate-50 transition-colors">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-slate-400" />
                          <div className="flex text-sm text-slate-600 justify-center">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-slate-700 hover:text-slate-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-delita-navy">
                              <span>{t('career.uploadFile')}</span>
                              <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                            </label>
                            <p className="pl-1">{t('career.dragDrop')}</p>
                          </div>
                          <p className="text-xs text-slate-500">
                            {file ? file.name : t('career.fileTypes')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('career.coverLetter')} *</label>
                      <textarea
                        name="coverLetter" required
                        rows={6}
                        value={formState.coverLetter} onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all resize-none"
                        placeholder={t('career.coverLetterPlaceholder')}
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="gdpr" name="gdpr" type="checkbox" required
                          checked={formState.gdpr}
                          // @ts-ignore - onChange handles checkbox properly in implementation
                          onChange={handleChange}
                          className="focus:ring-delita-navy h-4 w-4 text-slate-700 border-slate-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="gdpr" className="font-medium text-slate-700">{t('career.gdprLabel')}</label>
                        <p className="text-slate-500">{t('career.gdprText')}</p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full py-4 bg-delita-navy text-slate-800 font-medium rounded-full hover:bg-[#D6CFC3] transition-all shadow-lg flex items-center justify-center space-x-2 ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                    >
                      {status === 'submitting' ? t('career.sending') : t('career.sendApplication')}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
