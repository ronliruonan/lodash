import assert from 'assert';

import keys from '../keys';
import getAllKeys from '.././.internal/getAllKeys'

// 怀疑起因：在keys()源码中区分了arrayLike
describe('keys() vs Object.keys(): arguments', function() {
  it('2者集合子项 应该相同【推断】', function () {
    (() => {
      const result1 = keys(arguments);
      const result2 = Object.keys(arguments);

      assert.deepEqual(result1, result2);
    })(1,3,5);
  });
});

describe('Object.keys() vs getAllKeys(): Symbol', function() {
  it('2者集合子项 应该不相同', function () {
    const obj = Object.create(null);
    const unikey = Symbol('a');
    obj[unikey] = 100;

    const result2 = Object.keys(obj);
    const result3 = getAllKeys(obj);

    assert.notDeepEqual(result3, result2)
  });
});