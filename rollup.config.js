import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import clear from "rollup-plugin-clear";
import { terser } from "rollup-plugin-terser";

const plugins = [
  clear({
    targets: ["dist"],
    watch: true
  }),
  babel({
    exclude: "node_modules/**",
    presets: ["solid"],
    plugins: ["@babel/syntax-dynamic-import", "@babel/plugin-proposal-optional-chaining"]
  }),
  resolve({ extensions: [".js", ".jsx"] }),
  commonjs(),
  terser()
];

export default {
  input: "src/index.js",
  manualChunks: {vendor: ["solid-js", "solid-js/dom"]},
  output: {
    dir: "dist",
    format: "esm"
  },
  plugins
};
