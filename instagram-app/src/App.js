import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import Header from './components/Header/Header';

class App extends React.Component {
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

  render() {
    return(
      <div className="App">
      <Header />
        { this.state.posts.map(post => <PostContainer key={post.username} post={post} />) }
      </div>
    )
  }
}

export default App;
