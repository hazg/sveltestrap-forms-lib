import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import css from "rollup-plugin-css-only";

export default {
  input: "./lib/index.js",
  output: [
    {
      file: `./build/index.mjs`,
      format: "esm",
      paths: id => id.startsWith("svelte/") && `${id.replace("svelte", ".")}`
    },
    {
      file: `./build/index.js`,
      format: "cjs",
      paths: id => id.startsWith("svelte/") && `${id.replace("svelte", ".")}`
    }
  ],
  plugins: [
    svelte({ emitCss: false }),
    css({ name: 'bundle' }),
    resolve(),
    commonjs(),
  ]
};
