import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Button from './Button';

Button.displayName = 'Button';

export default {
  title: 'React/Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Buttons are the primary call-to-action components by which we allow users to take action. Buttons are used for actions that affect the front-end or back-end.'
      }
    }
  },
  args: {
    fullWidth: false,
    children: 'Click me',
    disabled: false
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `id` attribute of the rendered HTML button.'
    },
    title: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `title` attribute of the rendered HTML button.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['small', 'medium', 'large'],
      description: 'Set the size of the button, `medium` is the default and can be omitted.'
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Set the state of the button to disabled.'
    },
    emphasis: {
      control: { type: 'select' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'high' }
      },
      options: ['high', 'medium', 'low'],
      description: 'Set the button emphasis to high (default type), medium (outlined type) or low (transparent type).'
    },
    theme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'Buttons can also be themed to reflect the context in which they are being use. (High emphasis buttons are not available in the neutral theme).',
      options: ['success', 'warning', 'danger', 'neutral']
    },
    fullWidth: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The button can have a scalable width and take up the full width of the parent container.'
    },
    addOn: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'Set the add-on inside the button. The `addOn` prop is an object with following fields _{type: "avatar" | "icon" | "spinner", align?: "left" | "center" | "right", avatarProps?: AvatarProps, iconProps?: IconProps }_. The default align is `center` and makes the button an icon button.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'clicked',
      description: 'Function that is triggered when the button is clicked.'
    },
    link: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        'Transforms the button into a link (<a>). The `link` prop is an object with following fields _{href: string, target?: string }_. `href` is required. When rendered as a link, the `onClick` and `disabled` props are ignored.'
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode | string' }
      },
      description: 'React Node(s) inside the button component.'
    },
    htmlType: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' }
      },
      description: 'The (HTML) type of the button. Can be `button`, `submit` or `reset`.',
      options: ['button', 'submit', 'reset']
    },
    ariaLabel: {
      table: {
        type: { summary: 'string' }
      },
      control: { type: 'text' },
      description: 'The `ariaLabel` describes an accessible name for the avatar component. Required for icon buttons.'
    },
    renderLinkFunction: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      description:
        'Optional (custom) link renderer; allows to override the way links are rendered (if an `href` is provided). This is useful when using a routing framework (like React Router). The first parameter of this function is a `Link` object, with fields `label`, `href` and target. The second parameter is all the other props (class, ...). Example: `renderLinkFunction={(link, props) => <Link to={link.href} target={link.target} {...props}>{link.label}</Link>}`.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => <Button {...args} />;
export const button = Template.bind({});
