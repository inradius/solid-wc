/** @type {import("prettier").Config & { importOrder?: string[], importOrderSeparation?: boolean, importOrderSortSpecifiers?: boolean, importOrderParserPlugins?: string[] }} */
const prettierConfig = {
  arrowParens: 'avoid',
  singleQuote: true,
  printWidth: 90,
  semi: true,
  trailingComma: 'none',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^node:(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@(app|dist|mocks|tools)/(.*)$',
    '^[./]',
    '^[./].*\\.css$'
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy']
};

export default prettierConfig;
