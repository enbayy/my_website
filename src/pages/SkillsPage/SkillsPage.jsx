import React, { useState, useEffect } from 'react';
import '../../css/SkillsPage.css';

function SkillsPage() {
    const [animate, setAnimate] = useState(false);

    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 95 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 55 },
    ];

    const communicationSkills = [
        { name: 'Takım Çalışması', level: 90 },
        { name: 'İletişim', level: 90 },
        { name: 'Liderlik', level: 80 },
        { name: 'Yaratıcılık', level: 85 },
        { name: 'Sorun Çözme', level: 85 },
    ];

    useEffect(() => {
        setAnimate(true);
    }, []);

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
                                style={{ width: animate ? `${skill.level}%` : '0%' }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="communication-skills">
                {communicationSkills.map((comSkill, index) => (
                    <div key={index} className="communication-skill">
                        <div className="circle">
                            <span>{comSkill.name} {comSkill.level}%</span>
                            <div
                                className="circle-fill"
                                style={{ height: animate ? `${comSkill.level}%` : '0%' }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsPage;