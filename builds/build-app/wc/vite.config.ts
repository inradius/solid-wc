import { resolve } from 'node:path';
import { defineConfig, mergeConfig } from 'vite';
import { version } from '../../../package.json';
import vitePluginFileManager from '../../../tools/vite-plugin-file-manager/vite-plugin-file-manager';
import vitePluginInjectComputedStyles from '../../../tools/vite-plugin-inject-css';
import vitePluginVersionManifest from '../../../tools/vite-plugin-version-manifest';
import viteConfig from '../../vite.config.wc';

export default defineConfig(env =>
  mergeConfig(viteConfig(env), {
    base: './',
    build: {
      outDir: resolve(__dirname, '..', '..', '..', 'dist', 'qa'),
      lib: {
        entry: resolve(__dirname, 'index.ts'),
        formats: ['iife'],
        name: 'SolidWC'
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
      vitePluginInjectComputedStyles(
        resolve(__dirname, '..', '..', '..', 'dist', 'dev', 'index.css')
      ),
      vitePluginVersionManifest('solid-wc.js'),
      vitePluginFileManager(
        {
          items: [
            {
              source: './dist/dev/assets',
              destination: './dist/prod'
            },
            {
              source: './dist/qa/solid-wc*',
              destination: './dist/prod'
            },
            {
              source: './dist/qa/version-manifest.json',
              destination: './dist/prod'
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
