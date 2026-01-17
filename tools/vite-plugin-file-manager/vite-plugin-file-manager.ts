import { ViteFilemanager } from 'filemanager-plugin';

const vitePluginFileManager = (
  copy?: {
    items?:
      | {
          source: string;
          destination: string;
          name?: string | undefined;
        }[]
      | undefined;
  },
  del?: {
    items?: string[] | undefined;
  }
) =>
  ViteFilemanager({
    customHooks: [
      {
        hookName: 'closeBundle',
        commands: { copy, del }
      }
    ]
  });

export default vitePluginFileManager;
