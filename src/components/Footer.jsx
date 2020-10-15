import React from 'react'
import './style/style.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <img className="logo" src={require('../img/JR.png')} alt="my Logo"/>
            </div>

            <div className="footer__content">
                <p>Created using React.js and Particles.js</p>
            </div>
        </div>
    )
}

export default Footer
