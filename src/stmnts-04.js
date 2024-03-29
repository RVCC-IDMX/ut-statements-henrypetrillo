/*
 * stmnts-04.js
 * Language: javascript
 * Test: tests/stmnts-04.test.js
 * Path: src/stmnts-04.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  // write your code here & return
  const celsius = (5 / 9) * (fahrenheit - 32);
  return Number(celsius.toFixed(2));
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  // write your code here & return
  const fahrenheit = (celsius * (9 / 5)) + 32;
  return Number(fahrenheit.toFixed(2));
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
