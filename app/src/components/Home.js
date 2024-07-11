import React, { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/i18n.js';
import './Home.css';

const Home = ({ currentTheme }) => {
    const { translations } = useTranslation();
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        setDisplayedText('');

        const fullText = translations.home.scrollDown;
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + fullText[index]);
            index++;
            if (index === fullText.length) {
                clearInterval(intervalId);
            }
        }, 100); 

        
        return () => clearInterval(intervalId);
    }, [translations]);

    return (
        <div className={`home container-fluid vh-100 d-flex flex-column justify-content-center align-items-center ${currentTheme}`}>
            <h1 className="animated-text">{translations.home.title}</h1>
            <p className="animated-subtext">{translations.home.subtitle}</p>
            <div className={`typed-text ${currentTheme}`}>
                {displayedText}
                <span className="typed-cursor">|</span>
            </div>
        </div>
    );
};

export default Home;
