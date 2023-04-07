import CheckboxList from './CheckboxList';
import { QA_PROP_STORY } from '../../../../constants/stories.settings';
import ListItemCheckbox from '../items/ListItemCheckbox';

export default {
  title: 'React/Atoms/List/CheckboxList',
  component: CheckboxList,
  parameters: {
    docs: {
      description: {
        component:
          'Use lists to better organise the text. A list breaks the information into manageable chunks, making the text easier to read for the user.'
      }
    }
  },
  args: {
    ordered: false,
    flushed: false,
    children: [
      <ListItemCheckbox name="checkbox-1" id="checkbox-1" key="checkbox-1" label="First item" />,
      <ListItemCheckbox name="checkbox-2" id="checkbox-2" key="checkbox-2" label="Second item" />
    ]
  },
  argTypes: {
    ordered: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The ordered prop switches the default unordered list to an ordered list.'
    },
    flushed: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The `flushed` prop removes the top and bottom lines of a lined list. '
    },
    children: {
      control: false,
      table: {
        type: { summary: 'ReactElement[]' }
      },
      description: 'Use `ListItemCheckbox` as the children of an `CheckboxList` component.'
    },
    onItemClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onItemClick',
      description:
        'Function triggered when a list item is clicked. First parameter of this function the `name` prop of the `ListItem`. It can be overriden by `onClick` prop on the item self.'
    },
    qa: QA_PROP_STORY
  }
};

export const checkboxList = '';
