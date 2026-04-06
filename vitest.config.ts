import { defineConfig, mergeConfig } from 'vitest/config';
import sharedConfig from '@inradius/solid-wc-utils-config/vitest.base';
import viteConfig from './vite.config';

const vitestConfig = defineConfig(env =>
  mergeConfig(
    sharedConfig,
    mergeConfig(
      viteConfig(env),
      defineConfig({
        test: {
          include: ['./src/**/*.{test,spec}.{js,cjs,mjs,jsx,ts,cts,mts,tsx}']
        }
      })
    )
  )
);

export default vitestConfig;
