export const binaryToDecimal = (value) => {
    
    let binary = value;
    let length = binary.length - 1;
    let sum = 0;
    for (let i = length; i >= 0; i--) {
      binary[i] == 1 ? (sum += Math.pow(2, length - i)) : console.log("skip");
    }
    return sum;
  }

export const decimalToHex = (value) => {

    let decimal = value;
    let result = "";
    let remainder = 0;
    console.log(decimal);
    while (decimal > 16) {
      remainder = decimal % 16;
      if (remainder != 0) {
        decimal = Math.floor(parseInt(decimal) / 16);
        result = convertToLetter(remainder) + result;
      }
      Math.floor(parseInt(decimal) / 16);
    }
    if (parseInt(decimal) > 9) {
      decimal = convertToLetter(decimal);
    }
    result = decimal + result;
    return result;
  }

  export const hexToDecimal = (value) => {
    let length = value.length - 1;
    let sum = 0;
    for (let i = length; i >= 0; i--) {
      sum += convertToNumber(value[i]) * Math.pow(16, length - i);
    }
    return sum;
  }

  export const decimalToBinary = (value) => {
      let decimal = value;
      let binary = "";
      while (decimal > 0) {
        if (decimal % 2 == 0){
            decimal/=2;
            binary = "0" + binary;
        } else {
            decimal = Math.floor(decimal/2)
            binary = "1" + binary;
      }
  }return binary;
}

  const convertToLetter = (number) => {
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

  const convertToNumber = (number) => {
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