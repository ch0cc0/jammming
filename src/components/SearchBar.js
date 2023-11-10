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
        <>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
        </>
    );
}

export default SearchBar;