const assert = require('assert');
const { User } = require('../user');

describe('Create a new user object', () => {
  it('should return a new user object', () => {
    const user = new User(
      'abcdefg',
      'John Doe',
      'john.doe@example.com',
      'abcdefghijklmn',
      'opqrstuvwxyz',
      '2018-11-11 20:29:00',
      'user'
    );
    
    assert.equal(user instanceof User, true);
  });
});