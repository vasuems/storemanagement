const assert = require('assert');
const Order = require('../order');

describe('Create a new order object', () => {
  it('should return a new order object', () => {
    const order = new Order(
      'adsfhajksdhf2342',
      'store-abcdefghijklmn',
      '2018-11-11 11:11:00',
      '40s1cqdw6jmyyiixe',
      '2018-11-12 11:11:00',
      'Delivery address 1',
      'Billing address 1',
      '123123124',
      [],
      true
    );

    assert.equal(order instanceof Order, true);
  });
});
