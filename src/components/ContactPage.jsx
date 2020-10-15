import React from 'react'
import './style/style.css'
import {Link} from 'react-router-dom'

function ContactPage() {
    return (
        <div className="contact__container">
            
            <div className="contact__form">
                <Link to="/"><a href="_"> ↩ Return </a> </Link>
                <br/>
                <h2>Thank you for taking the time to contact me!</h2>
                <form action="https://submit-form.com/QL2cL0nQU3o5v4PPw3bMW" target="_self">
                    <div className="form__container">

                        <h3>E-mail</h3>
                        <input type="text" name="email" placeholder="Email"/>
                        <h3>Subject</h3>
                        <input type="text" name="subject" placeholder="Subject"/>
                        <h3>Message</h3>
                        <textarea name="message" placeholder="Message" rows='8' cols='60'></textarea>
                        <br/>
                        {/* <!-- A button of type submit --> */}
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default ContactPage
