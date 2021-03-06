var assert = require('power-assert')
var subMilliseconds = require('./')

describe('subMilliseconds', function() {
  it('subtracts given number of milliseconds', function() {
    var result = subMilliseconds(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750)
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 250))
  })

  it('accepts string', function() {
    var result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).toISOString(), 500
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500))
  })

  it('accepts timestamp', function() {
    var result = subMilliseconds(
      new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500
    )
    assert.deepEqual(result, new Date(2014, 6 /* Jul */, 10, 12, 45, 29, 500))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0)
    subMilliseconds(date, 250)
    assert.deepEqual(date, new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0))
  })
})

