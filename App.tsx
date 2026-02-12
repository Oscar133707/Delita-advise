import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainContent } from './components/MainContent';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Loner } from './components/Loner';
import { Redovisning } from './components/Redovisning';
import { Radgivning } from './components/Radgivning';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Karriar } from './components/Karriar';
import { Login } from './components/Login';
import { BookMeeting } from './components/BookMeeting';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');
  const [language, setLanguage] = useState<'sv' | 'en'>('sv');

  const navigateTo = (path: string) => {
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-delita-navy selection:text-slate-800">
      <Navbar 
        onNavigate={navigateTo} 
        currentRoute={currentRoute} 
        language={language}
        onToggleLanguage={() => setLanguage(prev => prev === 'sv' ? 'en' : 'sv')}
      />
      <main className="flex-grow">
        {currentRoute === '/' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <MainContent />
            <WhyChooseUs />
            <Services onNavigate={navigateTo} />
          </>
        ) : currentRoute === '/om-oss' ? (
          <About onNavigate={navigateTo} />
        ) : currentRoute === '/karriar' ? (
          <Karriar onNavigate={navigateTo} />
        ) : currentRoute === '/kontakt' ? (
          <Contact onNavigate={navigateTo} />
        ) : currentRoute === '/boka-mote' ? (
          <BookMeeting onNavigate={navigateTo} />
        ) : currentRoute === '/login' ? (
          <Login onNavigate={navigateTo} />
        ) : currentRoute === '/tjanster/loner-medarbetare' ? (
          <Loner onNavigate={navigateTo} />
        ) : currentRoute === '/tjanster/redovisning-beskattning' ? (
          <Redovisning onNavigate={navigateTo} />
        ) : currentRoute === '/tjanster/radgivning' ? (
          <Radgivning onNavigate={navigateTo} />
        ) : (
          /* Fallback to home if route unknown */
          <>
             <Hero onNavigate={navigateTo} />
             <MainContent />
             <WhyChooseUs />
             <Services onNavigate={navigateTo} />
          </>
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}