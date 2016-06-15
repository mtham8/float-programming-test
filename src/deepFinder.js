'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */
module.exports = ( input, test ) => {
  let output = [];
  const recurse = (val) => {
    for (let i = 0; i < val.length; i++) {
      let currentVal = val[i];
      if (Array.isArray(currentVal)) {
        recurse(currentVal);
      }
      else if (typeof currentVal === 'object') {
        for (let k in currentVal) {
          if (test(currentVal[k])) {
            output.push(currentVal[k]);
          }
        }
      }
      else if (test(currentVal)) {
        output.push(currentVal);
      }
    }
  }
  recurse(input);
  return output;
};
