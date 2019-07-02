var Nanocomponent = require('nanocomponent')
var html = require('nanohtml')

// lifecycle events can optionally be imported
// and registered in Component.beforerender()
// var on = require('./on')

class Component extends Nanocomponent {
  constructor () {
    super()
    this.text = ''
  }

  // _Must be implemented._ Component specific render function.
  // Optionally cache argument values here. Run anything here that needs
  // to run alongside node rendering. Must return a DOMNode. Use beforerender
  // to run code after createElement when the component is unmounted.
  // Previously named _render. Arguments passed to render are passed to
  // createElement. Elements returned from createElement must always return
  // the same root node type.
  createElement (text) {
    this.text = text
    return html`<h1>${text}</h1>`
  }

  // _Must be implemented._ Return a boolean to determine if
  // prototype.createElement() should be called. The update method is
  // analogous to React's shouldComponentUpdate. Called only when the
  // component is mounted in the DOM tree. Arguments passed to render
  // are passed to update.
  update (text) {
    if (text !== this.text) {
      this.text = text
      this.element.innerText = this.text   // Directly update the element
    }
    return false                           // Don't call createElement again
  }

  // A function called right after createElement returns with el, but before
  // the fully rendered element is returned to the render caller. Run any first
  // render hooks here. The load and unload hooks are added at this stage. Do
  // not attempt to rerender in beforerender as the component may not be in the
  // DOM yet.
  beforerender (el) {
    console.log('Component is about to be rendered for the first time')

    // this is where you can register other lifecycle events:
    // on.resize()
    // on.ready()
    // on.intersect()
    // on.idle()
  }

  // Called when the component is mounted on the DOM.
  // Uses on-load under the hood.
  load (el) {
    console.log('Component was mounted on the DOM')
  }

  // Called when the component is removed from the DOM. 
  unload (text) {
    console.log('Component was unmounted from the DOM')
  }

  // Called after a mounted component updates (e.g. update returns true).
  // You can use this hook to call element.scrollIntoView or other
  // dom methods on the mounted component.
  afterupdate (el) {
    console.log('Component was updated')
  }

  // Called after a component is re-ordered. This method is rarely needed,
  // but is handy when you have a component that is sensitive to temorary
  // removals from the DOM, such as externally controlled iframes or embeds
  // (e.g. embedded tweets)
  afterreorder (el) {
    console.log('Component moved in the DOM')
  }
}