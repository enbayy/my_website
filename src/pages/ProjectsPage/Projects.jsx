import React from 'react'

function Projects({ project }) {
    const { id, title, description, link, image } = project;
    return (
        <div className='project'>
            <div>
                <img src={image} width={250} height={250} alt="" />
                <h4>{title}</h4>
                <h5>{description}</h5>
                <h6>{link}</h6>
            </div>
        </div>
    )
}

export default Projects