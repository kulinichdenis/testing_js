var assert = require('assert');
var sinon = require("sinon");
reduce = require('../solution/reduce.js');

describe('reduce()', function(){
    it('start function reduce with array and start element ', function(){
        assert.equal(reduce([1,2,3], function(prev, curr) {
            return prev + curr;
        }, 6), 12)
    });
    it('start function reduce with array and start element equal 0 and callback implements subtraction', function(){
        assert.equal(reduce([1,2,3], function(prev, curr) {
            return prev - curr;
        }, 6), 0)
    });
    it('start function reduce with empty array', function(){
        assert.deepEqual(reduce([], function(prev, curr) {
            return prev + curr;
        }, 6), [])
    });
});
