import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import html from "rollup-plugin-html";
import { terser } from "rollup-plugin-terser";

const esmMin = {
  input: "./src/index.ts",
  output: {
    file: "./dist/slide-panel.min.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extensions: [".css"],
      inject: false,
      minimize: true,
    }),
    html({
      include: "**/*.html",
    }),
    terser(),
  ],
  watch: {
    chokidar: false,
  },
};

const esm = {
  input: "./src/index.ts",
  output: {
    file: "./dist/slide-panel.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extensions: [".css"],
      inject: false,
    }),
    html({
      include: "**/*.html",
    }),
  ],
  watch: {
    chokidar: false,
  },
};

export default [esm, esmMin];
