import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './components/style/style.css';
import Main from './components/Main'
import TopContent from './components/TopContent'
import Footer from './components/Footer'
import ProjectGrid from './components/ProjectGrid'
import Particles from 'react-particles-js';
import ContactPage from './components/ContactPage'


function App() {

  return (
    <Router>
      <Particles params={{
	    "particles": {
	        "number": {
	            "value": 75,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
      }
    }}
    	/>
    	<Switch>
      		<Route path='/projects'>
        		<ProjectGrid/>
      		</Route>
	  		<Route path='/contactme'>
				<ContactPage/>
				<Footer/>
	  		</Route>
      		<Route path="/">
       			<Main/>
        		<TopContent/>
        		<Footer/>
      		</Route>
    	</Switch>
    </Router>
  );
}

export default App;
