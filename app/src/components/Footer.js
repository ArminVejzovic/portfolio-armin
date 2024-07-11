import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ currentTheme }) => {
    return (
        <footer className={`footer ${currentTheme === 'light' ? 'footer-light' : 'footer-dark'}`}>
            <hr />
            <div className="container text-center">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/armin-vejzovi%C4%87-a63b8b2b9/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/ArminVejzovic" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:29armin.vejzovic@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
                <p>&copy; 2024 Armin Vejzović</p>
            </div>
        </footer>
    );
};

export default Footer;
