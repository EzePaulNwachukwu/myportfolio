import React from 'react'

function ProjectCard({image, title, description, link, btn}) {
    return (
        <div>
            <div class="card">
                <img src={image} class="card-img-top" alt="..."  />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href={link} class="btn btn-primary">{btn}</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard