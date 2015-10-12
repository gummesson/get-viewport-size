/**
 * Dependencies
 */

var test = require('tape')
var viewportSize = require('../')

/**
 * Tests
 */

test('viewportSize()', function(t) {
  t.test('.height', function(assert) {
    var height = viewportSize().height
    assert.ok(height, height)
    assert.equal(typeof height, 'number')
    assert.end()
  })

  t.test('.width', function(assert) {
    var width = viewportSize().width
    assert.ok(width, width)
    assert.equal(typeof width, 'number')
    assert.end()
  })
})
