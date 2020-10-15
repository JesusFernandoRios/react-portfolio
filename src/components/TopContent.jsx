import React from 'react'
import './style/style.css'
import {Link} from 'react-router-dom'

function TopContent() {
    return (
        <div className="mid">
            <div className="column__one">
                <h2>Projects</h2>
                <ul>
                    <li>
                        <a href="https://clone-580b7.firebaseapp.com/">
                            AmazonPup
                         <br/>
                            <span>Front-end Amazon Clone using React with a puppy theme</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://peaceful-brook-57472.herokuapp.com/">
                        Budget Tracker
                        <br/>
                        <span>Keep track of a set budget online or offline
                        <br/>
                        combined MongoDB and IndexedDB
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://jesusfernandorios.github.io/WeatherApp/">
                            Weather App
                         <br/>
                            <span>Obtain Weather information of a specific City
                            <br/>
                            using jQuery and LocalStorage
                            </span>
                        </a>
                    </li>
                </ul>
                <Link to='/projects'>
                    <a href="_"> See All >></a>
                </Link>
            </div>

            <div className="column__two">
                <h2>Social Links</h2>
                <a href="https://www.linkedin.com/in/jesus-rios-b499a41a4/" target="_blank" className="fa fa-linkedin" rel="noopener"></a>
                <a href="https://github.com/JesusFernandoRios" target="_blank" className="fa fa-github" rel="noopener"></a>
                <br/>
                <p>For my full set of skills checkout my resume below <br/> or for any questions or concerns feel free to contact me!</p>
                <a className="resume" href={require('../pdf/Resume.pdf')} target="_blank" rel="noopener">My Resume</a>
                <Link to="/contactme">
                    <a className="resume" href='_' target="_blank">Contact Me</a>
                </Link>
                
            </div>
            
        </div>
    )
}

export default TopContent
