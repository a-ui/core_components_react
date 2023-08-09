module.exports = {
  stories: ['../../../packages/antwerp-ui/react-components/src/lib/base/**/*.stories.@(js|jsx|ts|tsx)', '../../../packages/antwerp-ui/react-components/src/lib/atoms/**/*.stories.@(js|jsx|ts|tsx)', '../../../packages/antwerp-ui/react-components/src/lib/molecules/**/*.stories.@(js|jsx|ts|tsx)', '../../../packages/antwerp-ui/react-components/src/lib/organisms/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  async viteFinal(config) {
    if (!config?.server) {
      config.base = '/core_components_react';
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};