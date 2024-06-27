import React from 'react';
import { useTranslation } from '../i18n/i18n.js';

const About = () => {
    const { translations } = useTranslation();

    return (
        <div className="about container mt-5">
            <h2>{translations.about.title}</h2>
            <p>{translations.about.content}</p>
        </div>
    );
};

export default About;
