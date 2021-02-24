[![npm package](https://img.shields.io/npm/v/slide-panel.svg)](https://www.npmjs.com/package/slide-panel)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/slide-panel)

# slide-panel

`slide-panel` is a sliding panel web component that can open from the left, right, top or bottom. It can be used in any library/framework
or in plain HTML.

Features:

- Slide panel that can open from the left, right, top or bottom
- Press ESC key to close the panel
- Custom events are emitted on opening and closing the panel

## Demo

### HTML

Visit the following [link](https://slide-panel.netlify.app/) for an example of usage in plain HTML.

### React

Visit this [Code Sandbox](https://codesandbox.io/s/slide-panel-yejbt) for an example of usage in React.

## Installation

### Option 1 - HTML

Add the following script tag to your `index.html`:

```
<script src="http://unpkg.com/slide-panel/dist/slide-panel.min.js"></script>
```

### Option 2 - React, Angular or Vue

Install the package to your project:

```
npm install slide-panel
```

Add the following in your entry file e.g. `index.js`:

```
import "slide-panel"
```

## Usage

Use the `slide-panel` tag and add the contents of the panel within `<div>` tags.

Add `position` with either the following values: `left`, `right`, `top` or `bottom` to set where the panel is sliding in from. If `position` is not included, the panel will slide in from the `left` by default.

Add `transitionDuration` with a value in milliseconds to set transition duration of the panel closing and opening. If `transitionDuration` is not included, the transition duration will be `300` by default.

The `open` property is used to determine whether the panel is opened or closed.

```html
<slide-panel class="panel" transitionDuration="500" position="right">
  <div><!-- ADD CONTENT HERE --></div>
</slide-panel>

<button id="btn">Open Panel</button>

<script>
  const btn = document.querySelector("#btn");
  const panel = document.querySelector(".panel");

  btn.addEventListener("click", (event) => {
    panel.setAttribute("open", "true");
  });
</script>
```

### Props

| Prop                 | Type                                                    | Default                     | Description                                       |
| -------------------- | ------------------------------------------------------- | --------------------------- | ------------------------------------------------- |
| `open`               | `"true" \| "false"`                                     | `"false"` (panel is closed) | Whether the panel is opened or closed.            |
| `position`           | `"left" \| "right" \| "top" \| "bottom"`                | `"left"`                    | Where the panel opens from.                       |
| `transitionDuration` | Number enclosed in strings in milliseconds e.g. `"500"` | `"300"`                     | Transition duration of opening and closing panel. |

### Events

`slide-panel-open` is a Custom Event that is emitted when the panel opens.

`slide-panel-close` is a Custom Event that is emitted when the panel closes.

An event listener can be added to the panel to listen to these Custom Events. Continuing on from the previous example:

```html
<script>
  panel.addEventListener("slide-panel-open", (event) => {
    console.log("Slide Panel Opening 🚀");
  });
</script>
```

### Styling

`slide-panel` utilises CSS variables that help style the component. These can be overridden to adjust the styling. The amount of styling is intentionally lean to allow the user to focus on styling the panel.

To override the CSS variables, it is recommended to add a class to the `slide-panel` tag and define the CSS variables in that class. The values used below are the `default` values.

```css
.panel {
  --slide-panel-root-z-index: 1200;
  --slide-panel-panel-z-index: 1000;
  --slide-panel-backdrop-background-color: rgba(0, 0, 0, 0.5);
  --slide-panel-background-color: #ffffff;
  --slide-panel-box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 20%), 0px 4px 6px 1px
      rgba(0, 0, 0, 14%), 0px 3px 8px 1px rgba(0, 0, 0, 12%);
  --slide-panel-transition-timing-function: ease-in-out;
}
```

## Contributing

If you would like to contribute, please follow the instructions below:

1. Fork the repo
2. Run `npm install`
3. Create a feature branch: `git checkout -b feature/feature-name`
4. Commit your changes: `git commit -am "Added feature"`
5. Push to the branch: `git push origin feature/feature-name`
6. Submit a Pull Request

## Development

Run the following commands after cloning the repo.

```sh
npm install
npm run start
```

Make changes in the `style.scss` and the `SlidePanel.ts` file in the `src` directory.

## License

MIT
