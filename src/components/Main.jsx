import React from 'react'
import './style/style.css'

function Main() {
    
    return (
        <div className="main">\
        
            <div className="logo">
                <img className="mern__logo" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="MERN stack"/>
            </div>

            <div className="top">
                <div className="intro">
                   <h1>Jesus Fernando Rios</h1>
                    <h2>Web Developer | Phoenix, AZ</h2>
                    <h3 className="email">Jesusfernandorios@outlook.com</h3>
                    <p>
                        I've worked my way up in the Restaurant Industry, which lead me to become Head Sushi Chef at a local Japanese restaurant. 
                        Although this has been fulfilling, I've always been drawn towards my hobbies involving computers. 
                        This has pushed me to decide to take a career change and start a new chapter in my life. Having earned my certification from the University of Arizona's Programming Bootcamp.
                        I am eager to refine and evolve my skill set and become more established as a business professional in this field. 
                        My goal is to retire my Yanagiba knife and to dive deep into my new career as a Web Developer.
                    </p>
                
                    <p>
                        I am always eager to try new things, and I am always looking towards the future.
                    </p> 
    
                </div>
                
            </div>

        </div>
    )
}

export default Main
