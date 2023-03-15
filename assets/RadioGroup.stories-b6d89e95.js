var f=Object.defineProperty;var n=(e,i)=>f(e,"name",{value:i,configurable:!0});import{r as l}from"./index-d23035ce.js";import{Q as y}from"./stories.settings-7ac24d87.js";import{R as a}from"./Radio-155ed071.js";import{c as b}from"./dom.utils-1db2b487.js";import{a as p,j as t}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";function c({label:e,name:i,children:d=[],value:r,qa:m,onChange:s}){const h=n(o=>{var u;return s&&s((u=o.target)==null?void 0:u.value)},"handleChange"),g=b({"a-input":!0});return p("fieldset",{className:g,"data-qa":m,children:[t("legend",{className:"a-input__label",children:e}),l.exports.Children.map(d,o=>l.exports.cloneElement(o,{name:i,onChange:h,...r?{checked:o.props.value===r}:{},...o.props}))]})}n(c,"RadioGroup");const _={title:"React/Atoms/Radios/Group",component:c,parameters:{storySource:{source:`import React from 'react';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

export default {
  title: 'React/Atoms/Radios/Group',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The RadioGroup component is used in conjunction with the Radio component to provide users with selectable options. Use radio buttons when users can only select one option from a list of presented choices. Do not use radio buttons if the users need to select more than one option. In this case, use checkboxes instead.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Choose your fighter',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'An optional label for the \`RadioGroup\` component.'
    },
    value: {
      control: { type: 'text' },
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The value is a prop to control the \`Radio\` that is checked within the \`RadioGroup\` component. This prop makes the \`RadioGroup\` a controlled component and should be used together with \`onChange\`.'
    },
    name: {
      control: { type: 'text' },
      defaultValue: 'fighter-selection',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The \`name\` prop is used to group radio buttons together. Once the radio group is created, selecting any radio button in that group automatically deselects any other selected radio button in the same group. You can have as many radio groups on a page as you want, as long as each group has its own name.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' },
      },
      action: 'onChange',
      description: 'Function triggered when an option is selected. The first parameter of this function is the selected value as \`string\`.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => (
  <RadioGroup {...args}>
    <Radio value="Scorpion" label="Scorpion" id="first-option" />
    <Radio value="Raiden" label="Raiden" id="second-option" />
    <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
    <Radio value="None" label="None" id="fourth-option" />
  </RadioGroup>
);

export const Group = Template.bind({});
`,locationsMap:{group:{startLoc:{col:17,line:59},endLoc:{col:1,line:66},startBody:{col:17,line:59},endBody:{col:1,line:66}}}},docs:{description:{component:"The RadioGroup component is used in conjunction with the Radio component to provide users with selectable options. Use radio buttons when users can only select one option from a list of presented choices. Do not use radio buttons if the users need to select more than one option. In this case, use checkboxes instead."}}},argTypes:{label:{control:{type:"text"},defaultValue:"Choose your fighter",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"An optional label for the `RadioGroup` component."},value:{control:{type:"text"},defaultValue:"",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The value is a prop to control the `Radio` that is checked within the `RadioGroup` component. This prop makes the `RadioGroup` a controlled component and should be used together with `onChange`."},name:{control:{type:"text"},defaultValue:"fighter-selection",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `name` prop is used to group radio buttons together. Once the radio group is created, selecting any radio button in that group automatically deselects any other selected radio button in the same group. You can have as many radio groups on a page as you want, as long as each group has its own name."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when an option is selected. The first parameter of this function is the selected value as `string`."},qa:y}},R=n(({...e})=>p(c,{...e,children:[t(a,{value:"Scorpion",label:"Scorpion",id:"first-option"}),t(a,{value:"Raiden",label:"Raiden",id:"second-option"}),t(a,{value:"Sub-Zero",label:"Sub-Zero",id:"third-option"}),t(a,{value:"None",label:"None",id:"fourth-option"})]}),"Template"),C=R.bind({}),O=["Group"];export{C as Group,O as __namedExportsOrder,_ as default};
//# sourceMappingURL=RadioGroup.stories-b6d89e95.js.map
