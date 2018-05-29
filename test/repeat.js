var assert = require('assert');
var sinon = require("sinon");
repeat = require('../solution/repeat.js');

describe('repeat()', function(){
    it('should repeat function', function(){
        var spy = sinon.spy();
        repeat(spy, 5);
        // test
        assert.equal(spy.callCount,5);
    });
});

// test
// tesr