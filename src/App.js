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
        <div style={{ maxWidth: "1024px" }} className="card text-center">
          <div className="card-header container">
            <h1>Binary, Decimal, and Hex Conversion Tool</h1>
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
          <div className="card-body" />
          <Output input={this.state.input} inputType={this.state.inputType} outputType={this.state.outputType} handleChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}

export default App;
