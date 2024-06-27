import React from 'react';
import { useTranslation } from '../i18n/i18n.js';

const Contact = () => {
    const { translations } = useTranslation();

    return (
        <div className="contact container mt-5">
            <h2>{translations.contact.title}</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label><i className="fas fa-user"></i> {translations.contact.name}</label>
                    <input type="text" className="form-control" placeholder={translations.contact.name} />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-envelope"></i> {translations.contact.email}</label>
                    <input type="email" className="form-control" placeholder={translations.contact.email} />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-comment"></i> {translations.contact.message}</label>
                    <textarea className="form-control" rows="3" placeholder={translations.contact.message}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">{translations.contact.submit}</button>
            </form>
        </div>
    );
};

export default Contact;
