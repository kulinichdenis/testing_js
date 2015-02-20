var assert = require('assert');
var sinon = require("sinon");
map = require('../solution/map_with_reduce');


describe('map() on reduce()', function(){

    it('function map() start with array and callback function that multiplies', function(){
        assert.deepEqual(map([1,2,3,4,5], function(a){return a*10}),[10,20,30,40,50]);
    });
    it('function map() start with array and callback function that deducts', function(){
        assert.deepEqual(map([1,2,3,4,5], function(a){return 10-a}),[9,8,7,6,5])
    });
    it('function map() start with array has one elements and callback function that deducts', function(){
        assert.deepEqual(map([10], function(a){return 10-a}),[0])
    });

});