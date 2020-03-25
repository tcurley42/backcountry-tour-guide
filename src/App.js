import React from 'react';
import logo from './site image.jpg';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to Backcountry Tour Guide!
        <br/>
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
      <LoginForm />
      </header>
    </div>
  );
}

export default App;
