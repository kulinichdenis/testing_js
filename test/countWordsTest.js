var assert = require('assert');
var sinon = require("sinon");
countWords = require('../solution/countWords.js');


describe('countWords()', function(){
    it('function countWords() return object the number of times each string', function(){
        assert.deepEqual(countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']),
        { Apple: 2,Banana: 1, Durian: 3})
    });
    it('function countWords() without repeat elements', function(){
        assert.deepEqual(countWords(['Apple', 'Banana', 'Durian']),
            { Apple: 1,Banana: 1, Durian: 1})
    });
//    it('function countWords() without repeat elements', function(){
//        assert.deepEqual(countWords([]), [])
//    });
});