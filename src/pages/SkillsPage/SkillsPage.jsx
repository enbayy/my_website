import React from 'react';
import '../../css/SkillsPage.css';

function SkillsPage() {
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'React', level: 70 },
        { name: 'Node.js', level: 60 },
    ];

    const communicationSkills = [
        { name: 'Team Work', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 75 },
        { name: 'Creativity', level: 70 },
        { name: 'Problem Solving', level: 65 },
    ];

    return (
        <div className="skills-container">
            <h1 className="skills-title">Yetkinliklerim</h1>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <div className="skill-name">{skill.name}</div>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="communication-skills">
                {communicationSkills.map((comSkill, index) => (
                    <div key={index} className="communication-skill">
                        <div className="circle">
                            <span>{comSkill.name}</span>
                            <div
                                className="circle-fill"
                                style={{ height: `${comSkill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsPage;