import React from 'react';

const SearchBar = props => {
  return(
    <form>
      <input name="search" defaultValue="" type="text" placeholder="Search" />
    </form>
  )
}

export default SearchBar;
