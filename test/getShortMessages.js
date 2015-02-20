var assert = require('assert');
var sinon = require("sinon");
getShortMessages = require('../solution/getShortMessages.js');

var items = [
    {message: 'Lorem ipsu'},
    {message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo'},
    {message: 'Lorem ipsum dolor sit.'}
];


describe('getShortMessages()', function(){
    it('should return reject long messages function', function(){
        assert.deepEqual(getShortMessages(items),['Lorem ipsu','Lorem ipsum dolor sit.']);
    });

    it('if arguments array is empty function', function(){
        assert.deepEqual(getShortMessages([]),[]);
    });

});