import React, { Component } from "react";
import "./index.css";
import Input from "./Input.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: 'binary'
    };
  }

  
  render() {
    return (
      <div className="container text-align-center">
      <div style={{width: "1024px"}} className="card text-center">
        <div className="card-header container">
        <h1>Binary, Decimal, Hex Conversion Tool</h1>
          <ul className="nav nav-tabs card-header-tabs col">
            <li className="nav-item">
              <a className="nav-link active">
                Binary
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Decimal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Hex
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Enter a Binary umber</h5>
          <input style={{width: "40%"}} type="text" className="form-control mx-auto"/>
          <a className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
