import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';

const Comment = props => {
  return(
    <div className="comment">
    Username: {props.comment.username}<br />
    Text: {props.comment.text}
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string
  })
}

export default Comment;
