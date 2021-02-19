var css_248z = ".slide-panel {\n  position: fixed;\n  z-index: var(--slide-panel-z-index, 1200); }\n  .slide-panel__backdrop {\n    position: fixed;\n    z-index: -1;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: var(--slide-panel-backdrop-background-color, rgba(0, 0, 0, 0.3)); }\n  .slide-panel__panel {\n    background-color: var(--slide-panel-background-color, #ffffff);\n    position: fixed;\n    top: 0;\n    height: 100%;\n    z-index: var(--slide-panel-panel-z-index, 1000);\n    overflow-y: auto; }\n  .slide-panel__anchor--left {\n    left: 0; }\n  .slide-panel__anchor--right {\n    right: 0; }\n  .slide-panel__anchor--top {\n    top: 0;\n    left: 0;\n    right: 0; }\n  .slide-panel__anchor--bottom {\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix5Q0FBeUMsRUFBRTtFQUMzQztJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixNQUFNO0lBQ04sU0FBUztJQUNULGtGQUFrRixFQUFFO0VBQ3RGO0lBQ0UsOERBQThEO0lBQzlELGVBQWU7SUFDZixNQUFNO0lBQ04sWUFBWTtJQUNaLCtDQUErQztJQUMvQyxnQkFBZ0IsRUFBRTtFQUNwQjtJQUNFLE9BQU8sRUFBRTtFQUNYO0lBQ0UsUUFBUSxFQUFFO0VBQ1o7SUFDRSxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVEsRUFBRTtFQUNaO0lBQ0UsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTLEVBQUUiLCJmaWxlIjoic3R5bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiB2YXIoLS1zbGlkZS1wYW5lbC16LWluZGV4LCAxMjAwKTsgfVxuICAuc2xpZGUtcGFuZWxfX2JhY2tkcm9wIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogLTE7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsaWRlLXBhbmVsLWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4zKSk7IH1cbiAgLnNsaWRlLXBhbmVsX19wYW5lbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xpZGUtcGFuZWwtYmFja2dyb3VuZC1jb2xvciwgI2ZmZmZmZik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogdmFyKC0tc2xpZGUtcGFuZWwtcGFuZWwtei1pbmRleCwgMTAwMCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAuc2xpZGUtcGFuZWxfX2FuY2hvci0tbGVmdCB7XG4gICAgbGVmdDogMDsgfVxuICAuc2xpZGUtcGFuZWxfX2FuY2hvci0tcmlnaHQge1xuICAgIHJpZ2h0OiAwOyB9XG4gIC5zbGlkZS1wYW5lbF9fYW5jaG9yLS10b3Age1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwOyB9XG4gIC5zbGlkZS1wYW5lbF9fYW5jaG9yLS1ib3R0b20ge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwOyB9XG4iXX0= */";

var template = "<div class=\"slide-panel\">\n  <div class=\"slide-panel__backdrop\"></div>\n  <div class=\"slide-panel__panel\">\n    <slot></slot>\n  </div>\n</div>\n";

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
    }
    get open() {
        return this.getAttribute("open");
    }
    attachEventListeners() {
    }
}
window.customElements.define("slide-panel", SlidePanel);
//# sourceMappingURL=main.js.map
