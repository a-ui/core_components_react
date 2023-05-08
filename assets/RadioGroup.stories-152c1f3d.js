var y=Object.defineProperty;var t=(e,r)=>y(e,"name",{value:r,configurable:!0});import{r as l}from"./index-d23035ce.js";import{Q as b}from"./stories.settings-7ac24d87.js";import{R as a}from"./Radio-155ed071.js";import{c as f}from"./dom.utils-bd8c7a66.js";import{a as u,j as n}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";function c({label:e,name:r,children:d=[],value:i,qa:m,onChange:s}){const h=t(o=>{var p;return s&&s((p=o.target)==null?void 0:p.value)},"handleChange"),g=f({"a-input":!0});return u("fieldset",{className:g,"data-qa":m,children:[n("legend",{className:"a-input__label",children:e}),l.exports.Children.map(d,o=>l.exports.cloneElement(o,{name:r,onChange:h,...i?{checked:o.props.value===i}:{},...o.props}))]})}t(c,"RadioGroup");const C={title:"React/Atoms/Radios/Group",component:c,parameters:{storySource:{source:`import React from 'react';
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
  args: {
    label: 'Choose your fighter',
    value: '',
    name: 'fighter-selection'
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'An optional label for the \`RadioGroup\` component.'
    },
    value: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description:
        'The value is a prop to control the \`Radio\` that is checked within the \`RadioGroup\` component. This prop makes the \`RadioGroup\` a controlled component and should be used together with \`onChange\`.'
    },
    name: {
      control: { type: 'text' },
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
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function triggered when an option is selected. The first parameter of this function is the selected value as \`string\`.'
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
`,locationsMap:{group:{startLoc:{col:17,line:62},endLoc:{col:1,line:69},startBody:{col:17,line:62},endBody:{col:1,line:69}}}},docs:{description:{component:"The RadioGroup component is used in conjunction with the Radio component to provide users with selectable options. Use radio buttons when users can only select one option from a list of presented choices. Do not use radio buttons if the users need to select more than one option. In this case, use checkboxes instead."}}},args:{label:"Choose your fighter",value:"",name:"fighter-selection"},argTypes:{label:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"An optional label for the `RadioGroup` component."},value:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The value is a prop to control the `Radio` that is checked within the `RadioGroup` component. This prop makes the `RadioGroup` a controlled component and should be used together with `onChange`."},name:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The `name` prop is used to group radio buttons together. Once the radio group is created, selecting any radio button in that group automatically deselects any other selected radio button in the same group. You can have as many radio groups on a page as you want, as long as each group has its own name."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when an option is selected. The first parameter of this function is the selected value as `string`."},qa:b}},R=t(({...e})=>u(c,{...e,children:[n(a,{value:"Scorpion",label:"Scorpion",id:"first-option"}),n(a,{value:"Raiden",label:"Raiden",id:"second-option"}),n(a,{value:"Sub-Zero",label:"Sub-Zero",id:"third-option"}),n(a,{value:"None",label:"None",id:"fourth-option"})]}),"Template"),O=R.bind({}),k=["Group"];export{O as Group,k as __namedExportsOrder,C as default};
//# sourceMappingURL=RadioGroup.stories-152c1f3d.js.map
