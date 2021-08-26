import React from 'react'
import contactImage from '../Resources/contactImage.jpg';
import '../Styles/Contact.css';
function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" 
                style={{ backgroundImage: `url(${contactImage})`}}>

            </div>

            <div className="rightSide">
                <h1>Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlfor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name" type="text" />
                    <label htmlfor="email">Email</label>
                    <input name="email" placeholder="Enter you email" type="email" />
                    <label htmlfor="message">Message</label>
                    <textarea rows="6" placeholder="Type your Message here"
                                name="message" required></textarea>
                    <button type="submit">Send</button>

                    
                </form>
            </div>

            
        </div>
    )
}

export default Contact
