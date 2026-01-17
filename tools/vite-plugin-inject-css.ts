import { existsSync } from 'fs';
import { Plugin } from 'vite';

const vitePluginInjectComputedStyles = (cssPath: string): Plugin => ({
  name: 'check-css-dependency',
  buildStart() {
    if (!existsSync(cssPath)) {
      this.error(
        '\n\n' +
          '═══════════════════════════════════════════════════════════════\n' +
          '  ERROR: Missing CSS dependency\n' +
          '═══════════════════════════════════════════════════════════════\n' +
          '\n' +
          `  The file "${cssPath}" does not exist.\n` +
          '\n' +
          '  Please run "pnpm build:app" first to generate the required\n' +
          '  CSS file before building the web component.\n' +
          '\n' +
          '  Or run "pnpm build" to build both in the correct order.\n' +
          '\n' +
          '═══════════════════════════════════════════════════════════════\n'
      );
    }
  }
});

export default vitePluginInjectComputedStyles;
