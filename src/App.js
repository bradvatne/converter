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
      <div className="container">
      <h1 className="text-center">Binary, Decimal, Hex Converter</h1>
      <Input/>
      </div>
    );
  }
}

export default App;
