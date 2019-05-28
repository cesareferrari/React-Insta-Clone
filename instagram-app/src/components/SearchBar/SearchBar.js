import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return(
    <form className="search-bar">
      <input name="search" defaultValue="" type="text" placeholder="Search" />
    </form>
  )
}

export default SearchBar;
