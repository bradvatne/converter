/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./index.css";
import Output from "./Output.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: "binary",
      input: ""
    };
  }

  handleClick = e => {
    console.log(e)
    this.setState({inputType: e.target.value.toLowerCase()})
  };

  handleChange = input => {
    this.setState({input: input})
  }

  render() {
    const categories = ["Binary", "Decimal", "Hex"];
    return (
      <div className="container text-align-center">
        <div className="card text-center m-2 shadow">
          <div className="card-header container">
            <h3>Binary, Decimal, and Hex Conversion Tool</h3>
            <ul className="nav nav-tabs card-header-tabs col">
              {categories.map(category => {
                return (
                  <li key={category} className="nav-item">
                    <button
                      value={category}
                      className={
                        category.toLowerCase() == this.state.inputType
                          ? "nav-link btn btn-link active"
                          : "nav-link btn btn-link"
                      }
                      onClick={(e) => this.handleClick(e)}
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="card-body">
          <Output input={this.state.input} inputType={this.state.inputType} outputType={this.state.outputType} handleChange={this.handleChange}/>
        </div>
        <div className="card-header">
          <a href="https://github.com/notbrad/converter" target="blank"><div className="text-right">Github Link</div></a>
          <div className="text-right">Made by Brad Vatne</div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
