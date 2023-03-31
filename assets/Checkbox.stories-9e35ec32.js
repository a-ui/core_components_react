var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{Q as s}from"./stories.settings-7ac24d87.js";import{C as a}from"./Checkbox-2e093fda.js";import{j as l}from"./jsx-runtime-bb315772.js";import{u as c}from"./hooks-b9a57b8f.js";import"./settings-4d2c475c.js";import"./dom.utils-1db2b487.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";const k={title:"React/Atoms/Checkbox",component:a,parameters:{storySource:{source:`import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Checkbox from './Checkbox';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'React/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'A checkbox allows for a user to select one or more explicit options from a list. They are ideal for allowing the selection of multiple options (for example for batch operations) or simply to provide a clear opt-in or opt-out decision. When there is a list of two or more options that are mutually exclusive and the user must select exactly one choice, then use radio buttons instead of checkboxes. Never combine a checkbox with a label containing other elements apart from text. For instance do not use text links in the label of a checkbox.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'I agree',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The \`Checkbox\` component has a \`label\` prop that is shown next to the checkbox.'
    },
    showLabel: {
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description: 'Set to false to hide the label (by adding \`u-screen-reader-only\` class to it).'
    },
    checked: {
      control: { type: 'boolean', disable: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description:
        'Checked state. When this prop is set, the \`Checkbox\` becomes a controlled component; use it together with \`onChange\`.'
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        "This will ensure that the checkbox cannot be interacted with; it's state cannot be changed by the user."
    },
    indeterminate: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        "Whenever a \`Checkbox\` is used to reflect a(n) '(un)select all'-type of behaviour for a group of components or other checkboxes, a third indeterminate-state is added."
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when the checkbox value has changed. First parameter of this function is of type \`(React).ChangeEvent\`.'
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'checkbox-example',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The \`id\` prop is required for the \`Checkbox\` component. It is used to link the label with the input tag.'
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'agree-checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        "The \`Checkbox\` component's \`name\` prop. The \`name\` prop in a checkbox is used to reference form data after it's submitted, and to reference the data on the client side."
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [{}, updateArgs] = useArgs();
  return (
    <Checkbox
      {...args}
      onChange={(e) => {
        args.onChange(e);
        updateArgs({ ...args, indeterminate: false, checked: e.target.checked });
      }}
    />
  );
};

export const checkbox = Template.bind({});
`,locationsMap:{checkbox:{startLoc:{col:17,line:98},endLoc:{col:1,line:109},startBody:{col:17,line:98},endBody:{col:1,line:109}}}},docs:{description:{component:"A checkbox allows for a user to select one or more explicit options from a list. They are ideal for allowing the selection of multiple options (for example for batch operations) or simply to provide a clear opt-in or opt-out decision. When there is a list of two or more options that are mutually exclusive and the user must select exactly one choice, then use radio buttons instead of checkboxes. Never combine a checkbox with a label containing other elements apart from text. For instance do not use text links in the label of a checkbox."}}},argTypes:{label:{control:{type:"text"},defaultValue:"I agree",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `Checkbox` component has a `label` prop that is shown next to the checkbox."},showLabel:{control:{type:"boolean"},defaultValue:!0,table:{type:{summary:"boolean"},defaultValue:{summary:!0}},description:"Set to false to hide the label (by adding `u-screen-reader-only` class to it)."},checked:{control:{type:"boolean",disable:!0},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},defaultValue:!1,description:"Checked state. When this prop is set, the `Checkbox` becomes a controlled component; use it together with `onChange`."},disabled:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"This will ensure that the checkbox cannot be interacted with; it's state cannot be changed by the user."},indeterminate:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Whenever a `Checkbox` is used to reflect a(n) '(un)select all'-type of behaviour for a group of components or other checkboxes, a third indeterminate-state is added."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the checkbox value has changed. First parameter of this function is of type `(React).ChangeEvent`."},id:{control:{type:"text"},defaultValue:"checkbox-example",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `id` prop is required for the `Checkbox` component. It is used to link the label with the input tag."},name:{control:{type:"text"},defaultValue:"agree-checkbox",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `Checkbox` component's `name` prop. The `name` prop in a checkbox is used to reference form data after it's submitted, and to reference the data on the client side."},qa:s}},i=n(e=>{const[{},t]=c();return l(a,{...e,onChange:o=>{e.onChange(o),t({...e,indeterminate:!1,checked:o.target.checked})}})},"Template"),g=i.bind({}),C=["checkbox"];export{C as __namedExportsOrder,g as checkbox,k as default};
//# sourceMappingURL=Checkbox.stories-9e35ec32.js.map
