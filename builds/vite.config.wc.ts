import { defineConfig, mergeConfig } from 'vite';
import { version } from '../package.json';
import viteConfig from '../vite.config';

export default defineConfig(env =>
  mergeConfig(viteConfig(env), {
    build: {
      emptyOutDir: false,
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        format: {
          comments: false,
          preamble: `// ${version}`,
          ecma: 2022,
          wrap_func_args: false
        },
        mangle: {
          properties: false,
          toplevel: true
        },
        keep_fnames: false
      }
    }
  })
);
