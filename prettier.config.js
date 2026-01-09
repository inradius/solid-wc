/** @type {import("prettier").Config} */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const packageJsonPath = resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
const typescriptVersion = (
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
  importOrderTypeScriptVersion: typescriptVersion
};

export default prettierConfig;
