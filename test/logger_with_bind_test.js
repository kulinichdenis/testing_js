var assert = require('assert');
var sinon = require("sinon");
logger = require('../solution/logger');

var loggerInfo = logger('INFO:');
var loggerWar = logger('WARN:');

describe('logger() with bind', function(){

    it('function logger() where inner function loggerInfo start with one argument', function(){
        assert.deepEqual(loggerInfo('this is an info message'),console.log('INFO: this is an info message'));
    });
    it('function logger() where inner function loggerInfo start without arguments', function(){
        assert.deepEqual(loggerInfo(),console.log('INFO:'))
    });
    it('function logger() where inner function loggerWar start two arguments', function(){
        assert.deepEqual(loggerWar('this is a warning message', 'with more info'),
            console.log('WARN: this is a warning message with more info'))
    });

});