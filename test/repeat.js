var assert = require('assert');
var sinon = require("sinon");
repeat = require('../solution/repeat.js');
// test
// test
describe('repeat()', function(){
    it('should repeat function', function(){
        var spy = sinon.spy();


        repeat(spy, 5);
        //
        assert.equal(spy.callCount,5);
    });
});