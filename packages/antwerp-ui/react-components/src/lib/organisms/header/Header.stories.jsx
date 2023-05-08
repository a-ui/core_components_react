import { Header } from './Header';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Organisms/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'The header component provides an important landmark for the user at the top of a page.'
      }
    }
  },
  args: {
    logoHref: '/',
    logoSrc: 'https://cdn.antwerpen.be/core_branding_scss/6.3.0/assets/images/a-logo.svg',
    logoAlt: 'Naar de startpagina',
    skipToMainLabel: 'Ga naar inhoud',
    menuItems: [
      { label: 'Hello world' },
      {
        label: 'Firstname Lastname',
        addOn: { type: 'avatar', avatarProps: { image: 'https://placedog.net/100/100?r' } },
        flyout: {
          children: 'Flyout content',
          orientation: 'bottom-right'
        }
      }
    ]
  },
  argTypes: {
    logoHref: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '/' }
      },
      description: 'The url where a click on the logo in the header component leads to.'
    },
    logoSrc: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'https://cdn.antwerpen.be/core_branding_scss/6.3.0/assets/images/a-logo.svg' }
      },
      description: 'The url for the src logo image in the header component.'
    },
    logoAlt: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Naar de startpagina' }
      },
      description: 'The alternative text for the logo image in the header component.'
    },
    skipToMainLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar inhoud' }
      },
      description: 'The label for the skip to main content button in the header.'
    },
    menuItems: {
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      description:
        'Array of top right header menu items, use objects of button properties with extra property `label` and `flyout`. Use the `FlyoutProps` in the `flyout` property to add a menu item with a flyout.'
    },
    qa: QA_PROP_STORY
  }
};

export const header = '';
