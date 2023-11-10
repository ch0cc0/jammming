import React from "react";
import './Track.css';

function Track( { trackData } ) {

    return (
        <div className="track">
            <h3>{trackData.name}</h3>
            <p>{trackData.artist} | {trackData.album}</p>
        </div>
    );
}

export default Track;