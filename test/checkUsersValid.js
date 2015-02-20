var assert = require('assert');
var sinon = require("sinon");
checkUsersValid = require('../solution/checkUsersValid.js');

var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]

var testAllValid = checkUsersValid(goodUsers);

describe('checkUsersValid()', function(){
    it('checkUsersValid function return true', function(){
        assert.equal(testAllValid([
            { id: 2 },
            { id: 1 }
        ]), true);
    });
    it('checkUsersValid function return false', function(){
        assert.equal(testAllValid([{ id: 2 },
            { id: 4 },
            { id: 1 }
        ]), false);
    });
});