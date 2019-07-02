// see https://github.com/yoshuawuyts/observe-resize

// Event docs: https://developer.mozilla.org/en-US/docs/Web/Events/resize

// var observeResize = require('observe-resize')
// var html = require('bel')

// var el = html`<div>hello planet</div>`
// document.body.appendChild(el)

// // observers should only be added _after_ the element is rendered on the DOM,
// // else it displeases the browser emperors and they _will_ warn you
// var stop = observeResize(el, function () {
//   console.log('resized')
//   stop()
// })

module.exports = require('observe-resize')
