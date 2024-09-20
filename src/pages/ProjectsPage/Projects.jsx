import React from 'react'

function Projects({ project }) {
    const { id, title, description, link, image } = project;
    return (
        <div className='project'>
            <div className='project-all'>
                <img className='image' src={image} alt="" />
                <h4 className='title'>{title}</h4>
                <h5 className='pro-desc'>{description}</h5>
                <div className='pro-link'><a className='link' href={link} target='_blank'>Videoyu izlemek için tıkla</a></div>
            </div>
        </div>
    )
}

export default Projects