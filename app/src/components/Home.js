import React from 'react';
import { useTranslation } from '../i18n/i18n.js';

const Home = () => {
    const { translations } = useTranslation();

    return (
        <div className="home container-fluid vh-100 d-flex justify-content-center align-items-center">
            <h1>{translations.home.title}</h1>
        </div>
    );
};

export default Home;
