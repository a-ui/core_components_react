import { Alert } from './Alert';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

/* eslint-disable-next-line */
const doNothing = () => {};

export default {
  title: 'React/Molecules/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Use an alert to keep the user informed of important, critical and sometimes time-sensitive issues.'
      }
    }
  },
  args: {
    title: { label: 'Alert title' },
    theme: '',
    inline: false,
    children:
      'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Sed posuere consectetur est at lobortis. Donec ullamcorper nulla non metus auctor fringilla.',
    confirmButton: {
      id: `title2-aui-alert-confirm`,
      size: 'small',
      theme: 'neutral',
      onClick: doNothing,
      children: 'OK'
    },
    cancelButton: {
      id: `title2-aui-alert-confirm`,
      size: 'small',
      theme: 'neutral',
      emphasis: 'medium',
      onClick: doNothing,
      children: 'Annuleren'
    },
    ariaLabelClose: 'Close',
    titleId: 'aui-alert-title'
  },
  argTypes: {
    title: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '' }
      },
      description:
        'The `title` prop is the required title of a modal alert or the optional descriptive title of an inline alert. It is an object in the form of `{ "label": "string", "tag": "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }`'
    },
    theme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['', 'success', 'warning', 'danger'],
      description:
        'Theme of the alert, by default the recognisable Antwerp “Endeavour”-blue theme is used. Additional themes for "success", "warning" and "danger" use their own corresponding thematic colours as defined in the colour palette for those states and are accompanied by clarifying leading icons.'
    },
    inline: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description: 'Use this prop to indicate if the alert should be presented as an inline or modal type window.'
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode' }
      },
      description: 'Rich text (HTML) / string to be shown as content inside the `Alert` component.'
    },
    confirmButton: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      if: { arg: 'inline', truthy: false },
      description:
        "The `confirmButton` is an object which uses the `Button` component's props as attributes to create an action button in a modal `Alert`."
    },
    cancelButton: {
      control: { type: 'object' },
      table: {
        type: { summary: 'object' }
      },
      if: { arg: 'inline', truthy: false },
      description:
        "The `cancelButton` is an object which uses the `Button` component's props as attributes to create an action button in a modal `Alert`."
    },
    onClose: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      if: { arg: 'inline', truthy: false },
      action: 'onClose',
      description: 'Function that is triggered when the modal alert is closed (i.e. the close button is clicked).'
    },
    ariaLabelClose: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Sluiten' }
      },
      if: { arg: 'inline', truthy: false },
      description: 'The aria label used on the close icon when a modal alert is used.'
    },
    titleId: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: 'The `titleId` prop is the id of the title that is also used in the `aria-labelledby` attribute.'
    },
    qa: QA_PROP_STORY
  }
};

export const alert = '';
