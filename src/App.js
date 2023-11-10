import React, { useState, useCallback } from 'react';
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Spotify from './util/Spotify';
import MusicNoteIcon from './media/images/music_note.svg';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [myTracks, setMyTracks] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const savePlaylist = () => {
    if (myTracks.length > 0) {
      const trackUris = myTracks.map((track) => track.uri);
      Spotify.savePlaylist(playlistName, trackUris).then(() => {
        setPlaylistName("New Playlist");
        setMyTracks([]);
      });
    } else {
      alert('Error: Playlist Empty')
    }
  };

  const updatePlaylistName = ({target}) => {
    setPlaylistName(target.value);
  };

  const addTrackToTrackList = useCallback((track) => {
    // Avoid adding duplicates
    if (!myTracks.some(t => t.id === track.id)) {
      setMyTracks([...myTracks, track]);
    }
  }, [myTracks]);

  const removeTrackFromTrackList = useCallback((track) => {
    setMyTracks(myTracks.filter(t => t.id !== track.id));
  }, [myTracks]);


  return (
    <div className="App">
      <h1 className='title'><img src={MusicNoteIcon} alt="Music Note" className="musicIcon" />a<span className='mmm'>MMM</span>ing</h1>
      <div className="search">
        <SearchBar className="searchBar" onSearch={search} />
        <SearchResults className="searchResults" trackResults={searchResults} onAddTrack={addTrackToTrackList} />
      </div>
      <div className="playlist">
        <Playlist tracks={myTracks} playlistName={playlistName} onRemoveTrack={removeTrackFromTrackList} onSave={savePlaylist} onUpdate={updatePlaylistName} />
      </div>
    </div>
  );
}

export default App;