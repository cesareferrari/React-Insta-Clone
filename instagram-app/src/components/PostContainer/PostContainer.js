import React from 'react';
import CommentSection from '../../components/CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return(
    <div>
      <h2>{props.post.username}</h2>

      <div>
        <CommentSection comments={props.post.comments} />

        <input type="text" name="comment" placeholder="Add comment" />
      </div>
    </div>
  )
}

PostContainer.propTypes = {
  username: PropTypes.number
};

export default PostContainer;
