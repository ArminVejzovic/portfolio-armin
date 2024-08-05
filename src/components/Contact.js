import React, { useState } from 'react';
import { useTranslation } from '../i18n/i18n.js';
import './Contact.css';

const Contact = ({ currentTheme }) => {
    const { translations } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formsubmit.co/29armin.vejzovic@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: 'New submission from Contact Form'
                })
            });

            if (response.ok) {
                alert('✅ Your message has been sent successfully! Thank you very much!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                alert('❌ There was an error sending your message. Please try again later.');
            }
        } catch (error) {
            alert('❌ There was an error sending your message. Please try again later.');
        }
    };

    return (
        <div className={`contact mt-5 ${currentTheme}`}>
            <h2>{translations.contact.title}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label><i className="fas fa-user"></i> {translations.contact.name}</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={"John Doe"}
                        required
                    />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-envelope"></i> {translations.contact.email}</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={"john.doe@example.com"}
                        required
                    />
                </div>
                <div className="form-group">
                    <label><i className="fas fa-comment"></i> {translations.contact.message}</label>
                    <textarea
                        className="form-control"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={"Your message..."}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-send btn-primary">{translations.contact.submit}</button>
            </form>
            <br />
            <br />
            <hr />
        </div>
    );
};

export default Contact;
