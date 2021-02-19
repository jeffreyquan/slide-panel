import style from "./style.css";
import template from "./template.html";

const slidePanelTemplate = document.createElement("template");

slidePanelTemplate.innerHTML = `
<style>${style}</style>
${template}
`
class SlidePanel extends HTMLElement {
  private _shadowRoot: ShadowRoot;

  [key: string]: any;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._shadowRoot.appendChild(slidePanelTemplate.content.cloneNode(true)); 
  }

  connectedCallback() {
  
  }

  _upgradeProperty(prop: string) {
  if (this.hasOwnProperty(prop)) {
    let value = this[prop];
    delete this[prop];
    this[prop] = value;
  }
}

  static get observedAttributes() {
    return ["open", "position"];
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {
  
  }

  get open() {
    return this.getAttribute("open");
  }

  attachEventListeners() {
  
  } 
}

window.customElements.define("slide-panel", SlidePanel);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "slide-panel": any;
    }
  }
}