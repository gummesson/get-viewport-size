/**
 * Get the height of the viewport.
 *
 * @return {Integer}
 */

function getHeight() {
  return window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight
}

/**
 * Get the width of the viewport.
 *
 * @return {Integer}
 */

function getWidth() {
  return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
}

/**
 * Get the size of the viewport.
 *
 * @return {Object.<Number>}
 */

function viewportSize() {
  return {
    height: getHeight(),
    width: getWidth()
  }
}

/**
 * Exports
 */

module.exports = viewportSize
