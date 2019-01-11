function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, type) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = type === 'f' ? toCelsius(temperature) : toFahrenheit(temperature);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
export {
  tryConvert
}