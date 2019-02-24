/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import React, { Component } from "react";
import Output from "./Output";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: " ",
      inputType: "binary",
      outputType: "binary",
      output: " "
    };
  }

  doMath = () => {

    if (this.state.inputType === 'binary') {
        switch (this.state.outputType) {
          case "binary":
            return this.state.input;
          case "decimal":
            return this.binaryToDecimal(this.state.input);
          case "hex":
            return this.decimalToHex(this.binaryToDecimal(this.state.input));
          default:
            break;
        }
      }

      else if (this.state.inputType === 'decimal') {
        switch (this.state.outputType) {
          case 'binary':
          return this.decimalToBinary(this.state.input);
          case "decimal":
          return this.state.input;
          case "hex":
          return this.state.hexToDecimal(this.state.input);
        }
      }

      else if (this.state.inputType === "hex"){
        switch (this.state.outputType) {
          case "binary":
            break;
          case "decimal":
            break;
          case "hex":
            break;
        }
      }
    }

  handleOutputChange = () => {
    let newState = this.doMath()
    this.setState({output: newState})

    // let inputType = this.state.inputType;
    // let input = this.state.input;

    // switch (this.state.outputType) {
    //   case "decimal":
    //     let newOutput = this.binaryToDecimal(this.state.input);
    //     this.setState({ output: newOutput });
    //     break;
    //   case "hex":
    //     let hexValue = this.decimalToHex(
    //       this.binaryToDecimal(this.state.input)
    //     );
    //     this.setState({ output: hexValue });
    //     break;
    //   case "binary":
    //     this.setState({ output: this.state.input });
    //     break;
    //   default:
    //     break;
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
    if (parseInt(decimal) > 9) {
      decimal = this.convertToLetter(decimal);
    }
    result = decimal + result;
    return result;
  }

  hexToDecimal(value) {
    let length = value.length - 1;
    let sum = 0;
    for (let i = length; i >= 0; i--) {
      sum += this.convertToNumber(value[i]) * Math.pow(16, length - i);
    }
    return sum;
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

  convertToNumber(number) {
    switch (number) {
      case "A":
        return 10;
      case "B":
        return 11;
      case "C":
        return 12;
      case "D":
        return 13;
      case "E":
        return 14;
      case "F":
        return 15;
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
            name="inputType"
            defaultChecked
            onChange={e => {
              this.setState({ inputType: e.target.value });
            }}
          />
          Decimal
          <input
            type="radio"
            id="decimal"
            value="decimal"
            name="inputType"
            onChange={e => {
              this.setState({ inputType: e.target.value });
            }}
          />
          Hex
          <input
            type="radio"
            id="hex"
            value="hex"
            name="inputType"
            onChange={e => {
              this.setState({ inputType: e.target.value });
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

        <form id="userInput" onSubmit={e => this.handleOutputChange}>
          Binary
          <input
            type="radio"
            id="binary"
            value="binary"
            name="outputType"
            defaultChecked
            onChange={e =>
              this.setState(
                { outputType: e.target.value },
                this.handleOutputChange
              )
            }
          />
          Decimal
          <input
            type="radio"
            id="decimal"
            value="decimal"
            name="outputType"
            onChange={e =>
              this.setState(
                { outputType: e.target.value },
                this.handleOutputChange
              )
            }
          />
          Hex
          <input
            type="radio"
            id="hex"
            value="hex"
            name="outputType"
            onChange={e =>
              this.setState(
                { outputType: e.target.value },
                this.handleOutputChange
              )
            }
          />
          <input type="text" id="output" defaultValue={this.state.output} />
        </form>
        <Output output={this.state.output} />
      </div>
    );
  }
}

export default Input;
