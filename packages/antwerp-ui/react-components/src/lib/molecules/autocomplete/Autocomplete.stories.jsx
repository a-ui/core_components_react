import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Autocomplete } from './Autocomplete';

export default {
  title: 'React/Molecules/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component: 'The `Autocomplete` component is a normal text input enhanced by a pannel of filtered suggestions.'
      }
    }
  },
  args: {
    name: 'aui-autocomplete',
    items: [
      { label: 'Acadia', value: '1' },
      { label: 'American Samoa', value: '2' },
      { label: 'Arches', value: '3' },
      { label: 'Canyonlands', value: '4' },
      { label: 'Capitol Reef', value: '5' }
    ],
    label: 'National Parks',
    noResultsText: 'Sorry, niet gevonden',
    multiple: false,
    addon: {
      type: 'icon',
      placement: 'left',
      iconName: 'a11y'
    }
  },
  argTypes: {
    name: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description:
        'The `name` prop; is set on the `input` HTML element of the `Autocomplete` component. It is also returned by `onChange` and `onInputChange` to identify the component.'
    },
    items: {
      control: { type: 'array' },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The `items` prop control the results from the dropdown in the `Autocomplete` component. These `items` are objects in the format of `{ label: "", value: "" }`.'
    },
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The label of the `Autocomplete` component.'
    },
    noResultsText: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Geen resultaten' }
      },
      description: 'The text when no item match the provided search term.'
    },
    multiple: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The `multiple` (if set to `true`) prop will allow the user to select multiple values. The representation of those values is free to chose (e.g. use `Tag` components)'
    },
    inputValue: {
      table: {
        type: { summary: 'string' }
      },
      description:
        'The `inputValue` prop controls the value of the `Autocomplete` input field. This prop makes the `Autocomplete` a controlled component and should be used together with `onInputChange`.'
    },
    value: {
      table: {
        type: { summary: 'string | string[]' }
      },
      description:
        'The `value` prop controls the value of the selected `Autocomplete` item. This prop makes the `Autocomplete` a controlled component and should be used together with `onChange`. When `multiple` is `true` the value should be an array of strings.'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-autocomplete' }
      },
      description: 'The `id` prop; set on the `input` HTML element of the `Autocomplete` component.'
    },
    description: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The `description` prop adds a description or hint text between the label and the inputfield of the `Autocomplete`component'
    },
    state: {
      control: { type: 'select' },
      options: ['', 'error', 'success'],
      table: {
        type: { summary: 'select' }
      },
      description:
        'When the `Autocomplete` is associated with a success or error state, the border of the inputfield as well as the description above will match to that thematic colour together with an identifiable icon.'
    },
    addon: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'Set this prop to add a leading or trailing add-on (icon or spinner) inside the input field of the `Autocomplete` component. Addons have the following properties: `type`, `content` and `placement`, where `type` is either `icon`, `text` or `spinner`, `content` is either an icon name or a textual pre- or suffix and `placement` is either `left` or `right`.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: ' function' }
      },
      action: 'onChange',
      description:
        'Function triggered when selecting an option from the `Autocomplete` dropdown. The first parameter of this function is the selected value, the second parameter is the `name` of the `Autocomplete` component. When the `multiple` prop is set to `true`, the value is an array.'
    },
    onInputChange: {
      control: { type: 'function' },
      table: {
        type: { summary: ' function' }
      },
      action: 'onInputChange',
      description:
        'Function triggered when the input field value changes. The first parameter of this function is the input, the second parameter is the given component name.'
    },
    qa: QA_PROP_STORY
  }
};

export const autocomplete = '';
