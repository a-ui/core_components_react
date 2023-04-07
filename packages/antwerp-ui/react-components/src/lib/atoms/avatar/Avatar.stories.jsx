import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Avatar from './Avatar';

export default {
  title: 'React/Atoms/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Avatars are a special type of add-on or stand-alone visualisation meant to represent a user. Avatars can be interactive, and take on the form of the button-like call to action. They can also be an actual part (or add-on) of a button. Or they can function as a purely ‘decorative’ callback to a user.'
      }
    }
  },
  args: {
    image: 'https://placedog.net/100/100?r',
    letter: 'NT',
    icon: 'single-neutral',
    rounded: false,
    size: '',
    ariaLabel: 'Gebruiker',
    imageAlt: 'Avatar'
  },
  argTypes: {
    image: {
      control: { type: 'text' },
      table: {
        type: { summary: 'url' },
        defaultValue: { summary: '' }
      },
      description:
        'The `image` prop will allow to display an authenticated user in the avatar. It will override the `letter` prop if provided.'
    },
    letter: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The `letter` prop will allow an authenticated user to display their initials (will display up to 3 characters. Extra characters will be ignored). If an image is provided, it will override the letter parameter.'
    },
    icon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single-neutral' }
      },
      options: ['single-neutral', 'social-media-snapchat', 'house-chimney', 'bicycle', 'flash'],
      description:
        'The `icon` prop displays an icon in the avatar for guest users. Authenticated users will have this replaced with their initials, or an image, if they provided one.'
    },
    rounded: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Adds a class to the underlying HTML to change the style to rounded.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'small', 'medium', 'large'],
      description: 'Sets the size for the component. Can be omitted for `medium`.'
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Gebruiker' }
      },
      description: 'The `ariaLabel` describes an accessible name for the icon inside the `Avatar` component.'
    },
    imageAlt: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Avatar' }
      },
      description: 'Image alt text for the provided image.'
    },
    qa: QA_PROP_STORY
  }
};

export const avatar = '';
