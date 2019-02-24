/* eslint-disable default-case */
import React, { Fragment } from "react";
import {
  binaryToDecimal,
  decimalToHex,
  hexToDecimal,
  decimalToBinary
} from "./Logic.js";

export default function Output(props) {
  const outputTypes = ["Binary", "Decimal", "Hex"];

  const doMath = outputType => {
    if (props.input == '') return 0;

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
    <div className="container" style={{ width: "50%" }}>
      <div className="row">
        <input
          type="text"
          value={props.input}
          className="form-control m-3"
          placeholder={"Enter a " + props.inputType + " value"}
          onChange={event => props.handleChange(event.target.value)}
        />
      </div>
        <div className="card">
          <div className="card-header">Binary Value</div>
          <div className="card-body">{doMath("binary")}</div>
        </div>
        <div className="card">
          <div className="card-header">Decimal Value</div>
          <div className="card-body">{doMath("decimal")}</div>
        </div>        <div className="card">
          <div className="card-header">Hex Value</div>
          <div className="card-body">{doMath("hex")}</div>
        </div>
        <br/>
      </div>
  );
}
