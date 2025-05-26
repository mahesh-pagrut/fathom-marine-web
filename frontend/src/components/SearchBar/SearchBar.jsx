import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext'; 
import './SearchBar.css'

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search marine products..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
