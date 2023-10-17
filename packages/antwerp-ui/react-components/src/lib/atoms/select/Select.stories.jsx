import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Select from './Select';

Select.displayName = 'Select';

export default {
  title: 'React/Atoms/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'Use the selection input field when the user needs to make a specific selection in a form. Specifically when you have a limited number of options and there is no sufficient place to display these options. Also use a selection field for data with a specific pattern such as time.'
      }
    }
  },
  args: {
    id: 'select-story',
    inline: false,
    label: 'Select example',
    name: 'select-story',
    disabled: false,
    required: false,
    placeholder: 'Make your choice',
    options: [
      { value: 'first', label: 'First option' },
      { value: 'second', label: 'Second option' },
      { value: 'third', label: 'Third option' },
      { value: 'fourth', label: 'Fourth option' }
    ]
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `id` prop set on the `select` HTML element.'
    },
    inline: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The `inline` prop when set to `true` sets the style of the `Select` component to inline.'
    },
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'A `Select` features at least a label atop or to the left side of the component.'
    },
    name: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `name` prop sets the `name` attribute on the `select` HTML element.'
    },
    placeholder: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maak een keuze' }
      },
      description: 'Sets a placeholder value for the `Select` component.'
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The `disabled` prop will disable inputs on the `Select` component when set to `true`.'
    },
    required: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'Setting the `required` prop to `true` will mark the `Select` component as `required` and an asterisk will be placed next to the label to mark it as such.'
    },
    description: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `Select` component can have a small descriptive text above its `select` field.'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' }
      },
      description: 'The `size` prop will change the height of the `Select` component. Can be omitted for `medium`.'
    },
    state: {
      control: { type: 'select' },
      options: ['', 'success', 'error'],
      table: {
        type: { summary: 'string' }
      },
      description:
        'Whenever an input field is associated with a success or error state, the border of the container will match to that thematic colour as well as display a message (the `description` prop) above the container together with an identifiable icon.'
    },
    value: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'The `value` prop sets the selected value for the `Select` component. This prop turns the component into a controlled component. To be used along with `onChange`.'
    },
    options: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The `options` prop is an array of objects in the format `{ value: "string", label: "string", disabled?: boolean }`. It sets the `option` HTML elements in `Select` component.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the `Select` value has changed. The first parameter of this function is of type `(React).ChangeEvent`.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <Select {...args} />;
export const select = Template.bind({});
