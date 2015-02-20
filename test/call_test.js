var assert = require('assert');
var sinon = require("sinon");
duckCount = require('../solution/call.js');

var notDuck = Object.create({quack: true})
var duck = {quack: true}
var duck1 = {quack: true, test: true, test2:true}


describe('duckCount()', function(){
    it('function duckCount() with duck and notduck', function(){
        assert.equal(duckCount(notDuck,duck,duck1,duck,notDuck, duck),4);
    });

    it('function duckCount() with only notduck', function(){
        assert.equal(duckCount(notDuck),0);
    });
    it('function duckCount() with only duck', function(){
        assert.equal(duckCount(duck1),1);
    });
});
