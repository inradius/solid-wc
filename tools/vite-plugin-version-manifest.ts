import { writeFile } from 'node:fs';
import { resolve } from 'node:path';
import type { PreRenderedChunk } from 'rollup';
import type { Plugin } from 'vite';
import { version } from '../package.json';

const generateVersionManifest = (
  bundle: string | ((chunkInfo: PreRenderedChunk) => string),
  bundleFileName: string
) =>
  JSON.stringify({
    main: bundleFileName,
    [bundleFileName]: bundle,
    version
  });

const vitePluginVersionManifest = (bundleFileName: string) =>
  ({
    name: 'vite-plugin-version-manifest',
    apply: 'build',
    enforce: 'post',
    writeBundle: ({ dir, entryFileNames: bundle }) =>
      writeFile(
        resolve(dir!, 'version-manifest.json'),
        generateVersionManifest(bundle, bundleFileName),
        () => undefined
      )
  }) as Plugin;

export default vitePluginVersionManifest;
