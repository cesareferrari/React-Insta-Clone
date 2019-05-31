import React from 'react';
import CommentSection from '../../components/CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './PostContainer.css';
import UserDisplay from './UserDisplay';

const PostContainer = props => {
  return(
    <div className="post-container">

      <UserDisplay username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />

      <img alt="Post" className="post-image" src={props.post.imageUrl} />
      <div>
        <span className="jam jam-heart"></span>
        <span className="jam jam-message-alt"></span>
      </div>
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
