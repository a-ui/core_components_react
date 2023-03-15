var l=Object.defineProperty;var n=(e,t)=>l(e,"name",{value:t,configurable:!0});import{T as a}from"./Tag-ea8099d6.js";import{Q as r}from"./stories.settings-7ac24d87.js";import{j as i}from"./jsx-runtime-bb315772.js";import{u as s}from"./hooks-b9a57b8f.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./dom.utils-1db2b487.js";import"./Icon-53ae04fc.js";import"./settings-9292fabe.js";const v={title:"React/Molecules/Tag",component:a,parameters:{storySource:{source:`import Tag from './Tag';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'React/Molecules/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Tags are components that help filter content to the desired relevance.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'I am a Tag!',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'The \`label\` describes the \`Tag\` component.'
    },

    isToggle: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'The \`isToggle\` prop turns the Tag component into a toggle tag. A toggle tag always remains visible but can be toggled on or off. Toggle tags can never include a trailing icon, as they cannot be removed.'
    },
    active: {
      control: { type: 'boolean' },
      if: { arg: 'isToggle', truthy: true },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'This prop sets a toggle \`Tag\` component as \`active\`. This prop makes the \`Tag\` a controlled component and should be used together with \`onClick\`.'
    },
    iconLeft: {
      control: { type: 'select' },
      defaultValue: 'hammer-wench',
      options: [
        '',
        'tags',
        'tags-double',
        'hammer-wench',
        'headphones-customer-support-human',
        'professional-tool-dropbox'
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'A Tag component can include a leading icon.'
    },
    removable: {
      control: { type: 'boolean' },
      defaultValue: false,
      if: { arg: 'isToggle', truthy: false },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description:
        'A Tag component can include a trailing icon. The use of the trailing icon is reserved for an interactive icon action to remove the tag itself.'
    },
    onClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onClick',
      description:
        'Function triggered when the tag is clicked. First parameter of this function is of type \`(React).MouseEvent\`. Only available on tags with \`isToggle\` or \`removable\` enabled.'
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'aui-tag',
      table: {
        type: { summary: 'string' }
      },
      description:
        'The \`name\` prop is set on the button if the \`isToggle\` prop is true. It is also used for the name on the remove button (postfixed with \`-delete\`).'
    },
    ariaLabelDelete: {
      control: { type: 'text' },
      defaultValue: 'Delete',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Verwijderen' }
      },
      description: 'The \`aria-label\` for the delete icon button on removable tags.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [{}, updateArgs] = useArgs();
  return (
    <Tag
      {...args}
      onClick={(name) => {
        args.onClick(name);
        updateArgs({ ...args, active: args.isToggle ? !args.active : args.active });
      }}
    />
  );
};

export const tag = Template.bind({});
`,locationsMap:{tag:{startLoc:{col:17,line:106},endLoc:{col:1,line:117},startBody:{col:17,line:106},endBody:{col:1,line:117}}}},docs:{description:{component:"Tags are components that help filter content to the desired relevance."}}},argTypes:{label:{control:{type:"text"},defaultValue:"I am a Tag!",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `label` describes the `Tag` component."},isToggle:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `isToggle` prop turns the Tag component into a toggle tag. A toggle tag always remains visible but can be toggled on or off. Toggle tags can never include a trailing icon, as they cannot be removed."},active:{control:{type:"boolean"},if:{arg:"isToggle",truthy:!0},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"This prop sets a toggle `Tag` component as `active`. This prop makes the `Tag` a controlled component and should be used together with `onClick`."},iconLeft:{control:{type:"select"},defaultValue:"hammer-wench",options:["","tags","tags-double","hammer-wench","headphones-customer-support-human","professional-tool-dropbox"],table:{type:{summary:"string"},defaultValue:{summary:""}},description:"A Tag component can include a leading icon."},removable:{control:{type:"boolean"},defaultValue:!1,if:{arg:"isToggle",truthy:!1},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"A Tag component can include a trailing icon. The use of the trailing icon is reserved for an interactive icon action to remove the tag itself."},onClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"onClick",description:"Function triggered when the tag is clicked. First parameter of this function is of type `(React).MouseEvent`. Only available on tags with `isToggle` or `removable` enabled."},name:{control:{type:"text"},defaultValue:"aui-tag",table:{type:{summary:"string"}},description:"The `name` prop is set on the button if the `isToggle` prop is true. It is also used for the name on the remove button (postfixed with `-delete`)."},ariaLabelDelete:{control:{type:"text"},defaultValue:"Delete",table:{type:{summary:"string"},defaultValue:{summary:"Verwijderen"}},description:"The `aria-label` for the delete icon button on removable tags."},qa:r}},c=n(e=>{const[{},t]=s();return i(a,{...e,onClick:o=>{e.onClick(o),t({...e,active:e.isToggle?!e.active:e.active})}})},"Template"),V=c.bind({}),w=["tag"];export{w as __namedExportsOrder,v as default,V as tag};
//# sourceMappingURL=Tag.stories-cc979928.js.map
