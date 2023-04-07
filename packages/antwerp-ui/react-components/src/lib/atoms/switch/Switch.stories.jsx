import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Switch from './Switch';

export default {
  title: 'React/Atoms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'Use a switch when a user needs to toggle a single item on or off, in order to immediately activate or deactivate something.'
      }
    }
  },
  args: {
    statusLabelOn: 'Aan',
    statusLabelOff: 'Uit',
    statusLabelSide: '',
    internalIOLabels: false,
    disabled: false,
    label: 'Switch me!',
    labelId: 'aui-switch-label',
    id: 'aui-switch'
  },
  argTypes: {
    statusLabelOn: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Aan' }
      },
      description: 'Label shown on the side of the switch when its checked.'
    },
    statusLabelOff: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Uit' }
      },
      description: 'Label shown on the side of the switch when its unchecked.'
    },
    statusLabelSide: {
      control: { type: 'select' },
      options: ['', 'left', 'right'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Side on which the status label will be shown. Leave empty to hide the status labels.'
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' }
      },
      description: 'Sets the `aria-label` attribute on the rendered HTML button.'
    },
    internalIOLabels: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Controls if additional I|O labels will be shown inside the `Switch` component.'
    },
    checked: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Checked state. When this prop is set, the `Switch` becomes a controlled component; use it together with `onClick`.'
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Disables the component interaction.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'clicked',
      description:
        'Function that is triggered when the `Switch` is clicked, returns a `React.MouseEvent` as first argument.'
    },
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label for the switch.'
    },
    labelId: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-switch-label' }
      },
      description: 'ID of the label of the `Switch` component.'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-switch' }
      },
      description: 'ID of `Switch` component.'
    },

    qa: QA_PROP_STORY
  }
};

export const switch_ = '';
