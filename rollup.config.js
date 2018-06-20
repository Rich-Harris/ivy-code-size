import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';

export default {
  input: `./src/hello-world.html`,
  output: {
    name: 'hw',
    file: `public/bundle.js`,
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    svelte({
      customElement: true
    }),
    terser()
  ]
}
