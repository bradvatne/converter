import React, { Component } from "react";
import Output from "./Output";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: " ",
      before: "binary",
      after: "binary",
      output: " "
    };
  }

  //Passed as a callback for setState when a radio button is clicked
  handleChange = () => {
    console.log("SUBMITTED");
    console.log("STATE ACTUALLY IS: " + this.state.after);

    // switch (this.state.before) {
    //   case "binary":
        switch (this.state.after) {

          case "decimal":
            console.log(this.state.after + "SHOULD BE: decimal");
            let newOutput = this.binaryToDecimal(this.state.input);
            this.setState({ output: newOutput });
            console.log(this.state.output + "<-- past state SHOULD BE: " + newOutput);
            break;

          case "hex":
            console.log(this.state.after + "SHOULD BE: hex");
            let hexValue = this.decimalToHex(
              this.binaryToDecimal(this.state.input));
            this.setState({ output: hexValue });
            console.log(this.state.output + "SHOULD BE: " + hexValue);
            break;
          
          case "binary":
          console.log(this.state.after + "SHOULD BE: binary");
          this.setState({ output: this.state.input });
          console.log(this.state.output + "SHOULD BE: " + newOutput);
          break;

          default:
          console.log('ruh roh');
            break;
        }
    //     break;
    //   default:
    //     return;
    // }
  };

  //-----------------Math-----------------//
  binaryToDecimal(value) {
    let binary = value;
    let length = binary.length - 1;
    let sum = 0;
    for (let i = length; i >= 0; i--) {
      binary[i] == 1 ? (sum += Math.pow(2, length - i)) : console.log("skip");
    }
    return sum;
  }

  decimalToHex(value) {
    let decimal = value;
    let result = "";
    let remainder = 0;
    console.log(decimal);
    while (decimal > 16) {
      remainder = decimal % 16;
      if (remainder != 0) {
        decimal = Math.floor(parseInt(decimal) / 16);
        result = this.convertToLetter(remainder) + result;
      }
      Math.floor(parseInt(decimal) / 16);
    }
    result = parseInt(decimal) + result;
    return result;
  }

  convertToLetter(number) {
    switch (number) {
      case 10:
        return "A";
      case 11:
        return "B";
      case 12:
        return "C";
      case 13:
        return "D";
      case 14:
        return "E";
      case 15:
        return "F";
      default:
        return number;
    }
  }
  //-----------------End-Math-----------------//


  //-----------------Render-----------------//
  render() {
    return (
      <div className="input-form">
        <form id="userInput">
          Binary
          <input
            type="radio"
            id="binary"
            value="binary"
            name="before"
            defaultChecked
            onChange={e => {
              this.setState({ before: e.target.value });
            }}
          />
          Decimal
          <input
            type="radio"
            id="decimal"
            value="decimal"
            name="before"
            onChange={e => {
              this.setState({ before: e.target.value });
            }}
          />
          Hex
          <input
            type="radio"
            id="hex"
            value="hex"
            name="before"
            onChange={e => {
              this.setState({ before: e.target.value });
            }}
          />
          <input
            type="text"
            id="userInput"
            value={this.state.input}
            onChange={e => {
              this.setState({ input: e.target.value });
            }}
          />
        </form>

        <form id="userInput" onSubmit={e => this.handleChange}>
          Binary
          <input
            type="radio"
            id="binary"
            value="binary"
            name="after"
            onChange={e =>
              this.setState({ after: e.target.value }, this.handleChange)
            }
          />
          Decimal
          <input
            type="radio"
            id="decimal"
            value="decimal"
            name="after"
            onChange={e =>
              this.setState({ after: e.target.value }, this.handleChange)
            }
          />
          Hex
          <input
            type="radio"
            id="hex"
            value="hex"
            name="after"
            onChange={e =>
              this.setState({ after: e.target.value }, this.handleChange)
            }
          />
          <input type="text" id="output" defaultValue={this.state.output} />
          <input type="submit" id="submit" />
        </form>
        <Output output={this.state.output} />
      </div>
    );
  }
}

export default Input;
