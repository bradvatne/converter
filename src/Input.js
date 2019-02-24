import React, { Component } from "react";
import Output from "./Output";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: " ",
      inputType: "binary",
      outputType: "binary"
    };
  }



  render() {

    return (
      <div className="text-center">
                <input
            type="text"
            required pattern="[0,1]"
            id="userInput"
            value={this.state.input}
            autoComplete="off"
            onChange={e => {
              this.setState({ input: e.target.value });
            }}
          />

        <form id="userInput">
          Binary
          <input
            type="radio"
            id="binary"
            value="binary"
            name="inputType"
            defaultChecked
            onChange={e => {
              this.setState({
                inputType: e.target.value,
                input: " "
              });
            }}
          />
          Decimal
          <input
            type="radio"
            id="decimal"
            value="decimal"
            name="inputType"
            onChange={e => {
              this.setState({ inputType: e.target.value, input: " " });
            }}
          />
          Hex
          <input
            type="radio"
            id="hex"
            value="hex"
            name="inputType"
            onChange={e => {
              this.setState({ inputType: e.target.value, input: " " });
            }}
          />
        </form>

        <form id="userInput">
          Binary
          <input
            type="radio"
            id="binary"
            value="binary"
            name="outputType"
            defaultChecked
            onChange={e => this.setState({ outputType: e.target.value })}
          />
          Decimal
          <input
            type="radio"
            id="decimal"
            value="decimal"
            name="outputType"
            onChange={e => this.setState({ outputType: e.target.value })}
          />
          Hex
          <input
            type="radio"
            id="hex"
            value="hex"
            name="outputType"
            onChange={e => this.setState({ outputType: e.target.value })}
          />
        </form>
        <Output
          input={this.state.input}
          inputType={this.state.inputType}
          outputType={this.state.outputType}
        />
      </div>
    );
  }
}

export default Input;
