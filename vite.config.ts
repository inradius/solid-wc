import devtools from 'solid-devtools/vite';
import { ConfigEnv, defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

const viteConfig = ({ mode }: ConfigEnv) =>
  defineConfig({
    plugins: [devtools(), solidPlugin({ dev: mode === 'development' }), tsconfigPaths()],
    server: { port: 3000 },
    build: {
      target: 'ESNext',
      rollupOptions: {
        output: {
          assetFileNames: '[name][extname]',
          chunkFileNames: '[name]-[hash].js',
          entryFileNames: '[name]-[hash].js'
        }
      },
      emptyOutDir: false
    },
    resolve: {
      conditions: ['browser', 'development']
    }
  });

export default viteConfig;
