const assert = require('assert');
const skewered = require('../index.js');

describe('skewered', () => {
  it('works as expected', function() {
    const actual =
      "- (this),is.a+test-that*must:work;or&else#it%fails big/*/time  1'2'3 123--xyz----Möbius _";
    const expected =
      'this-is-a-test-that-must-work-or-else-it-fails-big-time-1-2-3-123-xyz-m-bius';
    assert.equal(skewered(actual), expected);
  });
});
