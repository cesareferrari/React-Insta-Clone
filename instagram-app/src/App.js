import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends React.Component {
  render() {
    return(
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;
