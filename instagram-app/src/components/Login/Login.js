import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  login = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }


  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <div className="login-container">

      <h1>InstaClone</h1>
      <p>Please, log in.</p>

      <form className="login-form" onSubmit={this.login}>
        <input
          type="text"
          name="username" 
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.changeHandler}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.changeHandler}
        />

        <input type="submit" value="Login" />
      </form>
      </div>
    )
  }
}

export default Login;
