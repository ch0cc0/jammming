import React from 'react';
import './Playlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import Tracklist from './Tracklist';

function Playlist({tracks, playlistName, onRemoveTrack, onSave, onUpdate }) {

    return (
        <>
            <input value={playlistName} onChange={onUpdate}/>
            <Tracklist 
                tracks={tracks} 
                renderButton={(track) => (
                    <button className="trackButton" onClick={() => onRemoveTrack(track)}>
                    <FontAwesomeIcon icon={faMinus} />
                    </button>
                )}
            />
            <button className="saveButton" onClick={onSave}>Save To Spotify</button>
        </>
    );
}

export default Playlist;