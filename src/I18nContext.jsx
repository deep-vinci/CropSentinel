import React, { createContext, useContext, useState, useEffect } from 'react';
import { makeT } from './translations';

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  // Create translation function
  const t = makeT(language);

  // Expose setLanguage and t
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
