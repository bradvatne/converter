import React, { Component } from 'react';
import './index.css';
import Input from './Input.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      
    }
  }

  render() {
    return (
      <div className="App">
      <h1>Binary, Decimal, Hex Converter</h1>
      <Input/>
      </div>
    );
  }
}

export default App;
