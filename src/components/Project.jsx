import React from 'react'

function Project({image, desc, repo}) {
    return (
        <div className='project'>

            <img  className="project__img" src={image} alt=""/>

            <p>{desc}</p>

            <a href={repo} title="Repository" target="_blank" className="fa fa-github repo" rel="noopener noreferrer"></a>
            
        </div>
    )
}

export default Project
