var assert = require('assert');
var sinon = require("sinon");
slice = require('../solution/slice.js');

describe('slice()', function(){
    it('function slice() start with parametr 0,4', function(){
        assert.deepEqual(slice(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'],0,4),
            ['Apple', 'Banana', 'Apple', 'Durian'])
    });
    it('function slice() start with parametr 1,2', function(){
        assert.deepEqual(slice(['Apple', 'Banana', 'Durian'],1,2),['Banana'])
    });
});