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
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
};

export default PostContainer;
