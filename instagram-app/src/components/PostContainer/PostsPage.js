import React from 'react';
import './PostsPage.css';
import Header from '../Header/Header';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  logout = event => {
    localStorage.removeItem('user');
    window.location.reload();
  }

  render() {
    return(
      <div>
      <Header />
        { this.state.posts.map(post => <PostContainer key={post.username} post={post} />) }

      <button name="logout" onClick={this.logout}>Log out</button>
      </div>
    )
  }
}

export default PostsPage;
