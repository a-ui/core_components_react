import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  previewTabs: {
    'storybook/docs/panel': 'Docs',
    canvas: 'Canvas'
  },
  theme: themes.light,
});
