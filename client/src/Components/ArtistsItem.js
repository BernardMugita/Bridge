import React from 'react';
import '../Styles/Artists.css';

function ArtistsItem( {image, name, rate}) {
    return (
        <div className="ArtistsItem">
            <div style={{ backgroundImage: `url(${image})`}}></div>
            <h1> { name } </h1>
            <p> ksh {rate} </p>
            <a href="#" className="button">Book</a>
            
        </div>
    )
}

export default ArtistsItem

