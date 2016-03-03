var assert = require('assert');
var math = require('./math');
var chai = require('chai');
var expect = chai.expect;

describe('Array', function() {

  describe('#indexOf()', function () {

    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

  });

});


describe('Math', function() {

  describe('plus 1', function() {
    it('should return 5 when given 4', function(){
      // assert.equal(5, math.plusOne(4));
      expect(math.plusOne(4)).to.be.closeTo(4,6);
      expect(math.plusOne(4)).to.be.a('number');
      expect(math.plusOne(4)).to.be.a('string');

    });
  });

  describe('time 10', function() {
    it('should return 70 when given 7', function(){
      assert.equal(70, math.timesTen(7));
    });
  });

});
