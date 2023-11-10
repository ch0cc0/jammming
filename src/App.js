import React, { useState, useCallback } from 'react';
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Spotify from './util/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [myTracks, setMyTracks] = useState([]);

  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  };

  const savePlaylist = () => {
    const trackUris = myTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setMyTracks([]);
    });
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
      <p style={{fontSize: '4rem'}}>jaMMMing</p>
      <SearchBar onSearch={search} />
      <SearchResults trackResults={searchResults} onAddTrack={addTrackToTrackList} />
      <Playlist tracks={myTracks} playlistName={playlistName} onRemoveTrack={removeTrackFromTrackList} onSave={savePlaylist} onUpdate={updatePlaylistName} />
    </div>
  );
}

export default App;