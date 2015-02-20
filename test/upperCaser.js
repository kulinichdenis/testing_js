var assert = require('assert'),
upperCaser = require('../solution/upperCasser.js');

describe('upperCaser', function() {
    it('returns uppercased text', function() {
        assert.equal(upperCaser('la'), 'LA')
    });
});