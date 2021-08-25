import React from 'react';
import AboutImage from '../Resources/AboutImage.png';
import '../Styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop" 
                 style={{ backgroundImage: `url(${AboutImage})`}}>
            
            </div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Bridge is a localized event management solution which is 
                    designed to promote relaions between artists and event organizers/Managers. 
                    It allows you as an event organizer to browse through artists who are registered
                    to find an available crafts person to enhance the planning process. Apart from that, 
                    we link event organizers or individuals in need of artists and equipment for their 
                    live events. Our goal is to ease the negotiation process enhancing fast and 
                    effective event organizing. 
                </p>
            </div>
            
        </div>
    )
}

export default About
