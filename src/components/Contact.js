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
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const form = document.createElement('form');
        form.setAttribute('action', 'https://formsubmit.co/29armin.vejzovic@gmail.com');
        form.setAttribute('method', 'POST');
        form.setAttribute('style', 'display: none;');

        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const input = document.createElement('input');
                input.setAttribute('type', 'hidden');
                input.setAttribute('name', key);
                input.setAttribute('value', formData[key]);
                form.appendChild(input);
            }
        }

        const subjectInput = document.createElement('input');
        subjectInput.setAttribute('type', 'hidden');
        subjectInput.setAttribute('name', '_subject');
        subjectInput.setAttribute('value', 'New submission from Contact Form');
        form.appendChild(subjectInput);

        document.body.appendChild(form);

        try {
            form.submit();
            alert('✅ Your message has been sent successfully! Thank you very much!');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            alert('❌ There was an error sending your message. Please try again later.');
        } finally {
            setIsSending(false);
            document.body.removeChild(form);
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
                        disabled={isSending}
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
                        disabled={isSending}
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
                        disabled={isSending}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-send btn-primary"
                    disabled={isSending}
                >
                    {isSending ? 'Sending...' : translations.contact.submit}
                </button>
            </form>
            <br />
            <br />
            <hr />
        </div>
    );
};

export default Contact;
