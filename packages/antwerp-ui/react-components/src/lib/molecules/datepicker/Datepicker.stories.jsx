import Datepicker from './Datepicker';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useState } from 'react';

Datepicker.displayName = 'Datepicker';

export default {
  title: 'React/Molecules/Datepicker',
  component: Datepicker,
  parameters: {
    docs: {
      description: {
        component: 'Datepicker component.'
      }
    }
  },
  args: {
    format: 'dd/MM/yyyy',
    invalidDateText: 'Ongeldige datum',
    iconButtonLabel: 'Open kalender',
    label: 'Datepicker component',
    required: false,
    openLeft: false,
    onIconClick: null
  },
  argTypes: {
    value: {
      control: false,
      table: {
        type: { summary: 'date' }
      },
      description:
        'The `value` prop of the `Datepicker`. Setting it makes the component controlled; use it in combination with `onChange`.'
    },
    format: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dd/MM/yyyy' }
      },
      description:
        'The format in which the value is displayed. Refer to the following page for valid formatting patterns: https://date-fns.org/v2.29.3/docs/format.'
    },
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'An optional label above the input field of the Datepicker component.'
    },
    required: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description: 'Adds a red asterisk after the label',
      if: { arg: 'label' }
    },
    openLeft: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description: 'To open your datepicker on the left side of your input field'
    },
    open: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description: 'To make the open state of the datepicker controlled'
    },
    onCalendarToggle: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onToggle',
      description:
        'Function triggered when the open state of the `Datepicker` changes. Use this to make the open state controlled together with the `open` and `onIconClick` property.'
    },
    onIconClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClick',
      description:
        'Function triggered when the icon of the `Datepicker` is clicked. Use this to make the open state controlled together with the `open` and `onCalendarToggle` property.'
    },
    invalidDateText: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ongeldige datum' }
      },
      description: 'This prop sets the user error message when an invalid dat is provided in the input field.'
    },
    iconButtonLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Open kalender' }
      },
      description: 'This prop provides an accessible label on the icon button in the input field of the `Datepicker`.'
    },
    inputProps: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'The `inputProps` is an object that can apply props of the `TextField` component on the `Datepicker` input field by passing an object with the following properties: `id`, `label`, `description`, `disabled`, `name`, `required`, `size`, `onChange` and `value`.'
    },
    calendarProps: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'The `calendarProps` is an object that applies props of the `Calendar` component on the `Calendar` used in the `Datepicker`.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the value of the `Datepicker` has change. Returns the new value as ISOString. The second parameter is the current value of the input field.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [value, setValue] = useState(new Date(Date.now()));
  return (
    <div style={{ minHeight: '27rem' }}>
      <Datepicker
        {...args}
        value={value}
        onChange={(p) => {
          args.onChange(p);
          setValue(p);
        }}
      />
    </div>
  );
};

export const datepicker = Template.bind({});
