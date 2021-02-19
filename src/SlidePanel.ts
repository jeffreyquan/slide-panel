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

    if (this.position) {
      this.setAnchorClass(this.position);
    }

    if (!this.open)  {
      const root = this._shadowRoot.querySelector(".slide-panel");
      root?.setAttribute("aria-hidden", "true")
      root?.setAttribute("hidden", "")
    }
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
    if (attrName === "open") {
       const root = this._shadowRoot.querySelector(".slide-panel");
      root?.setAttribute("aria-hidden", "false")
      root?.removeAttribute("hidden")
    }
  }

  get position() {
    return this.getAttribute("position");
  }

  getAnchorClass(position: string) {
    let className = "slide-panel__anchor";
    switch (position) {
      case "left":
        className += "--left";
        break;
      case "right":
        className += "--right";
        break;
      case "top":
        className += "--top";
        break;
      case "bottom":
        className += "--bottom";
        break;
      default:
        className += "--left";
    }

    return className;
  }

  setAnchorClass(position: string) {
    const className = this.getAnchorClass(position);
    const panel = this._shadowRoot.querySelector(".slide-panel__panel");
    panel?.classList.add(className);
  }

  get open() {
    return this.getAttribute("open") || false;
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