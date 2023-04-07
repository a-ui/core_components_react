import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Tooltip from './Tooltip';

export default {
  title: 'React/Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          'A tooltip is a simple contextual popup that appears when users hover over, focus on, or tap an element.'
      }
    }
  },
  args: {
    text: 'Hello tooltip!',
    anchor: <p>Tooltip text</p>,
    anchorId: 'aui-tooltip-story',
    location: 'top'
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The text of the tooltip.'
    },
    anchor: {
      table: {
        type: { summary: 'ReactElement' }
      },
      description: 'React Element that serves as anchor for the tooltip to be displayed.'
    },
    anchorId: {
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'aui-tooltip' }
      },
      description: 'Required unique ID for the tooltip Anchor element. '
    },
    location: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' }
      },
      options: ['top', 'right', 'left', 'bottom'],
      description:
        'Defines where, relative to the element, the tooltip will be shown, if it fits. Can be omitted for `top` (default).'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
      <Tooltip key={JSON.stringify(args)} {...args} anchor={<span>Tooltip anchor text</span>} />
    </div>
  );
};

export const tooltip = Template.bind({});
