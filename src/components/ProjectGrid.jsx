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
                image={require('../img/covid.png')}
                desc={'I Created this Application to share with my friends and family so they can be updated on covid information regarging total cases, cases by country, recoveries and deaths. '}
                repo={"https://github.com/JesusFernandoRios/Covid-19-tracker"}
                live={"https://jesusfernandorios.github.io/Covid-19-tracker/"}
                />

                <Project 
                image={require('../img/Dayplanner.png')}
                desc={'The Day planner is a simple application designed for setting reminders throughout the work day.'}
                repo={"https://github.com/JesusFernandoRios/DayPlanner.git"}
                live={"https://jesusfernandorios.github.io/DayPlanner/"}
                />

                <Project 
                image={require('../img/googlebksrch.png')}
                desc={"Search and save book titles using my API. It Takes book information from google books and lets you save them for later"}
                repo={"https://github.com/JesusFernandoRios/googleBookSearch.git"}
                live={"https://sleepy-hollows.herokuapp.com/"}
                />
                
            </div>

            <div className="project__content">
                <Project 
                image={require('../img/notetaker.png')}
                desc={'Keep track of your notes with this application! Stores all your notes on a JSON file'}
                repo={"https://github.com/JesusFernandoRios/NoteTaker.git"}
                live={"https://desolate-beyond-54031.herokuapp.com/"}
                />

                <Project 
                image={require('../img/burger.png')}
                desc={'Users can create hamburgers and devour them. This application uses MySQL, handlebars and express.js'}
                repo={"https://github.com/JesusFernandoRios/Burger.git"}
                live={"https://stark-hollows-63908.herokuapp.com/index"}
                />

                <Project 
                image={require('../img/codequiz.png')}
                desc={'This application contains Javascript fundamental questions designed to test the knowledge of aspiring web developers'}
                repo={"https://github.com/JesusFernandoRios/codequiz"}
                live={"https://jesusfernandorios.github.io/codequiz/"}
                />
            </div>

        </div>
    )
}

export default Projects
