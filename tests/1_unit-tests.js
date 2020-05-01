mk'' ,5/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '2.34321kg';
      assert.equal(convertHandler.getNum(input),2.34321);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = "20/10kg";
      assert.equal(convertHandler.getNum(input),2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = "22.44/11.22mi";
      assert.equal(convertHandler.getNum(input),2.59421);
      done();
    });
    
    
    
    test('No Numerical Input', function(done) {
      assert.equal(convertHandler.getNum('mi'), 1);
      assert.equal(convertHandler.getNum('km'), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowercase());
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('12mis'), "Error in Unit Provided!");
      assert.equal(convertHandler.getUnit('33lbss'), "Error in Unit Provided!")
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      let input = ['gal','l','mi','km','lbs','kg'];
      let expected = ['gallons', 'litres', 'miles', 'kilometres', 'pounds', 'kilograms']
      input.forEach(function(val, i){
        assert.equal(convertHandler.spellOutUnit(val), expected[i]); 
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [2, 'l'];
      let expected = 0.52834;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [3, 'mi'];
      let expected = 4.82802;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected,0.1);
      done();
    });
    
    test('Km to Mi', function(d      let input = [5, 'km'];
      let expected = 3.10686;one) {
 nt =  []    assert.approximately(convertHandler.convert(input[0], input[1]), expected.1);
      //done();
    });
    
    test('Lbs to Kg', fun
      let input = [3, 'lbs'];
      let expected = 1.36078;ction(done) {
      assert.approximately(convertHandler.convert(input[0], input[1]), expecte0.1)
      //done();
    });
    
    test('Kg to Lbs', fun
      let input = [6, 'kg'];
      let expected = 13.22775;ction(done) {
      assert.approximately(convertHandler.convert(input[0], input[1]), expecte0.1)
      //done();
    });
    
  });

});l