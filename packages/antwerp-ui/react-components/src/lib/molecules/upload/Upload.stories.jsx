import Upload from './Upload';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useState } from 'react';

Upload.displayName = 'Upload';

export default {
  title: 'React/Molecules/Upload',
  component: Upload,

  parameters: {
    docs: {
      description: {
        component: 'Whenever a user needs to upload one or more files, always use our custom upload component.'
      }
    }
  },
  args: {
    files: [],
    id: 'aui-upload-stories',
    label: 'Sleep een bestand hier of klik om te bladeren',
    multiple: true,
    disabled: false,
    acceptedFormat: '*',
    maxSize: 1,
    maxSizeLabel: 'Maximale bestandsgrootte:',
    formatErrorLabel: 'Dit bestandsformaat is niet toegestaan.',
    sizeErrorLabel: 'Maximale bestandsgrootte overschreden.',
    deleteAriaLabel: 'Verwijder bestand'
  },
  argTypes: {
    files: {
      control: null,
      table: {
        type: { summary: 'File[]' },
        defaultValue: { summary: '[]' }
      },
      description: 'List of files displayed under the `Upload` component.'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      description: "ID on input element. Make sure it's unique across all `Upload` components."
    },
    label: {
      control: { type: 'text' },
      description: 'Override default text of upload zone. This can be rich text (ReactElement).',
      table: {
        type: { summary: 'ReactElement | string' },
        defaultValue: { summary: 'Sleep een bestand hier of klik om te bladeren' }
      }
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Sets `multiple` attribute on `input`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the input.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    acceptedFormat: {
      control: { type: 'text' },
      description:
        'Allows to set accepted format. Should be MIME type or `.ext`, accepts wildcard when using MIME types, like `image/*`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '*' }
      }
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Sets maximum allowed size for single file (in MB). 10MB by default.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 }
      }
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Handler for change of uploaded files. Fires on native file input user action. Will pass array of all unique files. When `multiple=false` it will return an array with a single file. The second argument is an array of validations for the current files (`{validSize: boolean, validFormat: boolean}[]`).'
    },
    onDelete: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onDelete',
      description:
        'Handler for the deletion of uploaded files. Will pass the filtered files in argument (without the deleted one).'
    },
    maxSizeLabel: {
      control: { type: 'text' },
      description: 'Override default text of the maximum size notice.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte:' }
      }
    },
    formatErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the format error notice.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Dit bestandsformaat is niet toegestaan.' }
      }
    },
    sizeErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the size error notice.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte overschreden.' }
      }
    },
    deleteAriaLabel: {
      control: { type: 'text' },
      description: 'Override the `aria-label` attribute on the file removal button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Verwijder bestand' }
      }
    },
    qa: QA_PROP_STORY
  }
};
const Template = (args) => {
  const [files, setFiles] = useState([]);
  return (
    <Upload
      {...args}
      files={files}
      onChange={(f, v) => {
        args.onChange(f, v);
        setFiles(f);
      }}
      onDelete={(f) => {
        args.onDelete(f);
        setFiles(f);
      }}
    />
  );
};

export const upload = Template.bind({});
