import { Domain } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import LandingImage from '../Resources/LandingImage.jpg';
import '../bootstrap-3.3.7-dist/css/bootstrap.css';
import '../Styles/Home.css';


function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${LandingImage})`}}>
           
        
            <div className="headerContainer">
                 
                <h1> Bridge </h1> <br/><br/>
                <p>Bringing Gigs to Artists</p>
                <Link to="/Artists">
                <button> Browse Artists</button>
                </Link>
            </div>
        </div>
    )
}

export default Home
