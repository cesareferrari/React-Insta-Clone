import React from 'react';
import './PostsPage.css';
import Header from '../Header/Header';
import PostContainer from './PostContainer';

const PostsPage = props => {
  return(
    <div className="App">
    <Header />
      { props.posts.map(post => <PostContainer key={post.username} post={post} />) }
    </div>
  )
}

export default PostsPage;
