'use strict';

/*
 * finder
 *
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let currentVal = input[i]
    if(test(currentVal) && typeof currentVal !== 'object') {
      output.push(currentVal);
    }
  }
  return output;
};
