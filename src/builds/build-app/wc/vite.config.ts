import { resolve } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';
import { version } from '../../../../package.json';
import vitePluginCssDependencyCheck from '../../../../tools/vite-css-dependency';
import viteConfig from '../../vite.config.wc';

export default defineConfig(env =>
  mergeConfig(viteConfig(env), {
    base: './',
    build: {
      outDir: resolve(__dirname, '..', '..', '..', '..', 'dist', 'production'),
      lib: {
        entry: resolve(__dirname, 'index.ts'),
        formats: ['iife'],
        name: 'SolidWC',
        fileName: () => `solid-wc-${version}.min`
      },
      rollupOptions: {
        external: [/\.css$/],
        output: {
          entryFileNames: `solid-wc-${version}.min.js`,
          assetFileNames: '[hash][extname]'
        }
      }
    },
    plugins: [
      vitePluginCssDependencyCheck(
        resolve(__dirname, '..', '..', '..', '..', 'dist', 'solid-build', 'index.css')
      )
    ],
    publicDir: resolve(__dirname, '..', 'public')
  })
);
