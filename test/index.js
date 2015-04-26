/**
 * Dependencies
 */

var test         = require('tape')
var viewportSize = require('../')

/**
 * Tests
 */

test('viewportSize', function(t) {
  t.test('.height', function(assert) {
    assert.notEqual(viewportSize.height, 0)
    assert.end()
  })

  t.test('.width', function(assert) {
    assert.notEqual(viewportSize.width, 0)
    assert.end()
  })

  t.end()
})
