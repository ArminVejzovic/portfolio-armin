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
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDarkScheme ? 'dark' : 'light';
    };

    const [theme, setTheme] = useState(getInitialTheme);
    const [isVisible, setIsVisible] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        document.body.className = theme;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

    return (
        <I18nProvider>
            <div className={`app ${theme}`}>
                <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
                <section id="home"><Home currentTheme={theme} /></section>
                <section id="about"><About currentTheme={theme} /></section>
                <section id="skills"><Skills currentTheme={theme} /></section>
                <section id="projects"><Projects currentTheme={theme} /></section>
                <section id="contact"><Contact currentTheme={theme} /></section>
                <Footer />
                {isVisible && (
                    <button onClick={scrollToTop} className="scroll-to-top">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                )}
            </div>
        </I18nProvider>
    );
};

export default App;
