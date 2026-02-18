import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, Calendar, CheckCircle, ChevronRight } from 'lucide-react';
import { useTranslation } from '../i18n';

interface ContactProps {
  onNavigate: (path: string) => void;
}

export const Contact = ({ onNavigate }: ContactProps) => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-slate-900 mb-4"
          >
            {t('contact.heading')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg font-light"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* LEFT COLUMN - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="grid gap-6">
                {/* Address */}
                <div className="p-8 bg-white rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-6 group">
                   <div className="p-4 bg-slate-50 rounded-full text-slate-700 group-hover:bg-delita-navy group-hover:text-slate-800 transition-colors">
                     <MapPin className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-serif text-lg font-medium text-slate-900 mb-2">{t('contact.address')}</h3>
                     <p className="text-slate-600 leading-relaxed">Södergatan 19<br/>211 34 Malmö</p>
                   </div>
                </div>

                {/* Email */}
                <a href="mailto:kontakt@delita.se" className="p-8 bg-white rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-6 group">
                   <div className="p-4 bg-slate-50 rounded-full text-slate-700 group-hover:bg-delita-navy group-hover:text-slate-800 transition-colors">
                     <Mail className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-serif text-lg font-medium text-slate-900 mb-2">{t('contact.email')}</h3>
                     <p className="text-slate-600">kontakt@delita.se</p>
                   </div>
                </a>

                {/* Phone */}
                <a href="tel:+46703626744" className="p-8 bg-white rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-6 group">
                   <div className="p-4 bg-slate-50 rounded-full text-slate-700 group-hover:bg-delita-navy group-hover:text-slate-800 transition-colors">
                     <Phone className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-serif text-lg font-medium text-slate-900 mb-2">{t('contact.phone')}</h3>
                     <p className="text-slate-600">+46(0) 70 36 26 744</p>
                   </div>
                </a>

                {/* Hours */}
                <div className="p-8 bg-white rounded-sm border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-6 group">
                   <div className="p-4 bg-slate-50 rounded-full text-slate-700 group-hover:bg-delita-navy group-hover:text-slate-800 transition-colors">
                     <Clock className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-serif text-lg font-medium text-slate-900 mb-2">{t('contact.hours')}</h3>
                     <p className="text-slate-600">{t('contact.hoursValue')}</p>
                   </div>
                </div>
              </div>

              {/* SRF Badge */}
              <div className="bg-slate-50 p-6 rounded-sm border border-slate-100 flex items-center space-x-4">
                 <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full border border-slate-200">
                    <span className="font-serif font-bold text-slate-700 text-xs">SRF</span>
                 </div>
                 <div>
                    <p className="font-medium text-slate-900 text-sm">{t('contact.authorizedMember')}</p>
                    <p className="text-slate-500 text-sm">{t('contact.srfFull')}</p>
                 </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-slate-100"
            >
               <h3 className="font-serif text-2xl text-slate-900 mb-6">{t('contact.formHeading')}</h3>

               {status === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-serif text-slate-900 mb-2">{t('contact.successHeading')}</h4>
                    <p className="text-slate-600">{t('contact.successText')}</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 text-slate-700 font-medium underline"
                    >
                      {t('contact.sendNew')}
                    </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.labelName')} <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        placeholder={t('contact.placeholderName')}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.labelEmail')} <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                        placeholder={t('contact.placeholderEmail')}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.labelPhone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                          placeholder={t('contact.placeholderPhone')}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.labelCompany')}</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all"
                          placeholder={t('contact.placeholderCompany')}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">{t('contact.labelMessage')} <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all resize-none"
                        placeholder={t('contact.placeholderMessage')}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className={`w-full py-4 bg-delita-navy text-slate-800 font-medium rounded-full hover:bg-[#D6CFC3] transition-all shadow-lg flex items-center justify-center space-x-2 ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}`}
                    >
                      {status === 'submitting' ? (
                        <span>{t('contact.sending')}</span>
                      ) : (
                        <>
                          <span>{t('contact.sendMessage')}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                 </form>
               )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="h-96 w-full bg-slate-100 border-t border-b border-slate-200 relative">
        <iframe
          title="Delita Advise Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
          src="https://maps.google.com/maps?q=Södergatan+19,+211+34+Malmö&t=&z=15&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]"></div>
      </section>

      {/* ALTERNATIVE CONTACT / BOOKING SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">{t('contact.bookDirectHeading')}</h2>
           <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
             {t('contact.bookDirectText')}
           </p>

           <button
             onClick={() => onNavigate('/boka-mote')}
             className="inline-flex items-center justify-center px-10 py-4 bg-white text-slate-800 border border-slate-200 font-medium rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
             >
             <Calendar className="w-5 h-5 mr-3 text-slate-800" />
             <span>{t('contact.bookDirectButton')}</span>
             <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
           </button>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
           <div className="absolute top-10 left-10 w-32 h-32 bg-delita-navy/5 rounded-full blur-3xl"></div>
           <div className="absolute bottom-10 right-10 w-64 h-64 bg-delita-navy/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};
