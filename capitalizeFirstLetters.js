const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');


 
 

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// Check that capitalizeFirst transforms javaScript rocks correctly
assert.strictEqual(capitalizeFirstLetters('javascript rocks'), 'Javascript Rocks');
// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirstLetters('javascript', 'Javascript'))
// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');