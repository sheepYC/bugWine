import React, { Component } from 'react';
import './App.css';
import Nav from './Components/nav.js'

class App extends Component {
  render() {
    return (
      <div>
      {this.props.children}
        <div className="bottom_home"></div>
        <Nav></Nav>
      </div>
    );
  }
}

export default App;
