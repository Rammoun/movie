import React, { Component } from 'react';
import logo from './logo.svg';
import Movie from './Movie/Movie';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">        
        <Movie/>
      </div>
    );
  }
}

export default App;
