// test index construction
var assert = require('assert'),
    math = require('../../../index.js');

describe('index', function() {

  it('should create an index', function() {
    var index = math.index([2,6]);
    assert.ok(index instanceof math.type.Index);
    assert.deepEqual(index._ranges, [{start:2, end:6, step:1}]);

    var index2 = math.index([0,4], [5,2,-1]);
    assert.ok(index2 instanceof math.type.Index);
    assert.deepEqual(index2._ranges, [{start:0, end:4, step: 1}, {start:5, end: 2, step:-1}]);
  });

});