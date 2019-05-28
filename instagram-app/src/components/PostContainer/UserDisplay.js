import React from 'react';
import './UserDisplay.css';

const UserDisplay = props => {
  return(
    <div className="user-display">
      <img alt="User thumbnail" className="user-thumb" src={props.thumbnailUrl} />
      <h3>{props.username}</h3>
    </div>
  )
}

export default UserDisplay;
