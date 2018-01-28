import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/example/example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Example />
      </div>
    );
  }
}

export default App;
