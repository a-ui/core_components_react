// documentation/storybook/.storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../../../packages/antwerp-ui/react-components/src/lib/base/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/organisms/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/overview/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    if (!config?.server) {
      config.base = '/core_components_react';
    }

    config.server = {
      ...config.server,
      fs: {
        allow: ['../../../'],
      },
    };

    return config;
  },
  staticDirs: ['.'],
  docs: {
    autodocs: true,
  },
};

export default config;
