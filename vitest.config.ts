import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const vitestConfig = defineConfig(env =>
  mergeConfig(
    viteConfig(env),
    defineConfig({
      test: {
        clearMocks: true,
        coverage: {
          enabled: true,
          exclude: configDefaults.coverage.exclude!.concat([
            'src/**/*.stories.*',
            'build/**/*'
          ])
        },
        environment: 'jsdom',
        globals: true,
        include: ['./src/**/*.{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']
      }
    })
  )
);

export default vitestConfig;
