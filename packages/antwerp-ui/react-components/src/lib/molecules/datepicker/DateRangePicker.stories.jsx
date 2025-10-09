import DateRangePicker from './DateRangePicker';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useState } from 'react';

DateRangePicker.displayName = 'DateRangePicker';

export default {
  title: 'React/Molecules/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    docs: {
      description: {
        component: 'DateRangePicker component.'
      }
    }
  },
  args: {
    format: 'dd/MM/yyyy',
    fromLabel: 'Van',
    toLabel: 'tot en met'
  },
  argTypes: {
    value: {
      control: false,
      table: {
        type: { summary: 'array' }
      },
      description:
        'The `value` prop of the `DateRangePicker`, an array of 2 ISO strings (`["from", "to"]`). Setting it makes the component controlled; use it in combination with `onChange`.'
    },
    format: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'dd/MM/yyyy' }
      },
      description:
        'The format in which the values are displayed. Refer to the following page for valid formatting patterns: https://date-fns.org/v2.29.3/docs/format.'
    },
    fromLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Van' }
      },
      description: 'An optional label above the input field of the from Datepicker.'
    },
    toLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'tot en met' }
      },
      description: 'An optional label above the input field of the to Datepicker.'
    },
    fromInputProps: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'The `inputProps` is an object that can apply props of the `TextField` component on the `DateRangePicker` "from" input field by passing an object with the following properties: `id`, `label`, `description`, `disabled`, `name`, `required`, `size`, `onChange` and `value`.'
    },
    toInputProps: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'The `inputProps` is an object that can apply props of the `TextField` component on the `DateRangePicker` "to" input field by passing an object with the following properties: `id`, `label`, `description`, `disabled`, `name`, `required`, `size`, `onChange` and `value`.'
    },
    calendarProps: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'The `calendarProps` is an object that applies props of the `Calendar` component on the `Calendar` in the `DateRangePicker`.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the value of the `DateRangePicker` has changed. Returns the new value as an array `["from", "to"]` of ISOStrings.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [value, setValue] = useState(['', '']);
  return (
    <div style={{ minHeight: '27rem' }}>
      <DateRangePicker
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

export const daterangepicker = Template.bind({});
