import FunctionalList from './FunctionalList';
import { QA_PROP_STORY } from '../../../../constants/stories.settings';
import ListItem from '../items/ListItem';

export default {
  title: 'React/Atoms/List/FunctionalList',
  component: FunctionalList,
  parameters: {
    docs: {
      description: {
        component:
          'Use lists to better organise the text. A list breaks the information into manageable chunks, making the text easier to read for the user.'
      }
    }
  },
  args: {
    type: '',
    ordered: false,
    lined: true,
    flushed: false,
    children: [
      <ListItem id="1" key="1" name="first" active link={{ href: '#' }}>
        First active item
      </ListItem>,
      <ListItem id="2" key="2" name="second" iconLeft="mouse" iconRight="arrow-right-1" link={{ href: '#' }}>
        Second clickable item
      </ListItem>,
      <ListItem id="3" key="3" name="third">
        Third item
      </ListItem>
    ]
  },
  argTypes: {
    type: {
      control: false,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Set the type of list to `avatar` or `checkbox`. This transforms the `FunctionalList` in an avatar list or checkbox list. The components `AvatarList` and `CheckboxList` can be used as syntactic sugar.'
    },
    ordered: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The ordered prop switches the default unordered list to an ordered list.'
    },
    lined: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The `lined` prop add lines between the items of a list.'
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
      description:
        'A functional list can accept three types of children: `ListItem`, `ListItemAvatar` or `ListItemCheckbox`. Depending on what sort of children you use in the functional list, use the correct `type` prop.'
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

const Template = (args) => <FunctionalList {...args} />;
export const functionalList = Template.bind({});
