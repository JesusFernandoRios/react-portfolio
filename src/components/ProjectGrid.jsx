import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'
import './style/style.css'

function Projects() {
    return (
        <div className="projects">

            <div className="logo">
                <img className="mern__logo" src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" alt="MERN stack"/>
            </div>

            <div className="project__overview">
                <Link to="/"><a href="_"> ↩ Return </a> </Link> <h2>Here is a list of most of my projects</h2>
            </div>

            <div className="project__content">
                <Project 
                image={require('../img/codequiz.png')}
                desc={'This application contains Javascript fundamental questions designed to test the knowledge of aspiring web developers'}
                repo={"https://jesusfernandorios.github.io/codequiz/"}
                />

                <Project 
                image={require('../img/Dayplanner.png')}
                desc={'The Day planner is a simple application designed for setting reminders throughout the work day.'}
                repo={"https://github.com/JesusFernandoRios/DayPlanner.git"}
                />

                <Project 
                image={require('../img/In-quotations.png')}
                desc={'"In Quotations" An application designed to allow a user to quickly find up to five popular quotes by keyword search or by author.'}
                repo={"https://github.com/tiffcrockett/In-Quotations.github.io.git"}
                />
                
            </div>

            <div className="project__content">
                <Project 
                image={require('../img/notetaker.png')}
                desc={'Keep track of your notes with this application! Stores all your notes on a JSON file'}
                repo={"https://github.com/JesusFernandoRios/NoteTaker.git"}
                />

                <Project 
                image={require('../img/burger.png')}
                desc={'Users can create hamburgers and devour them. This application uses MySQL, handlebars and express.js'}
                repo={"https://github.com/JesusFernandoRios/Burger.git"}
                />

                <Project 
                image={require('../img/weather-app.png')}
                desc={'This application gets weather information for the next 5 days of any specific City '}
                repo={"https://github.com/JesusFernandoRios/WeatherApp.git"}
                />
            </div>

        </div>
    )
}

export default Projects
