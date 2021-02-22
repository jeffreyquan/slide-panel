import styleSheet from "./style.css";
import template from "./template.html";

const slidePanelTemplate = document.createElement("template");

slidePanelTemplate.innerHTML = `
  <style>
    ${styleSheet}</style>
  ${template}
  `

const slidePanelOpen = new CustomEvent("slide-panel-open", {
  bubbles: true
});

const slidePanelClose = new CustomEvent("slide-panel-close", {
  bubbles: true
});
class SlidePanel extends HTMLElement {
  private _shadowRoot: ShadowRoot;

  private timeoutId: number;

  [key: string]: any;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });

    this._shadowRoot.appendChild(slidePanelTemplate.content.cloneNode(true));

    this.timeoutId = 0;

    this.updateTransitionDuration(this.transitionDuration);  
  }

  connectedCallback() {
    this.attachEventListeners();
    if (this.position) {
      this.setAnchorClass(this.position);
    } else {
      this.setAnchorClass()
    }

    if (this.transitionDuration) {
      this.updateTransitionDuration(this.transitionDuration)
    }

    this._upgradeProperty("open");
    this._upgradeProperty("transitionDuration");
    this._upgradeProperty("position");

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
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
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
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
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
    return ["open", "position", "transitionDuration"];
  }

  attributeChangedCallback(attrName: string, oldVal: string, newVal: string) {

    if (attrName === "open" && oldVal !== newVal) {
      if (newVal !== null) {
        this.showRoot();
        this.showBackdrop();
        this.showPanel();
        this.attachEventListeners();

        this.dispatchEvent(slidePanelOpen);
      } else {
        this.hideRoot();
        this.hideBackdrop();
        this.hidePanel();

        this.dispatchEvent(slidePanelClose);

        document.removeEventListener("keydown", this._handleKeyDown.bind(this));
      }
    }

    if (attrName === "position") {
      this.removeAnchorClass(oldVal);
      this.setAnchorClass(newVal);
    }

    if (attrName === "transitionDuration") {
      if (oldVal !== newVal) {
        this.updateTransitionDuration(newVal);
      }
    }
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

  setAnchorClass(position: string = "left") {
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

  get position() {
    return this.getAttribute("position");
  }

  set position(value) {
    this.position = value;
  }

  get transitionDuration() {
    return this.getAttribute("transitionDuration") || "300";
  }

  set transitionDuration(value) {
    if (value) {
      this.transitionDuration = value;
    }
  }

  attachEventListeners() {
    const backdrop = this.getBackdrop();
    backdrop?.addEventListener("click", () => {
       this._handleBackdropClick();
    })

    document.addEventListener("keydown", this._handleKeyDown.bind(this));
  }

  getPanel() {
    return this._shadowRoot.querySelector<HTMLElement>('.slide-panel__panel');
  }

  showPanel() {
    const panel = this.getPanel();
    if (panel) {
      panel.style.removeProperty("visibility");
    }
  }

  updateTransitionDuration(transitionDuration: string) {
    const style = this._shadowRoot.querySelector("style");
    if (style) {
      style.textContent = `
      :host {
        transition-duration: ${transitionDuration}ms;
      }
      ${styleSheet}
    `
    }

    const backdrop = this.getBackdrop();
    if (backdrop) {
      backdrop.style.transitionDuration = this.transitionDuration + "ms";
    }

    const panel = this.getPanel();
    if (panel) {
      panel.style.transitionDuration = this.transitionDuration + "ms";
    }
  }

  private _handleKeyDown(event: KeyboardEvent) {
    event.preventDefault();
    if (event.key === "Escape") {
      this.open = false;
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