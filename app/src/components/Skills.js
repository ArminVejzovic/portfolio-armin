import React from 'react';
import { useTranslation } from '../i18n/i18n.js';
import './Skills.css';


const skills = [
    { name: 'HTML', imgSrc: 'skills_slike/html-5.png' },
    { name: 'CSS', imgSrc: 'skills_slike/css-3.png' },
    { name: 'JavaScript', imgSrc: 'skills_slike/js.png' },
    { name: 'Python', imgSrc: 'skills_slike/python.png' },
    { name: 'C++', imgSrc: 'skills_slike/c-.png' },
    { name: 'Java', imgSrc: 'skills_slike/java.png' },
    { name: 'Node.js', imgSrc: 'skills_slike/node-js.png' },
    { name: 'React.js', imgSrc: 'skills_slike/reactjs.png' },
    { name: 'Next.js', imgSrc: 'skills_slike/nextjs.png' },
    { name: 'FastAPI', imgSrc: 'skills_slike/fastapi.png' },
    { name: 'SQL', imgSrc: 'skills_slike/sql.png' },
    { name: 'Kotlin', imgSrc: 'skills_slike/kotlin.png' },
    { name: 'Git', imgSrc: 'skills_slike/git.png' },
    { name: 'Bootstrap', imgSrc: 'skills_slike/bootstrap.png' },
];

   
const Skills = ({ currentTheme }) => {
    const { translations } = useTranslation();
    return (
        <div>
            <div className={`skills ${currentTheme}`}>
                <h2 className='text-center'>{translations.skills.title}</h2>
                <div className="skills-wrapper">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="card-body text-center">
                                <img src={skill.imgSrc} alt={skill.name} className="img-fluid skill-img" />
                                <p className="skill-name mt-2">{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br></br>
            <br></br>
            <hr></hr>
        </div>
        
    );
};

export default Skills;
