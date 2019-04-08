import React, { Component } from 'react';
import './App.css';
import SelectorContainer from './components/SelectorContainer';

class App extends Component {

  render() {
    return (
        <div className="App">
          <div>
            <h1>Computer models</h1>
            <SelectorContainer />
          </div>
        </div>
    )
  }
}

export default App
