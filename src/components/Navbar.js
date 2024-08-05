import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/i18n';
import '../../src/index.css';

const Navbar = ({ toggleTheme, currentTheme }) => {
    const { language, changeLanguage, translations } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const navbarRef = useRef(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
        if (menuRef.current && !menuRef.current.contains(event.target) && !navbarRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header className='sticky-header'>
                <nav ref={navbarRef} className={`navbar navbar-expand-lg ${currentTheme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
                    <a className="navbar-brand" href="/">
                        <img style={{ width: '50px', height: '40px', marginLeft: '10px' }} src="logo.png" alt="Logo" className="logo" />
                    </a>
                    <button className="icon navbar-toggler" type="button" onClick={handleMenuToggle}>
                        <span className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></span>
                    </button>
                    <div ref={menuRef} className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item"><a className="nav-link" href="#home" onClick={closeMenu}>{translations.navbar.home}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about" onClick={closeMenu}>{translations.navbar.about}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills" onClick={closeMenu}>{translations.navbar.skills}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#projects" onClick={closeMenu}>{translations.navbar.projects}</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact" onClick={closeMenu}>{translations.navbar.contact}</a></li>
                        </ul>
                        <br></br>
                        <div className="navbar-buttons ml-auto d-flex flex-column flex-lg-row align-items-center">
                            <a className="btn cv-btn btn-secondary" href={language === 'bs' ? 'cv_armin_vejzovic_bih2.pdf' : 'cv_armin_vejzovic_eng2.pdf'} target="_blank" rel="noreferrer" onClick={closeMenu}>
                                <i className="fas fa-file"></i> {translations.navbar.cv}
                            </a>
                            <div ref={dropdownRef} className="dropdown d-flex justify-content-center mb-lg-0">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="languageDropdown" onClick={handleDropdownToggle}>
                                    <i className="fas fa-language"></i>
                                </button>
                                <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="languageDropdown">
                                    <button className="dropdown-item" onClick={() => { changeLanguage('en'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/usa.png" alt="English" className="flag-icon" /> English
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('bs'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/bih.png" alt="Bosanski" className="flag-icon" /> Bosanski
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('de'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/ger.png" alt="Deutsch" className="flag-icon" /> Deutsch
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('fr'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/fra.png" alt="Français" className="flag-icon" /> Français
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('es'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/esp.png" alt="Español" className="flag-icon" /> Español
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('zh'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/chn.png" alt="中文" className="flag-icon" /> 中文
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('hi'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/ind.png" alt="हिन्दी" className="flag-icon" /> हिन्दी
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('jp'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/jpn.png" alt="日本語" className="flag-icon" /> 日本語
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('ru'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/rus.png" alt="Русский" className="flag-icon" /> Русский
                                    </button>
                                    <button className="dropdown-item" onClick={() => { changeLanguage('pt'); closeMenu(); handleDropdownToggle(); }}>
                                        <img src="jezici_slike/por.png" alt="Português" className="flag-icon" /> Português
                                    </button>
                                </div>
                            </div>
                            <button className="btn btn-secondary" onClick={() => { toggleTheme(); closeMenu(); }}>
                                <i className={currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;
