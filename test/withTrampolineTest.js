var assert = require('assert');
var sinon = require("sinon");
repeat = require('../solution/withTrampoline.js');

describe('repeat() with trampoline start 10000', function() {
    it('should repeat function realize trampoline start 1000000', function() {
        var spy = sinon.spy();
        repeat(spy, 10000);
        assert.equal(spy.callCount, 10000);
//        (1793ms) время выполнения
    });
});
