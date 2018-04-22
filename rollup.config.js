import svelte from 'rollup-plugin-svelte';
import uglify from 'rollup-plugin-uglify';

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
    // uglify()
  ]
}
