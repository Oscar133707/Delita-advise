import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, Building, Clock, CheckCircle, ArrowLeft, Send } from 'lucide-react';

interface BookMeetingProps {
  onNavigate: (path: string) => void;
}

export const BookMeeting = ({ onNavigate }: BookMeetingProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    meetingType: 'Videomöte',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const meetingTypes = [
    {
      id: 'Telefonkonsultation',
      icon: Phone,
      title: 'Telefon konsultation',
      duration: '15-30 minuter',
      desc: 'Kostnadsfri telefonkonsultation för snabba frågor.'
    },
    {
      id: 'Videomöte',
      icon: Video,
      title: 'Videomöte',
      duration: '30-60 minuter',
      desc: 'Digitalt möte via Teams eller Zoom.'
    },
    {
      id: 'Kontorsmöte',
      icon: Building,
      title: 'Kontorsmöte',
      duration: '60 minuter',
      desc: 'Besök oss på vårt kontor i Malmö.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectMeetingType = (type: string) => {
    setFormData({ ...formData, meetingType: type });
    const formElement = document.getElementById('booking-form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pt-20">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-100 pb-16 pt-12 text-center px-6">
        <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-slate-900 mb-4"
        >
            Boka ett möte
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg font-light max-w-2xl mx-auto"
        >
            Låt oss diskutera hur vi kan hjälpa ditt företag framåt. Fyll i formuläret så återkommer vi för att hitta en tid som passar.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Meeting Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {meetingTypes.map((type, index) => (
                <motion.div
                    key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => selectMeetingType(type.id)}
                    className={`bg-white p-8 rounded-2xl shadow-sm border-2 cursor-pointer transition-all duration-300 ${formData.meetingType === type.id ? 'border-delita-navy ring-4 ring-delita-navy/5' : 'border-transparent hover:border-delita-navy/30'}`}
                >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${formData.meetingType === type.id ? 'bg-delita-navy text-slate-800' : 'bg-slate-50 text-slate-700'}`}>
                        <type.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-slate-900 mb-2">{type.title}</h3>
                    <div className="flex items-center text-sm text-slate-500 mb-4">
                        <Clock className="w-4 h-4 mr-1.5" />
                        <span>{type.duration}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{type.desc}</p>
                </motion.div>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Booking Form */}
            <motion.div 
                id="booking-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-8 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100"
            >
                {status === 'success' ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10" />
                        </div>
                        <h3 className="font-serif text-3xl text-slate-900 mb-4">Tack för din förfrågan!</h3>
                        <p className="text-slate-600 text-lg mb-8">Vi har mottagit dina önskemål och återkommer inom kort med förslag på tider som passar.</p>
                        <button 
                            onClick={() => onNavigate('/')}
                            className="px-8 py-3 bg-delita-navy text-slate-800 rounded-full hover:bg-[#D6CFC3] transition-colors"
                        >
                            Tillbaka till startsidan
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex items-center space-x-2 text-slate-700 font-medium mb-4 bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <CheckCircle className="w-5 h-5" />
                            <span>Vald mötestyp: {formData.meetingType}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Namn *</label>
                                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all" placeholder="Ditt namn" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">E-post *</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all" placeholder="namn@foretag.se" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Telefon *</label>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all" placeholder="070-123 45 67" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Företag</label>
                                <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all" placeholder="Företagsnamn AB" />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Meddelande / Önskemål om tid</label>
                            <textarea name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-delita-navy focus:border-transparent outline-none transition-all resize-none" placeholder="Berätta kort vad du vill diskutera och om du har önskemål om specifika dagar eller tider..."></textarea>
                        </div>
                        
                        <button type="submit" disabled={status === 'submitting'} className="w-full py-4 bg-delita-navy text-slate-800 font-medium rounded-full hover:bg-[#D6CFC3] transition-all shadow-lg text-lg flex items-center justify-center space-x-2">
                            {status === 'submitting' ? (
                                <span>Skickar...</span>
                            ) : (
                                <>
                                    <span>Skicka bokningsförfrågan</span>
                                    <Send className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </motion.div>

            {/* Sidebar Info */}
             <div className="lg:col-span-4 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-serif text-xl font-medium text-slate-900 mb-4">Alternativ kontakt</h3>
                    <p className="text-slate-600 mb-6 font-light">Föredrar du att kontakta oss direkt istället för att använda formuläret?</p>
                    
                    <div className="space-y-4">
                        <a href="tel:+46703626744" className="flex items-center space-x-3 text-slate-700 hover:text-slate-700 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
                                <Phone className="w-5 h-5" />
                            </div>
                            <span className="font-medium">+46(0) 70 36 26 744</span>
                        </a>
                        <a href="mailto:kontakt@delita.se" className="flex items-center space-x-3 text-slate-700 hover:text-slate-700 transition-colors">
                             <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
                                <span className="text-xl">@</span>
                            </div>
                            <span className="font-medium">kontakt@delita.se</span>
                        </a>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <button onClick={() => onNavigate('/kontakt')} className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Till kontaktsidan
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};