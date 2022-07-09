const assert = require('chai').assert;
const app = require('../app');

describe('app', function(){
    it('app should print card', function(){
      assert.equal(app(), 'card');
    });
});