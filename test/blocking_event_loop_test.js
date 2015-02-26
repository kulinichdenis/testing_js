var assert = require('assert');
var sinon = require("sinon");
repeat = require('../solution/blocking_event_loop.js');

describe('repeat()', function() {
    var count = 0;
    var cycles = 1000;

    function operation() {
        for(var i = 0; i < 1000; i++) {
        };
        count++;
    }

    it('should be interrupted', function(done) {
        var start = Date.now();

        repeat(operation, cycles);

        setTimeout(function() {
            var end = Date.now();

            if (count === cycles) done('Fail');
            if (end - start < 1500) {
                done();
            } else {
                done('Interrupted too late.')
            }
        }, 1000);
    })
});



//describe('repeat()', function(){
//    it('function repat()', function(){
//        assert.deepEqual(slice(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'],0,4),
//            ['Apple', 'Banana', 'Apple', 'Durian'])
//    });
//    it('function slice() start with parametr 1,2', function(){
//        assert.deepEqual(slice(['Apple', 'Banana', 'Durian'],1,2),['Banana'])
//    });
//});