import React from "react";
import './Tracklist.css';
import Track from './Track';

function Tracklist( { tracks, renderButton } ) {

    return (
        <div>
            {tracks.map(track => {
                return (
                    <React.Fragment key={track.id}>
                        <Track trackData={track}/>
                        {renderButton(track)}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

export default Tracklist;