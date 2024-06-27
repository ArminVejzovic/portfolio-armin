// src/i18n/i18n.js
import React, { createContext, useState, useContext } from 'react';
import translations from './translations';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <I18nContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useTranslation = () => useContext(I18nContext);
