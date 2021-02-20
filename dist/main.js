var css_248z = ":host {\n  --slide-panel-width: 250px;\n  --slide-panel-height: 250px; }\n\n::slotted(*) {\n  visibility: hidden; }\n\n.slide-panel {\n  position: fixed;\n  z-index: var(--slide-panel-root-z-index, 1200);\n  inset: 0; }\n  .slide-panel__backdrop {\n    opacity: 0;\n    position: fixed;\n    z-index: -1;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: var(--slide-panel-backdrop-background-color, rgba(0, 0, 0, 0.5));\n    transition-property: opacity;\n    transition-timing-function: ease-in-out; }\n  .slide-panel__panel {\n    width: var(--slide-panel-width, 300px);\n    background-color: var(--slide-panel-background-color, #ffffff);\n    position: fixed;\n    height: 100%;\n    z-index: var(--slide-panel-panel-z-index, 1000);\n    overflow-y: auto;\n    transition-property: transform;\n    transition-timing-function: ease-in-out;\n    box-shadow: var(--slide-panel-box-shadow, 0px 2px 3px -1px black, 0px 4px 6px 1px black, 0px 3px 8px 1px black); }\n    .slide-panel__panel--left {\n      top: 0;\n      left: 0;\n      transform: translateX(-100%); }\n    .slide-panel__panel--right {\n      top: 0;\n      right: 0;\n      transform: translateX(100%); }\n    .slide-panel__panel--top {\n      top: 0;\n      left: 0;\n      right: 0;\n      width: auto;\n      height: var(--slide-panel-height, 300px);\n      transform: translateY(-100%); }\n    .slide-panel__panel--bottom {\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: auto;\n      height: var(--slide-panel-height, 300px);\n      transform: translateY(100%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiwyQkFBMkIsRUFBRTs7QUFFL0I7RUFDRSxrQkFBa0IsRUFBRTs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsOENBQThDO0VBQzlDLFFBQVEsRUFBRTtFQUNWO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGtGQUFrRjtJQUNsRiw0QkFBNEI7SUFDNUIsdUNBQXVDLEVBQUU7RUFDM0M7SUFDRSxzQ0FBc0M7SUFDdEMsOERBQThEO0lBQzlELGVBQWU7SUFDZixZQUFZO0lBQ1osK0NBQStDO0lBQy9DLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLCtHQUErRyxFQUFFO0lBQ2pIO01BQ0UsTUFBTTtNQUNOLE9BQU87TUFDUCw0QkFBNEIsRUFBRTtJQUNoQztNQUNFLE1BQU07TUFDTixRQUFRO01BQ1IsMkJBQTJCLEVBQUU7SUFDL0I7TUFDRSxNQUFNO01BQ04sT0FBTztNQUNQLFFBQVE7TUFDUixXQUFXO01BQ1gsd0NBQXdDO01BQ3hDLDRCQUE0QixFQUFFO0lBQ2hDO01BQ0UsT0FBTztNQUNQLFFBQVE7TUFDUixTQUFTO01BQ1QsV0FBVztNQUNYLHdDQUF3QztNQUN4QywyQkFBMkIsRUFBRSIsImZpbGUiOiJzdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tc2xpZGUtcGFuZWwtd2lkdGg6IDI1MHB4O1xuICAtLXNsaWRlLXBhbmVsLWhlaWdodDogMjUwcHg7IH1cblxuOjpzbG90dGVkKCopIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5zbGlkZS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogdmFyKC0tc2xpZGUtcGFuZWwtcm9vdC16LWluZGV4LCAxMjAwKTtcbiAgaW5zZXQ6IDA7IH1cbiAgLnNsaWRlLXBhbmVsX19iYWNrZHJvcCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogLTE7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsaWRlLXBhbmVsLWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cbiAgLnNsaWRlLXBhbmVsX19wYW5lbCB7XG4gICAgd2lkdGg6IHZhcigtLXNsaWRlLXBhbmVsLXdpZHRoLCAzMDBweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xpZGUtcGFuZWwtYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiB2YXIoLS1zbGlkZS1wYW5lbC1wYW5lbC16LWluZGV4LCAxMDAwKTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2xpZGUtcGFuZWwtYm94LXNoYWRvdywgMHB4IDJweCAzcHggLTFweCBibGFjaywgMHB4IDRweCA2cHggMXB4IGJsYWNrLCAwcHggM3B4IDhweCAxcHggYmxhY2spOyB9XG4gICAgLnNsaWRlLXBhbmVsX19wYW5lbC0tbGVmdCB7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTsgfVxuICAgIC5zbGlkZS1wYW5lbF9fcGFuZWwtLXJpZ2h0IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XG4gICAgLnNsaWRlLXBhbmVsX19wYW5lbC0tdG9wIHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1zbGlkZS1wYW5lbC1oZWlnaHQsIDMwMHB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IH1cbiAgICAuc2xpZGUtcGFuZWxfX3BhbmVsLS1ib3R0b20ge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgICBoZWlnaHQ6IHZhcigtLXNsaWRlLXBhbmVsLWhlaWdodCwgMzAwcHgpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyB9XG4iXX0= */";

var template = "<div class=\"slide-panel\">\n  <div class=\"slide-panel__backdrop\"></div>\n  <div class=\"slide-panel__panel\">\n    <div class=\"slide-panel__content\">\n      <slot></slot>\n    </div>\n  </div>\n</div>\n";

const slidePanelTemplate = document.createElement("template");
slidePanelTemplate.innerHTML = `
<style>${css_248z}</style>
${template}
`;
class SlidePanel extends HTMLElement {
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
            setTimeout(() => {
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
            setTimeout(() => {
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
        return ["open", "position"];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log({
            attrName,
            oldVal,
            newVal
        });
        if (attrName === "open" && oldVal !== newVal) {
            if (newVal !== null) {
                console.log("open panel");
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
    }
    get position() {
        return this.getAttribute("position");
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
    setAnchorClass(position) {
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
    get transitionDuration() {
        return this.getAttribute("transitionDuration") || "300";
    }
    attachEventListeners() {
        const backdrop = this.getBackdrop();
        backdrop === null || backdrop === void 0 ? void 0 : backdrop.addEventListener("click", () => {
            console.log("backdrop click");
            this._handleBackdropClick();
        });
    }
    getPanel() {
        return this._shadowRoot.querySelector('.slide-panel__panel');
    }
    showPanel() {
        const panel = this.getPanel();
        if (panel) {
            panel.style.transform = "none";
            panel.style.removeProperty("visibility");
        }
    }
    _handleBackdropClick() {
        this.open = false;
    }
}
window.customElements.define("slide-panel", SlidePanel);
//# sourceMappingURL=main.js.map
