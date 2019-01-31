import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from './Numbers/Numbers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Numbers items="1 2 3 4 5" />
      </div>
    );
  }
}

export default App;

