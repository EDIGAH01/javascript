import * as assert from 'assert/strict';

assert.equal(true && false, false); //And
assert.equal(true || false, true); // Or

//Operaters for numbers
assert.equal(3 + 4, 7); //Add
assert.equal(5 - 1, 4); // Subtruction
assert,equal(3 * 4, 12); // Multiplication
assert.equal(10 / 4, 2.5);// Division

// Operators for bigints
assert.equal(3n + 4n, 7n);
assert.equal(5n - 1n, 4n);
assert.equal(3n * 4n, 12n);
assert.equal(10n / 4n, 2n);

// Operators for strigs
assert.equal('a' + 'b', 'ab'); // Concatenation
assert.equal('I see ' + 3 + ' monkeys', 'Isee 3 monkeys');

//Comparison operators
assert.equal(3 < 4, true);// Greater than
assert.equal(3 <= 4, true); // greater than or equal to
assert.equal('abc' === 'abc', true); // equal to
assert.equal('abc' !== 'def', true); // not equal to
