declare module 'filemanager-plugin' {
  export const ViteFilemanager: (options: {
    customHooks: {
      hookName: string;
      commands: {
        copy?: {
          items?: {
            source: string;
            destination: string;
            name?: string;
          }[];
        };
        del?: {
          items?: string[];
        };
      };
    }[];
  }) => {
    name: 'file-manager';
  };
}
