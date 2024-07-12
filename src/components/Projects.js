import React from 'react';
import './Projects.css';
import { useTranslation } from '../i18n/i18n.js';

const Projects = ({ currentTheme }) => {
    const projects = [
        {
            title: 'Project-Records',
            technologies: ['Node.js', 'EJS', 'PostgreSQL'],
            githubLink: 'https://github.com/ArminVejzovic/Project-Records',
            translationKey: 'projectRecords'
        },
        {
            title: '2048-JavaGame',
            technologies: ['Java'],
            githubLink: 'https://github.com/ArminVejzovic/2048-JavaGame',
            translationKey: 'game2048'
        },
        {
            title: 'Bookfix',
            technologies: ['Android', 'Kotlin'],
            githubLink: 'https://github.com/ArminVejzovic/bookfix',
            translationKey: 'bookfix'
        },
    ];

    const { translations } = useTranslation();

    return (
        <div className={`container mt-5 ${currentTheme}`}>
            <h2 className="text-center">{translations.projects.title}</h2>
            <div className="row justify-content-center">
                {projects.map((project, index) => (
                    <div className="col-md-4 d-flex justify-content-center" key={index}>
                        <div className="card project-card">
                            <div className="card-body">
                                <h5 className="card-title project-title">
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        {project.title}
                                    </a>
                                </h5>
                                <p className="card-text project-description">
                                    {translations.projects[project.translationKey].description}
                                </p>
                                <div className="technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <button key={techIndex} className="btn btn-outline-secondary tech-btn">{tech}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="text-center mt-3">
                <a href="https://github.com/ArminVejzovic" target="_blank" rel="noreferrer" className="btn btn-primary git-btn">
                    <i className="fab fa-github"></i> {translations.projects.moreProjects}
                </a>
            </div>
            <br />
            <br />
            <hr />
        </div>
    );
};

export default Projects;
