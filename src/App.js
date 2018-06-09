import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//            .register('./service-worker.js')
//            .then(function() { console.log('Service Worker Registered'); });
// }

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/service-worker.js')
//     .then(function(registration) { console.log('Registration successful, scope is:', registration.scope);
//   })
//   .catch(function(error) {
//     console.log('Service worker registration failed, error:', error);
//   });
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>Jeffs Face</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
