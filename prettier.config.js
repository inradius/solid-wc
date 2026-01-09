/** @type {import("prettier").Config} */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const packageJson = JSON.parse(
  readFileSync(resolve(process.cwd(), 'package.json'), 'utf-8')
);
const importOrderTypeScriptVersion = (
  packageJson.devDependencies.typescript || packageJson.dependencies.typescript
).replace(/^[~^]/, '');

const prettierConfig = {
  arrowParens: 'avoid',
  singleQuote: true,
  printWidth: 90,
  semi: true,
  trailingComma: 'none',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion
};

export default prettierConfig;
