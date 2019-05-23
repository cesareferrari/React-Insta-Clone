import React from 'react';
import Comment from '../../components/CommentSection/Comment';

const CommentSection = props => {
  return(
    <div>
      {props.comments.map(comment => <Comment comment={comment} />)}
    </div>
  )
}

export default CommentSection;
