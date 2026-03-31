import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  previewTabs: {
    'storybook/docs/panel': 'Docs',
    canvas: 'Canvas'
  },
  theme: themes.light,
});
