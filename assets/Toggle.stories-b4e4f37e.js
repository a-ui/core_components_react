var I=Object.defineProperty;var l=(e,a)=>I(e,"name",{value:a,configurable:!0});import{r as R}from"./index-d23035ce.js";import{Q as A}from"./stories.settings-7ac24d87.js";import{S as f,D as b}from"./layout.settings-9902fce9.js";import{c as k}from"./dom.utils-1db2b487.js";import{I as T}from"./Icon-597278d2.js";import{j as n,a as i}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-4d2c475c.js";function u({checked:e,checkedTheme:a,checkedIcon:o,checkedLabel:s,id:V,onClick:m,qa:C,showLabels:t,size:r,uncheckedTheme:x,uncheckedIcon:c,uncheckedLabel:d}){const _=l(()=>{m&&m(!e)},"handleClick"),w=k({"a-toggle":!0,[`a-toggle--${f[r||b]}`]:!!r}),p=l((g,y,h)=>k({"a-button":!0,[`a-button--${f[r||b]}`]:!!r,[`a-button--${g}`]:!!g,"has-icon-left":!!t&&!!y,"has-icon":!t&&!!y,[`a-toggle__${h}`]:!!h}),"buttonClasses"),S=p(a,o,"on"),v=p(x,c,"off");return n("div",{className:w,"data-qa":C,children:i("button",{className:"a-toggle__button",id:V,"aria-expanded":e,onClick:_,children:[i("span",{className:S,children:[o?n(T,{name:o,screenReaderText:t?"":s}):null,t&&n("span",{className:"a-toggle__label",children:s})]}),i("span",{className:v,children:[c?n(T,{name:c,screenReaderText:t?"":d}):null,t&&n("span",{className:"a-toggle__label",children:d})]})]})})}l(u,"Toggle");u.defaultProps={id:"",checked:!1,checkedLabel:"",checkedTheme:"",showLabels:!1,uncheckedLabel:"",uncheckedTheme:"danger"};const Y={title:"React/Atoms/Toggle",component:u,parameters:{storySource:{source:`import { useState } from 'react';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import Toggle from './Toggle';

export default {
  title: 'React/Atoms/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'A toggle button is a button that has two states and triggers another element which is not part of the toggle.'
      }
    }
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      defaultValue: '',
      description: 'ID for \`Toggle\` component.'
    },
    checked: {
      control: { type: 'boolean', disable: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      defaultValue: false,
      description: 'Toggles between the two toggle states.'
    },
    showLabels: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      defaultValue: true,
      description: 'Controls if labels are shown or not.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'small', 'large'],
      defaultValue: '',
      description: 'Sets the size of the component. Can be omitted for medium.'
    },
    checkedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'Open',
      description: 'Text in checked state label.'
    },
    uncheckedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: 'Close',
      description: 'Text in unchecked state label.'
    },
    checkedIcon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['navigation-menu', 'single-neutral', 'social-media-snapchat', 'os-system-apple', 'love-it'],
      defaultValue: 'navigation-menu',
      description: 'Icon in checked state.'
    },
    uncheckedIcon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      defaultValue: 'close',
      options: ['close', 'mouse', 'list-bullets', 'os-system-apple', 'love-it'],
      description: 'Icon in unchecked state.'
    },
    checkedTheme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      defaultValue: '',
      description: 'Theme of the button in checked state.'
    },
    uncheckedTheme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
      defaultValue: 'danger',
      description: 'Theme of the button in unchecked state.'
    },
    onClick: {
      table: {
        type: { summary: 'function' }
      },
      description: 'Click handler, (checked: boolean) => void.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return (
    <Toggle
      {...args}
      onClick={(...params) => {
        args.onClick(...params);
        setChecked(...params);
      }}
      checked={checked}
    />
  );
};

export const toggle = Template.bind({});
`,locationsMap:{toggle:{startLoc:{col:17,line:120},endLoc:{col:1,line:132},startBody:{col:17,line:120},endBody:{col:1,line:132}}}},docs:{description:{component:"A toggle button is a button that has two states and triggers another element which is not part of the toggle."}}},argTypes:{id:{control:{type:"text"},table:{defaultValue:{summary:""},type:{summary:"string"}},defaultValue:"",description:"ID for `Toggle` component."},checked:{control:{type:"boolean",disable:!0},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},defaultValue:!1,description:"Toggles between the two toggle states."},showLabels:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},defaultValue:!0,description:"Controls if labels are shown or not."},size:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["","small","large"],defaultValue:"",description:"Sets the size of the component. Can be omitted for medium."},checkedLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},defaultValue:"Open",description:"Text in checked state label."},uncheckedLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},defaultValue:"Close",description:"Text in unchecked state label."},checkedIcon:{control:{type:"select"},table:{type:{summary:"string"}},options:["navigation-menu","single-neutral","social-media-snapchat","os-system-apple","love-it"],defaultValue:"navigation-menu",description:"Icon in checked state."},uncheckedIcon:{control:{type:"select"},table:{type:{summary:"string"}},defaultValue:"close",options:["close","mouse","list-bullets","os-system-apple","love-it"],description:"Icon in unchecked state."},checkedTheme:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["","primary","success","warning","danger"],defaultValue:"",description:"Theme of the button in checked state."},uncheckedTheme:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["","primary","success","warning","danger"],defaultValue:"danger",description:"Theme of the button in unchecked state."},onClick:{table:{type:{summary:"function"}},description:"Click handler, (checked: boolean) => void."},qa:A}},P=l(e=>{const[a,o]=R.exports.useState(e.checked??!1);return n(u,{...e,onClick:(...s)=>{e.onClick(...s),o(...s)},checked:a})},"Template"),B=P.bind({}),M=["toggle"];export{M as __namedExportsOrder,Y as default,B as toggle};
//# sourceMappingURL=Toggle.stories-b4e4f37e.js.map
