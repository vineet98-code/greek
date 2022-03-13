const expect = require('chai').expect;
const assert = require('assert');


// Cost and Consumption calculations functions
const calculate_for_allot_water = require('../fn_allot_water')
const calculate_for_add_guests = require('../fn_add_guest')


describe('fn_allot_water.js test', () => {
  describe('calculate_for_allot_water() Test', (consumption,cost) => {
    it('should equal to consumption = 900 round(cost) = 1200', () => {
      [consumption, cost] = calculate_for_allot_water(2, 0.5)
      assert.equal(consumption, 900)
      assert.equal(cost, 1200)
    });
    it('should equal to consumption = 1500 round(cost) = 1750', () => {
      [consumption, cost]  = calculate_for_allot_water(3, 2.0)
       assert.equal(consumption, 1500)
       assert.equal(cost, 1750)
    });
  })
  
})


describe('fn_add_guest.js test', () => {
  describe('calculate_for_add_guests() Test', (consumption,cost) => {
    it('should equal to consumption = 1500 cost = 4000', () => {
      [consumption, cost] = calculate_for_add_guests(5);
      assert.equal(consumption, 1500);
      assert.equal(cost, 4000);
    });
    it('should equal to consumption = 300 round(cost) = 600', () => {
      [consumption, cost] = calculate_for_add_guests(1);
     assert.equal(consumption, 300);
     assert.equal(cost, 600);
    });
  })
  
})



