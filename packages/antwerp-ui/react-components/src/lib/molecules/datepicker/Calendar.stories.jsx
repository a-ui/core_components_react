import Calendar from './Calendar';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: 'Calendar component used in the DatePicker.'
      }
    }
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description: 'Setting the `isOpen` prop to true opens the `Calendar` component.'
    },
    unavailable: {
      control: { type: 'array' },
      defaultValue: [new Date(Date.now() - 86400000)],
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      description:
        'The `unavailable` prop contains an array of dates that are unavailable. The dates in the `unavaiable` array are in ISO format.'
    },
    unavailableTo: {
      control: { type: 'date' },
      defaultValue: new Date(Date.now() - 691200000),
      table: {
        type: { summary: 'Date' }
      },
      description: 'The `unavailableTo` prop makes all of the dates before it unavailable.'
    },
    unavailableFrom: {
      control: { type: 'date' },
      defaultValue: new Date(Date.now() + 691200000),
      table: {
        type: { summary: 'Date' }
      },
      description: 'The `unavailableFrom` prop makes all of the dates after it unavailable.'
    },
    value: {
      control: { type: 'date' },
      defaultValue: new Date(Date.now() + 86400000),
      table: {
        type: { summary: 'Date' }
      },
      description:
        'The `value` prop of the `Calendar`. Setting it makes the component controlled; use it in combination with `onChange`.'
    },
    onBlur: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onBlur',
      description:
        'Function triggered when the `Calendar` is blurred. The first parameter of this function is of type `(React).FocusEvent`.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the value of the `Calendar` has changed. Returns the new value as ISOString.'
    },
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: 'Kalender',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Kalender' }
      },
      description: 'The `ariaLabel` describes an accessible name for the `Calendar` component.'
    },
    ariaLabelCurrentDay: {
      control: { type: 'text' },
      defaultValue: 'Huidige dag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Huidige dag' }
      },
      description:
        'The `ariaLabelCurrentDay` describes an accessible name for the current day in the `Calendar` component.'
    },
    ariaLabelPreviousMonth: {
      control: { type: 'text' },
      defaultValue: 'Ga naar de vorige maand',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar de vorige maand' }
      },
      description:
        'The `ariaLabelPreviousMonth` describes an accessible name for the `previous month` button in the `Calendar` component.'
    },
    ariaLabelPreviousYear: {
      control: { type: 'text' },
      defaultValue: 'Ga naar het vorig jaar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar het vorig jaar' }
      },
      description:
        'The `ariaLabelPreviousYear` describes an accessible name for the `previous year` button in the `Calendar` component.'
    },
    ariaLabelPreviousYears: {
      control: { type: 'text' },
      defaultValue: 'Ga naar de voorgaande jaren',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar de voorgaande jaren' }
      },
      description:
        'The `ariaLabelPreviousYears` describes an accessible name for the `previous years` button in the `Calendar` component.'
    },
    ariaLabelNextMonth: {
      control: { type: 'text' },
      defaultValue: 'Ga naar de volgende maand',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar de volgende maand' }
      },
      description:
        'The `ariaLabelNextMonth` describes an accessible name for the `next month` button in the `Calendar` component.'
    },
    ariaLabelNextYear: {
      control: { type: 'text' },
      defaultValue: 'Ga naar het volgend jaar',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar het volgend jaar' }
      },
      description:
        'The `ariaLabelNextYear` describes an accessible name for the `next year` button in the `Calendar` component.'
    },
    ariaLabelNextYears: {
      control: { type: 'text' },
      defaultValue: 'Ga naar de volgende jaren',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Ga naar de volgende jaren' }
      },
      description:
        'The `ariaLabelNextYears` describes an accessible name for the `next years` button in the `Calendar` component.'
    },
    qa: QA_PROP_STORY
  }
};

export const calendar = '';
