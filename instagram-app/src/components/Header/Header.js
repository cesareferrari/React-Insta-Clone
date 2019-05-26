import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

const Header = props => {
  return(
    <header>
      <h1>Instagram</h1>
      <SearchBar />
    </header>
  )
}

export default Header;
