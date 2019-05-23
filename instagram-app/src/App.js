import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
  return (
    <div className="App">
    <h1>Instagram clone</h1>
      {dummyData.map(post => <PostContainer key={post.username} post={post} />)}
    </div>
  );
}

export default App;
