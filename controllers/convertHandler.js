/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

const { evaluate } = require("mathjs");

function ConvertHandler() {
  this.getNum = function(input) {
    if(!input){
      return "Invalid Number and Unit";
    }
    let splitting = input.split("");
    let result;

    let indicator = false;
    for (let i = splitting.length - 1; i >= 0; i--) {
      if (splitting[i] >= 0 && indicator === false) {
        result = splitting.splice(0, i + 1);
        indicator = true;
        result = result.join("");
      }
    }

    if (result == undefined) {
      result = 1;
    } else {
      result = evaluate(result);
    }

    if(result >= 1){
      return result
    }else{
      return "Invalid Number";
    }
  };

  this.getUnit = function(input) {
    if(!input){
      return "Invalid Number and Unit";
    }
    const acceptedUnits = ["l", "gal", "lbs", "mi", "km", "kg"];
    input = input.toLowerCase();
    let result;
    if (acceptedUnits.includes(input)) {
      result = input;
    } else {
      let splitting = input.split("");
      let indicator = false;
      for (let i = splitting.length - 1; i >= 0; i--) {
        if (splitting[i] >= 0 && indicator === false) {
          result = splitting.splice(i + 1, input.length);
          indicator = true;
        }
      }
      result = result.join("");
    }

    if (acceptedUnits.includes(result)) {
      return result;
    } else {
      return "Invalid Unit";
    }
  };

  this.getReturnUnit = function(initUnit) {
    initUnit.toLowerCase();

    const returnUnit = {
      gal: "l",
      l: "gal",
      lbs: "kg",
      kg: "lbs",
      mi: "km",
      km: "mi"
    };

    return returnUnit[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const unitSpellings = {
      gal: "gallons",
      l: "litres",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometres"
    };

    return unitSpellings[unit];
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }

    result = Number(result);
    return result.toFixed(5);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string:
        initNum +
        " " +
        this.spellOutUnit(initUnit) +
        " converts to " +
        returnNum +
        " " +
        this.spellOutUnit(returnUnit)
    };
    
    if (initNum && initUnit && returnNum && returnUnit) {
      result = result;
    }
    
    if (initNum == "Invalid Number") {
      result = {string : "Error in Number Provided!" };
    }
    
    if (initUnit == "Invalid Unit") {
       result = {string: "Error in Unit Provided!"};
    }
    
    if (initNum == "Invalid Number" && initUnit == "Invalid Unit") {
      result = {string : "Error in Number and Unit Provided!" };
    }
    
    if (initNum == "Invalid Number and Unit" && initUnit == "Invalid Number and Unit") {
      result = {string : "No Number and Unit Provided!" };
    }
    
    return result;
  };
}

module.exports = ConvertHandler;
