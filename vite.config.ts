import devtools from 'solid-devtools/vite';
import { ConfigEnv, defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';

const viteConfig = ({ mode }: ConfigEnv) =>
  defineConfig({
    build: {
      emptyOutDir: false,
      rollupOptions: {
        output: {
          assetFileNames: '[name][extname]',
          chunkFileNames: '[name]-[hash].js',
          entryFileNames: '[name]-[hash].js'
        }
      },
      target: 'ESNext'
    },
    plugins: [devtools(), solidPlugin({ dev: mode === 'development', hot: mode === 'development' }), tsconfigPaths()],
    resolve: {
      conditions: ['browser', 'development']
    },
    server: { port: 3000 }
  });

export default viteConfig;
