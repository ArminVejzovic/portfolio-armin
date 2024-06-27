import React from 'react';
import { useTranslation } from '../i18n/i18n.js';

const Footer = ({ currentTheme }) => {
    return (
        <footer className={`footer ${currentTheme === 'light' ? 'footer-light' : 'footer-dark'}`}>
            <div className="container">
                <p className="text-center">&copy; 2023 Armin Vejzovic. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
