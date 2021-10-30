import React from 'react'
import { ArtistsLists} from '../Helper/ArtistsList.js'
import ArtistsItem from '../Components/ArtistsItem.js'
import '../Styles/Artists.css';

function Artists() {
    return (
        <div className="Artists">
            <h1 className="titleA">BROWSE THROUGH ARTISTS</h1>
            <div className="ArtistsList">
                {ArtistsLists.map((artistsItem, key) => {
                    return ( 
                        <ArtistsItem
                            key={key}
                            image ={artistsItem.image} 
                            name ={artistsItem.name} 
                            rate ={artistsItem.rate}
                       />
                        
                    );
                    
                })}
                
            </div>
            
        </div>
    );

}
export default Artists
