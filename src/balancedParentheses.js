'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = ( input ) => {
  let stack = [];
  let counter = 0;
  for (let i in input) {
    if (input[i] === '(') {
      stack.push(input[i]);
      counter++;
    }
    if (input[i] === ')') {
      stack.pop();
    }
  }
  if (counter === 0) {
    return false;
  } else {
    return stack.length === 0;
  }
};
