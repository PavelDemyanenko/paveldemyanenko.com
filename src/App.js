import React, { Component } from 'react';
import Header from './layout/Header';
import Main from './layout/Main';
import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
