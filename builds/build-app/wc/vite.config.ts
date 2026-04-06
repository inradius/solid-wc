import { resolve } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';
import { version } from '../../../package.json';
import vitePluginFileManager from '../../../tools/vite-plugin-file-manager/vite-plugin-file-manager';
import vitePluginVersionManifest from '../../../tools/vite-plugin-version-manifest';
import viteConfig from '../../vite.config.wc';

export default defineConfig(env =>
  mergeConfig(viteConfig(env), {
    base: './',
    build: {
      lib: {
        entry: resolve(__dirname, 'index.ts'),
        formats: ['iife'],
        name: 'SolidWC'
      },
      outDir: resolve(__dirname, '..', '..', '..', 'dist', 'qa'),
      rollupOptions: {
        external: [/\.css$/],
        output: {
          assetFileNames: '[hash][extname]',
          entryFileNames: `solid-wc-${version}.min.js`
        }
      }
    },
    plugins: [
      vitePluginVersionManifest('solid-wc.js'),
      vitePluginFileManager(
        {
          items: [
            {
              destination: './dist/prod',
              source: './dist/dev/assets'
            },
            {
              destination: './dist/prod',
              source: './dist/qa/solid-wc*'
            },
            {
              destination: './dist/prod',
              source: './dist/qa/version-manifest.json'
            }
          ]
        },
        {
          items: ['./dist/dev']
        }
      )
    ],
    publicDir: resolve(__dirname, '..', 'public')
  })
);
