/* eslint-disable default-case */
import React from "react";
import {
  binaryToDecimal,
  decimalToHex,
  hexToDecimal,
  decimalToBinary
} from "./Logic.js";

export default function Output(props) {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const twoComplement = () => {
    if (props.input == "") return 0;
    let input = props.input;
    let type = props.inputType;
    if (type == "hex") input = decimalToBinary(hexToDecimal(input));
    let length = input.length - 1;
    let output = [];

    for (let i = length; i >= 0; i--) {
      input[i] == 0 ? output.unshift(1) : output.unshift(0);
    }
    for (let j = length; j >= 0; j--) {
      if (output[j] == 0) {
        output[j] = 1;
        if (type == 'hex') output = decimalToHex(binaryToDecimal(output));
        return output.toString().replace(/,/g, "");
      } else {
        output[j] = 0;
      }
    }
    if (type == 'hex') output = decimalToHex(binaryToDecimal(output));
    return output.toString().replace(/,/g, "");
  };

  const doMath = outputType => {
    if (props.input == "") return 0;

    if (props.inputType === "binary") {
      switch (outputType) {
        case "binary":
          return props.input;
        case "decimal":
          return binaryToDecimal(props.input);
        case "hex":
          return decimalToHex(binaryToDecimal(props.input));
        default:
          break;
      }
    } else if (props.inputType === "decimal") {
      switch (outputType) {
        case "binary":
          return decimalToBinary(props.input);
        case "decimal":
          return props.input;
        case "hex":
          return hexToDecimal(props.input);
      }
    } else if (props.inputType === "hex") {
      switch (outputType) {
        case "binary":
          return decimalToBinary(hexToDecimal(props.input));
        case "decimal":
          return hexToDecimal(props.input);
        case "hex":
          return props.input;
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          value={props.input}
          className="form-control m-3"
          placeholder={"Enter a " + props.inputType + " value"}
          onChange={event => props.handleChange(event.target.value)}
        />
      </div>
      <div className="card shadow-sm">
        <div className="card-header">Binary Value</div>
        <div className="card-body">{doMath("binary")}</div>
      </div>
      <br />
      <div className="card shadow-sm">
        <div className="card-header">Decimal Value</div>
        <div className="card-body">{doMath("decimal")}</div>
      </div>
      <br />
      <div className="card shadow-sm">
        <div className="card-header">Hex Value</div>
        <div className="card-body">{doMath("hex")}</div>
      </div>
      <br />
      <div className="card shadow-sm">
        <div className="card-header">
          2's Complement of {capitalizeFirstLetter(props.inputType)} Value
        </div>
        <div className="card-body">{twoComplement()}</div>
      </div>
      <br />
    </div>
  );
}
