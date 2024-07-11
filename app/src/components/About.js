import React from 'react';
import { useTranslation } from '../i18n/i18n.js';

const About = () => {
    const { translations } = useTranslation();

    return (
        <div style={{ maxWidth: '900px', marginBottom: '30px'}}  className="about container mt-5">
            <hr />
            <br />
            <br />
            <h2 className='text-center'>{translations.about.title}</h2>
            <br />
            <p className='text-justify' dangerouslySetInnerHTML={{ __html: translations.about.content }}></p>
            <br />
            <br />
            <hr />
            <br />
            <br />
        </div>
    );
};

export default About;
