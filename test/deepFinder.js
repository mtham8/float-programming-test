'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with d', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'dog' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^d/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'dog' ], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with c', t => {
    const input = [ 'cat', 'char', { foo: 'candy' }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^c/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'cat', 'char', 'candy' ], 'result is correct' );
    t.end();
} );
