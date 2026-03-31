import path from 'path';

export default {
  stories: [
    '../../../packages/antwerp-ui/react-components/src/lib/base/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/atoms/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/molecules/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/organisms/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/antwerp-ui/react-components/src/lib/overview/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    config.server = config.server || {};
    config.server.fs = config.server.fs || {};

    config.server.fs.allow = [
      ...(config.server.fs.allow || []),
      path.resolve(__dirname, '../../../')
    ];

    return config;
  },
  staticDirs: ['.'],
  docs: {
    autodocs: true,
  },
};
