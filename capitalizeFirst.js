// capitalizeFirst.js
const assert = require('assert');

function capitalizeFirst(input) {
    return input.length > 0
      ? input[0].toUpperCase() + input.slice(1)
      : '';
  }

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirst('javaScript'), 'JavaScript');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');

module.exports = capitalizeFirst;