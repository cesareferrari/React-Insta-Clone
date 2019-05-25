import React from 'react';
import './Comment.css';

const Comment = props => {
  return(
    <div className="comment">
    Username: {props.comment.username}<br />
    Text: {props.comment.text}
    </div>
  )
}

export default Comment;
