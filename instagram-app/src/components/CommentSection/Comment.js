import React from 'react';

const Comment = props => {
  return(
    <div>
    Username: {props.comment.username}<br />
    Text: {props.comment.text}
    </div>
  )
}

export default Comment;
