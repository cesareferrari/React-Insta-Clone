import React from 'react';
import CommentSection from '../../components/CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
  return(
    <div className="post-container">
      <h2>{props.post.username}</h2>
      <img className="user-thumb" src={props.post.thumbnailUrl} />

      <img className="post-image" src={props.post.imageUrl} />

    <span className="likes">{props.post.likes} likes</span>


      <div>
        <CommentSection comments={props.post.comments} />
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
