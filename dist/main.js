var css_248z = ":host {\n  visibility: hidden;\n  transition-property: visibility; }\n\n:host([open]) {\n  visibility: visible; }\n  :host([open]) .slide-panel__backdrop {\n    opacity: 1;\n    visibility: visible; }\n  :host([open]) .slide-panel__panel {\n    transform: none; }\n\n::slotted(div) {\n  box-sizing: border-box; }\n\n.slide-panel {\n  position: fixed;\n  z-index: var(--slide-panel-root-z-index, 1200);\n  inset: 0; }\n  .slide-panel__backdrop {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: var(--slide-panel-backdrop-background-color, rgba(0, 0, 0, 0.5));\n    transition-property: opacity;\n    transition-timing-function: ease-in-out; }\n  .slide-panel__panel {\n    width: var(--slide-panel-width, 300px);\n    background-color: var(--slide-panel-background-color, #ffffff);\n    position: fixed;\n    height: 100%;\n    z-index: var(--slide-panel-panel-z-index, 1000);\n    overflow-y: auto;\n    transition-property: transform;\n    transition-timing-function: ease-in-out;\n    box-shadow: var(--slide-panel-box-shadow, 0px 2px 3px -1px black, 0px 4px 6px 1px black, 0px 3px 8px 1px black); }\n    .slide-panel__panel--left {\n      top: 0;\n      left: 0;\n      transform: translateX(-100%); }\n    .slide-panel__panel--right {\n      top: 0;\n      right: 0;\n      transform: translateX(100%); }\n    .slide-panel__panel--top {\n      top: 0;\n      left: 0;\n      right: 0;\n      width: auto;\n      height: var(--slide-panel-height, 300px);\n      transform: translateY(-100%); }\n    .slide-panel__panel--bottom {\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: auto;\n      height: var(--slide-panel-height, 300px);\n      transform: translateY(100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0IsRUFBRTs7QUFFbkM7RUFDRSxtQkFBbUIsRUFBRTtFQUNyQjtJQUNFLFVBQVU7SUFDVixtQkFBbUIsRUFBRTtFQUN2QjtJQUNFLGVBQWUsRUFBRTs7QUFFckI7RUFDRSxzQkFBc0IsRUFBRTs7QUFFMUI7RUFDRSxlQUFlO0VBQ2YsOENBQThDO0VBQzlDLFFBQVEsRUFBRTtFQUNWO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGtGQUFrRjtJQUNsRiw0QkFBNEI7SUFDNUIsdUNBQXVDLEVBQUU7RUFDM0M7SUFDRSxzQ0FBc0M7SUFDdEMsOERBQThEO0lBQzlELGVBQWU7SUFDZixZQUFZO0lBQ1osK0NBQStDO0lBQy9DLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLCtHQUErRyxFQUFFO0lBQ2pIO01BQ0UsTUFBTTtNQUNOLE9BQU87TUFDUCw0QkFBNEIsRUFBRTtJQUNoQztNQUNFLE1BQU07TUFDTixRQUFRO01BQ1IsMkJBQTJCLEVBQUU7SUFDL0I7TUFDRSxNQUFNO01BQ04sT0FBTztNQUNQLFFBQVE7TUFDUixXQUFXO01BQ1gsd0NBQXdDO01BQ3hDLDRCQUE0QixFQUFFO0lBQ2hDO01BQ0UsT0FBTztNQUNQLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLHdDQUF3QztNQUN4QywyQkFBMkIsRUFBRSIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdmlzaWJpbGl0eTsgfVxuXG46aG9zdChbb3Blbl0pIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICA6aG9zdChbb3Blbl0pIC5zbGlkZS1wYW5lbF9fYmFja2Ryb3Age1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICA6aG9zdChbb3Blbl0pIC5zbGlkZS1wYW5lbF9fcGFuZWwge1xuICAgIHRyYW5zZm9ybTogbm9uZTsgfVxuXG46OnNsb3R0ZWQoZGl2KSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLnNsaWRlLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiB2YXIoLS1zbGlkZS1wYW5lbC1yb290LXotaW5kZXgsIDEyMDApO1xuICBpbnNldDogMDsgfVxuICAuc2xpZGUtcGFuZWxfX2JhY2tkcm9wIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xpZGUtcGFuZWwtYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgfVxuICAuc2xpZGUtcGFuZWxfX3BhbmVsIHtcbiAgICB3aWR0aDogdmFyKC0tc2xpZGUtcGFuZWwtd2lkdGgsIDMwMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGlkZS1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IHZhcigtLXNsaWRlLXBhbmVsLXBhbmVsLXotaW5kZXgsIDEwMDApO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zbGlkZS1wYW5lbC1ib3gtc2hhZG93LCAwcHggMnB4IDNweCAtMXB4IGJsYWNrLCAwcHggNHB4IDZweCAxcHggYmxhY2ssIDBweCAzcHggOHB4IDFweCBibGFjayk7IH1cbiAgICAuc2xpZGUtcGFuZWxfX3BhbmVsLS1sZWZ0IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyB9XG4gICAgLnNsaWRlLXBhbmVsX19wYW5lbC0tcmlnaHQge1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cbiAgICAuc2xpZGUtcGFuZWxfX3BhbmVsLS10b3Age1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IHZhcigtLXNsaWRlLXBhbmVsLWhlaWdodCwgMzAwcHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfVxuICAgIC5zbGlkZS1wYW5lbF9fcGFuZWwtLWJvdHRvbSB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogdmFyKC0tc2xpZGUtcGFuZWwtaGVpZ2h0LCAzMDBweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IH1cbiJdfQ== */";

