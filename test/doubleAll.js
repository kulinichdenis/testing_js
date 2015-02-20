var assert = require('assert');
var sinon = require("sinon");
doubleAll = require('../solution/doubleAll.js');

describe('doubleAll()', function(){
    it('normally use doubleAll function with array', function(){
        assert.deepEqual(doubleAll([2,2,2,2]),[4,4,4,4]);
    });
    it('if use function with empty array', function(){
        assert.deepEqual(doubleAll([]),[]);
    });
});