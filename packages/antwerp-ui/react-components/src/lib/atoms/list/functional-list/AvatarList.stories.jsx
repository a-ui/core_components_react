import AvatarList from './AvatarList';
import ListItemAvatar from '../items/ListItemAvatar';
import { QA_PROP_STORY } from '../../../../constants/stories.settings';

ListItemAvatar.displayName = 'ListItemAvatar';
AvatarList.displayName = 'AvatarList';

export default {
  title: 'React/Atoms/List/AvatarList',
  component: AvatarList,
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
      <ListItemAvatar
        name="albert"
        user={{ name: 'Albert Einstein' }}
        avatar={{ letter: 'AE' }}
        active
        iconRight="navigation-menu-horizontal"
        id="albert"
        key="albert"
      />,
      <ListItemAvatar
        name="dog"
        user={{ name: 'A dog', function: 'Dog', email: 'dog@antwerpen.be' }}
        avatar={{ image: 'https://placedog.net/100/100?r' }}
        iconRight="navigation-menu-horizontal"
        id="dog"
        key="dog"
      />,
      <ListItemAvatar
        name="isaac"
        avatar={{ letter: 'IN' }}
        link={{ href: '#' }}
        user={{ name: 'Isaac Newton', email: 'isaac.newton@antwerpen.be' }}
        iconRight="navigation-menu-horizontal"
        id="isaac"
        key="isaac"
      />
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
      description: 'Use `ListItemAvatar` as the children of an `AvatarList` component.'
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

const Template = (args) => <AvatarList {...args} />;
export const avatarList = Template.bind({});
