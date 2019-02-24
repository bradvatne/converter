/* eslint-disable default-case */
import React from 'react';
import { binaryToDecimal, decimalToHex, hexToDecimal, decimalToBinary} from './Logic.js';

export default function Output(props) {

    const doMath = () => {

    if (props.inputType === 'binary') {

        switch (props.outputType) {
          case "binary":
            return props.input;
          case "decimal":
            return binaryToDecimal(props.input);
          case "hex":
            return decimalToHex(binaryToDecimal(props.input));
          default:
            break;
        }
      }
  
      else if (props.inputType === 'decimal') {
        switch (props.outputType) {
          case 'binary':
          return decimalToBinary(props.input);
          case "decimal":
          return props.input;
          case "hex":
          return hexToDecimal(props.input);
        }
      }
  
      else if (props.inputType === "hex"){
        switch (props.outputType) {
          case "binary":
            return decimalToBinary(hexToDecimal(props.input));
          case "decimal":
            return hexToDecimal(props.input);
          case "hex":
            return props.input;
        }
      }
    }
    
    return (
      <h2>{props.input== " " ? "Enter a value" : doMath()}</h2>
        
    )
}