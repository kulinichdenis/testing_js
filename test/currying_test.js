var assert = require('assert');
var sinon = require("sinon");
curryN = require('../solution/Currying');

function add1(one) {
    return one*4;
}
function add3(one, two, three) {
    return one + two + three;
}

function strConcat(){
    var args = Array.prototype.slice.call(arguments);
    return Array.prototype.concat.apply([], args).join(" ");
}

describe('Currying()', function(){
    it('curryng with three arguments', function(){
        assert.equal(curryN(add3,3)(1)(2)(3),6);
    });
    it('curryng without arguments', function(){
        assert.equal(curryN(add1,1)(1), 4);
    });

    it('curryng with string arguments', function(){
        assert.equal(curryN(strConcat, 5)('This')('problem')('has')('been')('solved'), "This problem has been solved");
    });
});