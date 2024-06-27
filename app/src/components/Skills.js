import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'HTML', imgSrc: 'https://via.placeholder.com/150' },
        { name: 'CSS', imgSrc: 'https://via.placeholder.com/150' },
        { name: 'JavaScript', imgSrc: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="skills container mt-5">
            <h2>Skills</h2>
            <div className="row">
                {skills.map((skill, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card skill-card">
                            <div className="card-body">
                                <img src={skill.imgSrc} alt={skill.name} className="img-fluid" />
                                <p>{skill.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
