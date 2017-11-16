import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AlertTest from './components/alert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div className="container">
            <div className="row">
              <AlertTest />
            </div>
          </div>
        </header>
        <p className="App-intro">
          Hello!!! To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
