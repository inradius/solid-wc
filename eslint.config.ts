// @ts-check
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import solid from 'eslint-plugin-solid/configs/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';
import typescriptEslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['builds', 'dist', 'node_modules']),
  eslint.configs.recommended,
  prettier,
  ...typescriptEslint.configs.recommended,
  {
    ignores: ['builds', 'dist', 'node_modules']
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    },
    plugins: {
      import: importPlugin
    }
  },
  {
    files: ['src/**/*.tsx'],
    ignores: ['**/*.stories.tsx'],
    plugins: {
      // @ts-expect-error - eslint-plugin-solid does not support ESLint v9 flat config
      solid: solid.plugins.solid
    },
    rules: solid.rules
  }
);
