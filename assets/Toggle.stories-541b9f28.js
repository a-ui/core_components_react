var v=Object.defineProperty;var c=(e,o)=>v(e,"name",{value:o,configurable:!0});import{r as L}from"./index-d23035ce.js";import{Q as R}from"./stories.settings-7ac24d87.js";import{S as b,D as k}from"./layout.settings-9902fce9.js";import{c as f}from"./dom.utils-bd8c7a66.js";import{I as T}from"./Icon-859096df.js";import{j as n,a as i}from"./jsx-runtime-bb315772.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-2cad0569.js";import"./log.utils-f56af116.js";function m({checked:e,checkedTheme:o,checkedIcon:a,checkedLabel:s,id:C,onClick:d,qa:x,showLabels:t,size:l,uncheckedTheme:_,uncheckedIcon:r,uncheckedLabel:u}){const V=c(()=>{d&&d(!e)},"handleClick"),w=f({"a-toggle":!0,[`a-toggle--${b[l||k]}`]:!!l}),p=c((g,h,y)=>f({"a-button":!0,[`a-button--${b[l||k]}`]:!!l,[`a-button--${g}`]:!!g,"has-icon-left":!!t&&!!h,"has-icon":!t&&!!h,[`a-toggle__${y}`]:!!y}),"buttonClasses"),I=p(o,a,"on"),S=p(_,r,"off");return n("div",{className:w,"data-qa":x,children:i("button",{className:"a-toggle__button",id:C,"aria-expanded":e,onClick:V,children:[i("span",{className:I,children:[a?n(T,{name:a,screenReaderText:t?"":s}):null,t&&n("span",{className:"a-toggle__label",children:s})]}),i("span",{className:S,children:[r?n(T,{name:r,screenReaderText:t?"":u}):null,t&&n("span",{className:"a-toggle__label",children:u})]})]})})}c(m,"Toggle");m.defaultProps={id:"",checked:!1,checkedLabel:"",checkedTheme:"",showLabels:!1,uncheckedLabel:"",uncheckedTheme:"danger"};const Y={title:"React/Atoms/Toggle",component:m,parameters:{storySource:{source:`import { useState } from 'react';
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
  args: {
    id: '',
    checked: false,
    showLabels: true,
    size: '',
    checkedLabel: 'Open',
    uncheckedLabel: 'Close',
    checkedIcon: 'navigation-menu',
    uncheckedIcon: 'close',
    checkedTheme: '',
    uncheckedTheme: 'danger'
  },
  argTypes: {
    id: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' }
      },
      description: 'ID for \`Toggle\` component.'
    },
    checked: {
      control: { type: 'boolean', disable: true },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'Toggles between the two toggle states.'
    },
    showLabels: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      },
      description: 'Controls if labels are shown or not.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'small', 'large'],
      description: 'Sets the size of the component. Can be omitted for medium.'
    },
    checkedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Text in checked state label.'
    },
    uncheckedLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Text in unchecked state label.'
    },
    checkedIcon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['navigation-menu', 'single-neutral', 'social-media-snapchat', 'os-system-apple', 'love-it'],
      description: 'Icon in checked state.'
    },
    uncheckedIcon: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
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
      description: 'Theme of the button in checked state.'
    },
    uncheckedTheme: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      options: ['', 'primary', 'success', 'warning', 'danger'],
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
`,locationsMap:{toggle:{startLoc:{col:17,line:122},endLoc:{col:1,line:134},startBody:{col:17,line:122},endBody:{col:1,line:134}}}},docs:{description:{component:"A toggle button is a button that has two states and triggers another element which is not part of the toggle."}}},args:{id:"",checked:!1,showLabels:!0,size:"",checkedLabel:"Open",uncheckedLabel:"Close",checkedIcon:"navigation-menu",uncheckedIcon:"close",checkedTheme:"",uncheckedTheme:"danger"},argTypes:{id:{control:{type:"text"},table:{defaultValue:{summary:""},type:{summary:"string"}},description:"ID for `Toggle` component."},checked:{control:{type:"boolean",disable:!0},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Toggles between the two toggle states."},showLabels:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},description:"Controls if labels are shown or not."},size:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["","small","large"],description:"Sets the size of the component. Can be omitted for medium."},checkedLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Text in checked state label."},uncheckedLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Text in unchecked state label."},checkedIcon:{control:{type:"select"},table:{type:{summary:"string"}},options:["navigation-menu","single-neutral","social-media-snapchat","os-system-apple","love-it"],description:"Icon in checked state."},uncheckedIcon:{control:{type:"select"},table:{type:{summary:"string"}},options:["close","mouse","list-bullets","os-system-apple","love-it"],description:"Icon in unchecked state."},checkedTheme:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["","primary","success","warning","danger"],description:"Theme of the button in checked state."},uncheckedTheme:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},options:["","primary","success","warning","danger"],description:"Theme of the button in unchecked state."},onClick:{table:{type:{summary:"function"}},description:"Click handler, (checked: boolean) => void."},qa:R}},A=c(e=>{const[o,a]=L.exports.useState(e.checked??!1);return n(m,{...e,onClick:(...s)=>{e.onClick(...s),a(...s)},checked:o})},"Template"),B=A.bind({}),M=["toggle"];export{M as __namedExportsOrder,Y as default,B as toggle};
//# sourceMappingURL=Toggle.stories-541b9f28.js.map
