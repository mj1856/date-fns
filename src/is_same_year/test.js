var assert = require('power-assert')
var isSameYear = require('./')

describe('isSameYear', function() {
  it('returns true if given dates have same year', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2014, 8 /* Sep */, 25)
    )
    assert(result === true)
  })

  it('returns false if given dates have different years', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2),
      new Date(2013, 8 /* Sep */, 25)
    )
    assert(result === false)
  })

  it('accepts string', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2).toISOString(),
      new Date(2014, 8 /* Sep */, 25).toISOString()
    )
    assert(result === true)
  })

  it('accepts timestamp', function() {
    var result = isSameYear(
      new Date(2014, 8 /* Sep */, 2).getTime(),
      new Date(2014, 8 /* Sep */, 25).getTime()
    )
    assert(result === true)
  })
})

