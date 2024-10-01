import React, { useState } from 'react';

function Projects({ project }) {
    const { id, title, description, image } = project;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='project'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className={`image ${isHovered ? 'blur' : ''}`} src={image} alt={title} />
            <h4 className='title'>{title}</h4>
            {isHovered && (
                <div className='pro-desc'>
                    {description}
                </div>
            )}
        </div>
    );
}

export default Projects;