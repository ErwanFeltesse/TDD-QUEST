const assert = require('assert');
const capitalizeFirst = require('../capitalizeFirst');



// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);
// Check that capitalizeFirst transforms javaScript rocks correctly
assert.strictEqual(capitalizeFirst('javaScript rocks'), 'JavaScript Rocks');
// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirst('javascript', 'Javascript'))
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');