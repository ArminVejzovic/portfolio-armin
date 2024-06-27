// src/components/Navbar.js
import React, { useState } from 'react';
import { useTranslation } from '../i18n/i18n';
import '../../src/index.css';

const Navbar = ({ toggleTheme, currentTheme }) => {
    const { language, changeLanguage, translations } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg ${currentTheme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
            <a className="navbar-brand" href="#">
                <img style={{ width: '50px', height: '40px', marginLeft: '10px' }} src="logo.png" alt="Logo" className="logo" />
            </a>
            <button className="navbar-toggler" type="button" onClick={handleMenuToggle}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                <ul className="navbar-nav mx-auto text-center">
                    <li className="nav-item"><a className="nav-link" href="#about">{translations.navbar.about}</a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills">{translations.navbar.skills}</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">{translations.navbar.projects}</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">{translations.navbar.contact}</a></li>
                </ul>
                <div className="navbar-buttons ml-auto d-flex flex-column flex-lg-row">
                    <a className="btn btn-secondary mb-2 mb-lg-0" href={language === 'bs' ? 'CV_bih_new.pdf' : 'CV_eng_new.pdf'} target="_blank">
                        <i className="fas fa-file"></i> {translations.navbar.cv}
                    </a>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle mb-2 mb-lg-0" type="button" id="languageDropdown" onClick={handleDropdownToggle}>
                            <i className="fas fa-language"></i> {translations.navbar.language}
                        </button>
                        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="languageDropdown">
                            <button className="dropdown-item" onClick={() => {changeLanguage('en'); handleDropdownToggle();}}>
                                <img src="jezici_slike/usa.png" alt="English" className="flag-icon" /> English
                            </button>
                            <button className="dropdown-item" onClick={() => {changeLanguage('bs'); handleDropdownToggle();}}>
                                <img src="jezici_slike/bih.png" alt="Bosanski" className="flag-icon" /> Bosanski
                            </button>
                            <button className="dropdown-item" onClick={() => {changeLanguage('de'); handleDropdownToggle();}}>
                                <img src="jezici_slike/ger.png" alt="Deutsch" className="flag-icon" /> Deutsch
                            </button>
                            <button className="dropdown-item" onClick={() => {changeLanguage('fr'); handleDropdownToggle();}}>
                                <img src="jezici_slike/fra.png" alt="Français" className="flag-icon" /> Français
                            </button>
                            <button className="dropdown-item" onClick={() => {changeLanguage('es'); handleDropdownToggle();}}>
                                <img src="jezici_slike/bih.png" alt="Español" className="flag-icon" /> Español
                            </button>
                        </div>
                    </div>
                    <button className="btn btn-secondary" onClick={toggleTheme}>
                        <i className={currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i> {currentTheme === 'light' ? translations.navbar.darkMode : translations.navbar.lightMode}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
