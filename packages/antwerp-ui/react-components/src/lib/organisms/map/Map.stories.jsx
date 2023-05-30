import { Map } from './Map';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

const topRightControls = [
  {
    title: 'Mouse',
    ariaLabel: 'I am a mouse',
    theme: 'success',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'mouse' } }
  },
  {
    title: 'Bookmark',
    ariaLabel: 'Bookmark location',
    theme: 'warning',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'bookmarks-2' } }
  }
];
const bottomLeftControls = [
  {
    size: 'small',
    title: 'Car',
    ariaLabel: 'Car',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'car-retro-2' } }
  }
];
const bottomRightControls = [
  {
    title: 'Target',
    ariaLabel: 'Current location',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'cursor-target-1' } }
  },
  {
    title: 'Filter',
    ariaLabel: 'Filter options',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'filter-1' } }
  }
];
const topLeftControls = [
  {
    title: 'Sidebar',
    ariaLabel: 'Open sidebar',
    addOn: {
      type: 'icon',
      align: 'center',
      iconProps: { name: 'arrow-button-left-1' }
    }
  },
  {
    title: 'Fullscreen',
    ariaLabel: 'Fullscreen',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'expand-1' } }
  }
];

export default {
  title: 'React/Organisms/Map',
  component: Map,
  parameters: {
    docs: {
      description: {
        component: 'The map component.'
      }
    }
  },
  args: {
    sidebar: `Hello, I am the sidebar.`,
    sidebarOpen: true,
    map: <img style={{ transform: 'scale(2)' }} src="https://placedog.net/1000/1000?r" alt="map" />,
    fullscreen: false,
    topLeftControls: topLeftControls,
    topRightControls: topRightControls,
    bottomLeftControls: bottomLeftControls,
    bottomRightControls: bottomRightControls
  },
  argTypes: {
    sidebar: {
      table: {
        type: { summary: 'ReactNode' }
      },
      description: 'The content in the side panel of the Map component.'
    },
    sidebarOpen: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Controls the open state of the content in the side panel of the Map component.'
    },
    map: {
      table: {
        type: { summary: 'ReactNode' }
      },
      control: { type: 'false' },
      description: 'The map prop sets the background content for the Map component.'
    },
    fullscreen: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Controls whether the Map component should be rendered in fullscreen.'
    },
    topLeftControls: {
      table: {
        type: { summary: 'array' }
      },
      description:
        'An array of ButtonProps. Each element of the array contains a Button that will be placed in the top left corner of the Map component.'
    },
    topRightControls: {
      table: {
        type: { summary: 'array' }
      },
      description:
        'An array of ButtonProps. Each element of the array contains a Button that will be placed in the top right corner of the Map component.'
    },
    bottomLeftControls: {
      table: {
        type: { summary: 'array' }
      },
      description:
        'An array of ButtonProps. Each element of the array contains a Button that will be placed in the bottom left corner of the Map component.'
    },
    bottomRightControls: {
      table: {
        type: { summary: 'array' }
      },
      description:
        'An array of ButtonProps. Each element of the array contains a Button that will be placed in the bottom right corner of the Map component.'
    },
    qa: QA_PROP_STORY
  }
};

export const map = '';
