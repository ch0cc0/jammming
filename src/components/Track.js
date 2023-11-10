import React from "react";
import './Track.css';

function Track( { trackData } ) {

    return (
        <>
            <h3>{trackData.name}</h3>
            <p>{trackData.artist} | {trackData.album}</p>
        </>
    );
}

export default Track;