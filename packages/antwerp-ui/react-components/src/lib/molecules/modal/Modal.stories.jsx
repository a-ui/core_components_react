import Modal from './Modal';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Button } from '../../atoms/button';

export default {
  title: 'React/Molecules/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          'Use a modal to focus the user’s attention on a single task or message while disabling the page content.'
      }
    }
  },
  args: {
    appRootId: 'root',
    ariaCloseLabel: 'Sluiten',
    children: 'Hello this is the content of the modal.',
    closeButton: true,
    title: { label: 'Modal Title' },
    confirmButton: {
      id: `aui-modal-confirm`,
      size: 'small',
      onClick: () => {
        return;
      },
      children: 'Annuleren'
    },
    cancelButton: {
      id: `aui-modal-cancel`,
      size: 'small',
      emphasis: 'medium',
      onClick: () => {
        return;
      },
      children: 'Annuleren'
    },
    trigger: <Button>Click me to open modal!</Button>,
    size: '',
    shouldCloseOnOverlayClick: true
  },
  argTypes: {
    appRootId: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'It is important for users of screenreaders that other page content be hidden (via the `aria-hidden` attribute) while the modal is open. To allow the component to do this, the application root ID should be provided.'
    },
    ariaCloseLabel: {
      control: { type: 'text' },
      description: 'Add `aria-label` for the close button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sluiten' }
      }
    },
    children: {
      control: {
        type: 'text'
      },
      description: 'Content of the `Modal` component.',
      table: {
        type: { summary: 'ReactNode' }
      }
    },
    closeButton: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description: 'Hide/show the close button.'
    },
    title: {
      table: {
        type: { summary: 'object' }
      },
      control: { type: 'object' },
      description:
        "The `title` prop sets the title for the card component. It has the following format `{ label: 'string', tag: 'h1', id: 'title ID', className: 'h3' }` (`tag` can be omitted for an 'h6' tag)."
    },
    confirmButton: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        "The `confirmButton` is an object which uses the `Button` component's props as attributes to create an action button in a `Modal`."
    },
    cancelButton: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      description:
        "The `cancelButton` is an object which uses the `Button` component's props as attributes to create an action button in a `Modal`."
    },
    trigger: {
      control: null,
      description: 'Custom trigger element (will open modal on click).',
      table: {
        type: { summary: 'ReactElement' },
        defaultValue: { summary: null }
      }
    },
    open: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description:
        'Open or close the modal. Makes the modal controlled and should be used together with `onClose`, `onCancel` and `onConfirm`.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['', 'large'],
      description: 'Modal size.'
    },
    shouldCloseOnOverlayClick: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description:
        'Controls whether or not the Modal should be closed when clicking outside of it. If there is no `confirmButton`, `cancelButton` or `closeButton` is set to false, then the `shouldCloseOnOverlayClick` is set to true by default.'
    },
    onClose: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClose',
      description: 'Close callback (called when overlay is clicked, esc or the close button is pressed).'
    },
    onAfterOpen: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onAfterOpen',
      description: 'Modal open callback, called after modal opening.'
    },
    qa: QA_PROP_STORY
  }
};

export const modal = '';
