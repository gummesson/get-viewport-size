/**
 * Dependencies
 */

var win  = window
var doc  = document
var body = doc.body
var elem = doc.documentElement

/**
 * Get the height of the viewport.
 *
 * @return {integer}
 *
 * @api public
 */

function getHeight() {
  return win.innerHeight || elem.clientHeight || body.clientHeight
}

/**
 * Get the width of the viewport.
 *
 * @return {integer}
 *
 * @api public
 */

function getWidth() {
  return win.innerWidth || elem.clientWidth || body.clientWidth
}

/**
 * Exports
 */

module.exports = {
  height: getHeight(),
  width: getWidth()
}