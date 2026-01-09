import { resolve } from 'node:path';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

const vitestConfig = defineConfig(env =>
  mergeConfig(
    viteConfig(env),
    defineConfig({
      test: {}
    })
  )
);

export default vitestConfig;
