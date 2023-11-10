import React from "react";
import './Tracklist.css';
import Track from './Track';

function Tracklist( { tracks, renderButton } ) {

    return (
        <div>
            {tracks.map(track => {
                return (
                    <div className="trackWrapper" key={track.id}>
                        <Track trackData={track}/>
                        {renderButton(track)}
                    </div>
                );
            })}
        </div>
    );
}

export default Tracklist;