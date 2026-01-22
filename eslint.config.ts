// @ts-check
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import solidPlugin from 'eslint-plugin-solid/configs/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['builds', 'coverage', 'dist', 'node_modules']),
  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
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
  // @ts-expect-error - eslint-plugin-solid types don't fully match ESLint v9 flat config
  {
    files: ['src/**/*.tsx'],
    ignores: ['**/*.stories.tsx'],
    ...solidPlugin
  }
);
