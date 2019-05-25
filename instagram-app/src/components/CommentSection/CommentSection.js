import React from 'react';
import Comment from '../../components/CommentSection/Comment';
import './CommentSection.css';

const CommentSection = props => {
  return(
    <div className="comment-section">
      {props.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </div>
  )
}

export default CommentSection;
