import { h } from "../utilities/index.js"

class CardElement extends HTMLElement {
  name = "Card"

  constructor() {
    super()
    const s = this.attachShadow({ mode: 'open' })
    const elmStyle = document.createElement('style')
    const elmDiv = document.createElement('div')

    elmStyle.textContent = h`
      :host {
        display: block;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        width: 100%;
      }
      :host([hidden]) {
        display: none;
      }
      
      slot[name=header] {
        display: block;
        border-bottom: 1px solid black;
      }
      
      slot[name=footer] {
        display: block;
        border-top: 1px solid black;
      }    
    `

    elmDiv.innerHTML = h`
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    `

    s.appendChild(elmStyle)
    s.appendChild(elmDiv)

  }
}

customElements.define('mindex-card', CardElement)
