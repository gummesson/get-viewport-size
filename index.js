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
 * Exports
 */

module.exports = {
  height: getHeight(),
  width: getWidth()
}
