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
    this.attachEventListeners();
    if (this.position) {
      this.setAnchorClass(this.position);
    }

    this._upgradeProperty("open");
    this._upgradeProperty("transitionDuration");
    this._upgradeProperty("position");

    const backdrop = this.getBackdrop();
    if (backdrop) {
      backdrop.style.transitionDuration = this.transitionDuration + "ms";
    }

    const panel = this.getPanel();
    if (panel) {
      console.log(panel);
      console.log(this.transitionDuration);
      panel.style.transitionDuration = this.transitionDuration + "ms";
    }

    if (!this.open) {
      this.hideRoot();
      this.hideBackdrop();
      this.hidePanel();
    }
  }

  getRoot() {
    return this._shadowRoot.querySelector<HTMLElement>(".slide-panel");
  }

  getBackdrop() {
    return this._shadowRoot.querySelector<HTMLElement>(".slide-panel__backdrop");
  };

  hideBackdrop() {
    const backdrop = this.getBackdrop();
    if (backdrop) {
      backdrop.style.visibility = "hidden";
    }
  }

  showBackdrop() {
    const backdrop = this.getBackdrop();
    if (backdrop) {
      backdrop.style.opacity = "1";
      backdrop.style.removeProperty("visibility");
    }
  }

  hideRoot() {
    const root = this.getRoot();
    root?.setAttribute("aria-hidden", "true");
    if (root) {
      setTimeout(() => {
        root.style.visibility = "hidden";
      }, parseInt(this.transitionDuration))
    }
  }
  
  showRoot() {
    const root = this.getRoot();
    root?.setAttribute("aria-hidden", "false");
    if (root) {
      root.style.removeProperty("visibility");
    }
  }

  hidePanel() {
    const panel = this.getPanel();
    if (panel) {
      panel.style.removeProperty("transform");
      setTimeout(() => {
        panel.style.visibility = "hidden";
      }, parseInt(this.transitionDuration));
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
    console.log({
        attrName,
        oldVal,
        newVal
    })

    if (attrName === "open" && oldVal !== newVal) {
      if (newVal !== null) {
        console.log("open panel");
        this.showRoot();
        this.showBackdrop();
        this.showPanel();
        this.attachEventListeners();
      } else {
        this.hideRoot();
        this.hideBackdrop();
        this.hidePanel();
      }
    }

    if (attrName === "position") {
      this.removeAnchorClass(oldVal);
      this.setAnchorClass(newVal);
    }
  }

  get position() {
    return this.getAttribute("position");
  }

  getAnchorClass(position: string) {
    let className = "slide-panel__panel";
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

  removeAnchorClass(position: string) {
    const className = this.getAnchorClass(position);
    const panel = this.getPanel();
    panel?.classList.remove(className);
  }

  setAnchorClass(position: string) {
    const className = this.getAnchorClass(position);
    const panel = this.getPanel();
    panel?.classList.add(className);
  }

  get open() {
    return this.hasAttribute("open");
  }

  set open(value) {
    const isOpen = Boolean(value);
    if (isOpen) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }
  }

  get transitionDuration() {
    return this.getAttribute("transitionDuration") || "300";
  }

  attachEventListeners() {
    const backdrop = this.getBackdrop();
    backdrop?.addEventListener("click", () => {
      console.log("backdrop click");
       this._handleBackdropClick();
    })
  }

  getPanel() {
    return this._shadowRoot.querySelector<HTMLElement>('.slide-panel__panel');
  }

  showPanel() {
    const panel = this.getPanel();
    if (panel) {
      panel.style.transform = "none";
      panel.style.removeProperty("visibility");
    }
  }

  private _handleBackdropClick() {
    this.open = false;
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