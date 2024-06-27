import React from 'react';

const Projects = () => {
    const projects = [
        { title: 'Project 1', description: 'Description of project 1.', imgSrc: 'https://via.placeholder.com/300' },
        { title: 'Project 2', description: 'Description of project 2.', imgSrc: 'https://via.placeholder.com/300' },
    ];

    return (
        <div className="projects container mt-5">
            <h2>Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card project-card">
                            <img src={project.imgSrc} alt={project.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <a href="https://github.com/yourusername" target="_blank" className="btn btn-primary">More of my projects...</a>
            </div>
        </div>
    );
};

export default Projects;
