function makeDecimal(nonDecimalNumber){
  return Number(nonDecimalNumber.toFixed(1));
}

const convertToCelsius = function(tempInFahrenheit) {
  return makeDecimal((tempInFahrenheit - 32) * 5 / 9);
};

const convertToFahrenheit = function(tempInCelsius) {
  return makeDecimal(tempInCelsius * 9 / 5 + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
