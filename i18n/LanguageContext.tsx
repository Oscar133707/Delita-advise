import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from './translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getNestedValue(obj: any, path: string): string {
  const result = path.split('.').reduce((current, key) => current?.[key], obj);
  if (typeof result === 'string') return result;
  console.warn(`Translation missing for key: ${path}`);
  return path;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('delita-language');
      return (saved === 'en' || saved === 'sv') ? saved : 'sv';
    } catch {
      return 'sv';
    }
  });

  const toggleLanguage = () => {
    const next = language === 'sv' ? 'en' : 'sv';
    setLanguage(next);
    try {
      localStorage.setItem('delita-language', next);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return getNestedValue(translations[language], key);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
