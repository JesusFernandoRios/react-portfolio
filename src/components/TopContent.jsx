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
                        <a href="https://clone-580b7.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                            AmazonPup
                         <br/>
                            <span>Front-end Amazon Clone using React and Firebase</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://peaceful-brook-57472.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        Budget Tracker
                        <br/>
                        <span>Keep track of a set budget online or offline
                        <br/>
                        combined MongoDB and IndexedDB
                        </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://jesusfernandorios.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer">
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
                <a href="https://www.linkedin.com/in/jesus-rios-b499a41a4/" target="_blank" className="fa fa-linkedin" rel="noopener noreferrer"></a>
                <a href="https://github.com/JesusFernandoRios" target="_blank" className="fa fa-github" rel="noopener noreferrer"></a>
                <br/>
                <p>For my full set of skills checkout my resume below <br/> or for any questions or concerns feel free to contact me<br/>
                through my Social Links or Email below!</p>
                <h3 className="email">Jesusfernandorios@outlook.com</h3>
                <p>Phone: (520)878-3529</p>

                <a className="resume" href={require('../pdf/Resume.pdf')} target="_blank" rel="noopener noreferrer">My Resume</a>
                <Link to="/contactme">
                    <a className="resume" href='_' target="_blank" rel="noopener noreferrer">Contact Me</a>
                </Link>
            </div>

            <div className="column__three">
                <img src={require('../img/ihtml.png')} alt=""/>
                <img src={require('../img/icss.png')} alt=""/>
                <img src={require('../img/ijs.png')} alt=""/>
                <img className="iconBackground" src={require('../img/ijquery.png')} alt="Jquery"/>
                <img className="smallIcons" src={require('../img/iexpress.png')} alt="Express"/>
                <img className="smallIcons" src={require('../img/inodejs.png')} alt="NodeJs"/>
                <img className="bootstrap" src={require('../img/ibootstrap.png')} alt="Bootstrap"/>
                <img className="smallIcons" src={require('../img/ireact.png')} alt="ReactJs"/>
                <img className="smallIcons" src={require('../img/imongodb.png')} alt="MongoDB"/>
                <img className="smallIcons" src={require('../img/imysql.png')} alt="MySQL"/>
                <img className="npm" src={require('../img/inpm.png')} alt="NPM"/>
                <img className="smallIcons" src={require('../img/ifirebase.png')} alt="Firebase"/>
                <img className="smallIcons iconBackground" src={require('../img/igithub.png')} alt="Github"/>

            </div>
            
        </div>
        
    )
}

export default TopContent
