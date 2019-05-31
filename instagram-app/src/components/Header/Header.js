import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import Logo from './Logo';
import HeaderIcons from './HeaderIcons';

const Header = props => {
  return(
    <header>
      <Logo />
      <SearchBar />
      <HeaderIcons />
    </header>
  )
}

export default Header;
