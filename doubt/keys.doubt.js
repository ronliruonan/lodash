import assert from 'assert';

import keys from '../keys';

// 怀疑起因：在keys()源码中区分了arrayLike
describe('keys', function() {
  it('keys() 与 Object.keys() 得到的数组集合 应该不相同', function () {
    (() => {
      const result1 = keys(arguments);
      const result2 = Object.keys(arguments);

      assert.notDeepEqual(result1, result2);
    })(1,3,5);
  });
});