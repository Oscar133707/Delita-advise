import React, { useState } from 'react';
import { LanguageProvider } from './i18n';
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
import { BranschSpecifik } from './components/BranschSpecifik';
import { NyheterKommerSnart } from './components/NyheterKommerSnart';
import { Interim } from './components/Interim';
import { Rekrytering } from './components/Rekrytering';
import { RedovisningRapportering } from './components/RedovisningRapportering';
import { HRHumanResource } from './components/HRHumanResource';
import { InternationellaUppdrag } from './components/InternationellaUppdrag';
import { ManagementSida } from './components/ManagementSida';
import { InfluencerCreator } from './components/InfluencerCreator';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  const navigateTo = (path: string) => {
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans selection:bg-delita-navy selection:text-slate-800">
        <Navbar
          onNavigate={navigateTo}
          currentRoute={currentRoute}
        />
        <main className="flex-grow">
          {currentRoute === '/' ? (
            <>
              <Hero onNavigate={navigateTo} />
              <MainContent />
              <WhyChooseUs />
              <Services onNavigate={navigateTo} />
              <BranschSpecifik onNavigate={navigateTo} />
            </>
          ) : currentRoute === '/nyheter-kommer-snart' ? (
            <NyheterKommerSnart onNavigate={navigateTo} />
          ) : currentRoute === '/tjanster/interim' ? (
            <Interim onNavigate={navigateTo} />
          ) : currentRoute === '/tjanster/rekrytering' ? (
            <Rekrytering onNavigate={navigateTo} />
          ) : currentRoute === '/tjanster/redovisning-rapportering' ? (
            <RedovisningRapportering onNavigate={navigateTo} />
          ) : currentRoute === '/tjanster/hr-human-resource' ? (
            <HRHumanResource onNavigate={navigateTo} />
          ) : currentRoute === '/tjanster/internationella-uppdrag' ? (
            <InternationellaUppdrag onNavigate={navigateTo} />
          ) : currentRoute === '/tjanster/management' ? (
            <ManagementSida onNavigate={navigateTo} />
          ) : currentRoute === '/branscher/influencer-creator' ? (
            <InfluencerCreator onNavigate={navigateTo} />
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
            <>
               <Hero onNavigate={navigateTo} />
               <MainContent />
               <WhyChooseUs />
               <Services onNavigate={navigateTo} />
               <BranschSpecifik onNavigate={navigateTo} />
            </>
          )}
        </main>
        <Footer onNavigate={navigateTo} />
      </div>
    </LanguageProvider>
  );
}
