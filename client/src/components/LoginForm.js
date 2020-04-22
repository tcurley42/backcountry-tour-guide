import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import '../App.css';

class LoginForm extends Component {


  render() {

    return(
      <div>
        <form>
          <label name="username">Username:</label>
          <input type="text" name="username"/>
          <br/>
          <label name="password">Password:</label>
          <input type="password" name="password"/>
          <br/>
          <input type="submit" name="submit" value="Login" className='login-button'/>
        </form>
        <br/>
        <a href='/auth/facebook' className='login-button'>Login with Facebook</a>
      </div>
    )
  }
}

export default LoginForm;
