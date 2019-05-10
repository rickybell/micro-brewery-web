// import React from 'react';
import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import Main from './components/Main'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  // callAPI() {
  //   fetch("http://localhost:9000/index")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }
  // componentWillMount() {
  //   this.callAPI();
  // }
  render() {
    return (
      <div className="App">
        <Main />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.state.apiResponse}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
