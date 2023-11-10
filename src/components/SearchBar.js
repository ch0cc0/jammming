import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

function SearchBar({onSearch}) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(inputValue);
    }

    return (
        <div className='searchGrid'>
            <input className='bar' value={inputValue} onChange={handleInputChange} />
            <button className='searchButton' onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
        </div>
    );
}

export default SearchBar;