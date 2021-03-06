var assert = require('power-assert')
var setQuarter = require('./')

describe('setQuarter', function() {
  it('sets quarter of year', function() {
    var result = setQuarter(new Date(2014, 6 /* Jul */, 2), 1)
    assert.deepEqual(result, new Date(2014, 0 /* Jan */, 2))
  })

  it('sets last day of month if original date was last day of longer month', function() {
    var result = setQuarter(new Date(2014, 10 /* Nov */, 30), 1)
    assert.deepEqual(result, new Date(2014, 1 /* Feb */, 28))
  })

  it('accepts string', function() {
    var result = setQuarter(new Date(2014, 6 /* Jul */, 1).toISOString(), 4)
    assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
  })

  it('accepts timestamp', function() {
    var result = setQuarter(new Date(2014, 6 /* Jul */, 1).getTime(), 4)
    assert.deepEqual(result, new Date(2014, 9 /* Oct */, 1))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 1)
    setQuarter(date, 2)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 1))
  })
})

