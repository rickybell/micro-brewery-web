// import React from 'react';
import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import Main from './components/Main'


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}
export default App;
