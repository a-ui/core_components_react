import { Map } from './Map';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

const topRightControls = [
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'mouse' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    theme: 'danger',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'accounting-bill' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    theme: 'success',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'bookmarks-2' } }
  }
];
const bottomLeftControls = [
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'car-retro-2' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'cursor-1' } }
  }
];
const bottomRightControls = [
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'cursor-target-1' } }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: { type: 'icon', align: 'center', iconProps: { name: 'filter-1' } }
  }
];
const topLeftControls = [
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
    addOn: {
      type: 'icon',
      align: 'center',
      iconProps: { name: 'arrow-button-left-1' }
    }
  },
  {
    size: 'small',
    title: 'Open',
    ariaLabel: 'map-control',
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
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque, malesuada purus sit amet,
        gravida lectus. Aenean rutrum ipsum nec gravida eleifend. Sed pharetra vel orci nec vulputate. Nulla convallis
        mi nisl, sed finibus urna blandit quis. Sed fermentum mattis urna, sit amet lacinia libero commodo in. Duis nec
        ornare massa, ut iaculis urna. Suspendisse vehicula neque id metus dictum, quis varius elit elementum. Proin
        vitae varius lorem, sed congue lectus. Mauris et elit magna. Aenean sit amet lacus ac magna congue rhoncus.
        Mauris volutpat turpis non ligula pretium hendrerit. Phasellus eget nisi vel massa interdum sollicitudin a sit
        amet metus. Donec dignissim eros sit amet erat pretium, eleifend euismod nunc varius. Donec accumsan tincidunt
        porttitor.
      </p>
    ),
    contentOpen: true,
    map: <img style={{ transform: 'scale(1.5)' }} src="https://placedog.net/1000/1000?r" alt="map" />,
    fullscreen: false,
    topLeftControls: topLeftControls,
    topRightControls: topRightControls,
    bottomLeftControls: bottomLeftControls,
    bottomRightControls: bottomRightControls
  },
  argTypes: {
    content: {
      table: {
        type: { summary: 'ReactNode' }
      },
      description: 'The content in the side panel of the Map component.'
    },
    contentOpen: {
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
