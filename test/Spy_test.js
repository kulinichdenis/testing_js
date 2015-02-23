var assert = require('assert');
spy_function = require('../solution/Spy_function.js');

var spyError = spy_function(console,'error');
console.error('error');
console.error('error');
console.error('error');

var obj = {method: function(){return 10;}};
var spyLog = spy_function(obj,'method');
obj.method();
obj.method();
obj.method();
obj.method();
obj.method();
obj.method();
obj.method();

describe('Function Spy()', function(){
    it('function spy_function waits third calls function console.error', function(){
        assert.equal(spyError.count, 3)
    });

    it('function spy_function waits seven calls function method()', function(){
        assert.equal(spyLog.count, 7)
    });
});