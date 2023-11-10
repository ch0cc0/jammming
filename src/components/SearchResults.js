import React from "react";
import './SearchResults.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tracklist from './Tracklist';

function SearchResults( { trackResults, onAddTrack } ) {

    return (
        <Tracklist 
            tracks={trackResults} 
            renderButton={(track) => (
                <button className="trackButton" onClick={() => onAddTrack(track)}>
                <FontAwesomeIcon icon={faPlus} />
                </button>
            )}
        />
    );
}

export default SearchResults;