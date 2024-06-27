// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { I18nProvider } from './i18n/i18n.js';
import './index.css';

const App = () => {
    const getInitialTheme = () => {
        // Check if a theme is already saved in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check the user's system preference
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkScheme ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <I18nProvider>
            <div className={`app ${theme}`}>
                <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </I18nProvider>
    );
};

export default App;
