/* eslint-disable no-undef */

// removed .js extension from below according to linter
const sum = require('./sum');

test(`adds 1 + 2 to equal 3`, () => {
  expect(sum(1, 2)).toBe(3);
});
