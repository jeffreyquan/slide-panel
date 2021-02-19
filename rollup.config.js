import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import html from "rollup-plugin-html";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/main.js",
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
