import ProgressBar from './ProgressBar';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'A progress indicator communicates to the user that they have to wait for a page, element of functionality to complete loading or processing a task before they can access it.'
      }
    }
  },
  args: {
    percentage: 10,
    large: false,
    label: 'Downloading...',
    minValue: 0,
    maxValue: 100,
    showLabel: true
  },
  argTypes: {
    percentage: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description: 'Current width in percentage; value from 0 to 100.'
    },
    large: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Set the size of the bar to `large`.'
    },
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Label of the progress bar.'
    },
    ariaValueNow: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      },
      description: 'Use this prop to override the `aria-valuenow`, if not set the `percentage` prop is used.'
    },
    minValue: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
      },
      description: 'Use this prop to set the `aria-valuemin` attribute.'
    },
    maxValue: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      },
      description: 'Use this prop to set the `aria-valuemax` attribute.'
    },
    showLabel: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description: 'Set to false to hide the label (by replacing it with an `aria-label`).'
    },
    labelId: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-progress-label' }
      },
      description: 'Id of the label, used by `aria-labelledby`.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <ProgressBar {...args} />;
export const progressBar = Template.bind({});