var template = "<div class=\"slide-panel\">\n  <div class=\"slide-panel__backdrop\"></div>\n  <div class=\"slide-panel__panel\">\n    <div class=\"slide-panel__content\">\n      <slot></slot>\n    </div>\n  </div>\n</div>\n";

const slidePanelTemplate = document.createElement("template");
slidePanelTemplate.innerHTML = `
  <style>
    ${css_248z}</style>
  ${template}
  `;
class SlidePanel extends HTMLElement {
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
        }
        else {
            this.setAnchorClass();
        }
        if (this.transitionDuration) {
            this.updateTransitionDuration(this.transitionDuration);
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
        return this._shadowRoot.querySelector(".slide-panel");
    }
    getBackdrop() {
        return this._shadowRoot.querySelector(".slide-panel__backdrop");
    }
    ;
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
        root === null || root === void 0 ? void 0 : root.setAttribute("aria-hidden", "true");
        if (root) {
            clearTimeout(this.timeoutId);
            this.timeoutId = setTimeout(() => {
                root.style.visibility = "hidden";
            }, parseInt(this.transitionDuration));
        }
    }
    showRoot() {
        const root = this.getRoot();
        root === null || root === void 0 ? void 0 : root.setAttribute("aria-hidden", "false");
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
    _upgradeProperty(prop) {
        if (this.hasOwnProperty(prop)) {
            let value = this[prop];
            delete this[prop];
            this[prop] = value;
        }
    }
    static get observedAttributes() {
        return ["open", "position", "transitionDuration"];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName === "open" && oldVal !== newVal) {
            if (newVal !== null) {
                this.showRoot();
                this.showBackdrop();
                this.showPanel();
                this.attachEventListeners();
            }
            else {
                this.hideRoot();
                this.hideBackdrop();
                this.hidePanel();
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
    getAnchorClass(position) {
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
    removeAnchorClass(position) {
        const className = this.getAnchorClass(position);
        const panel = this.getPanel();
        panel === null || panel === void 0 ? void 0 : panel.classList.remove(className);
    }
    setAnchorClass(position = "left") {
        const className = this.getAnchorClass(position);
        const panel = this.getPanel();
        panel === null || panel === void 0 ? void 0 : panel.classList.add(className);
    }
    get open() {
        return this.hasAttribute("open");
    }
    set open(value) {
        const isOpen = Boolean(value);
        if (isOpen) {
            this.setAttribute("open", "");
        }
        else {
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
        backdrop === null || backdrop === void 0 ? void 0 : backdrop.addEventListener("click", () => {
            this._handleBackdropClick();
        });
    }
    getPanel() {
        return this._shadowRoot.querySelector('.slide-panel__panel');
    }
    showPanel() {
        const panel = this.getPanel();
        if (panel) {
            panel.style.removeProperty("visibility");
        }
    }
    updateTransitionDuration(transitionDuration) {
        const style = this._shadowRoot.querySelector("style");
        if (style) {
            style.textContent = `
      :host {
        transition-duration: ${transitionDuration}ms;
      }
      ${css_248z}
    `;
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
    _handleBackdropClick() {
        this.open = false;
    }
}
window.customElements.define("slide-panel", SlidePanel);
//# sourceMappingURL=main.js.map
