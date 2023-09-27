import { h } from "../utilities/index.js"

class BaseElement extends HTMLElement {
  name = "Mindex Base Element"
  style = h`
    <style>
      :host {
        display: block;
      }
    </style>
  `
  html = h`
    ${ this.style }
    <h2>${ this.name }</h2>
    <slot></slot>
    <p>apsoidjosijioj o fso s</p>
  `
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.innerHTML = this.html
  }
}

customElements.define('mindex-base', BaseElement)