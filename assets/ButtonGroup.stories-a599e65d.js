var l=Object.defineProperty;var a=(t,e)=>l(t,"name",{value:e,configurable:!0});import{B as n}from"./Button-16bbd0a8.js";import{c as s}from"./dom.utils-1db2b487.js";import{j as o,a as p}from"./jsx-runtime-bb315772.js";import{Q as c}from"./stories.settings-7ac24d87.js";import"./layout.settings-9902fce9.js";import"./render.utils-a6f7fcbc.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./Avatar-c0311054.js";import"./settings-4d2c475c.js";import"./Icon-597278d2.js";import"./Spinner-2995a70f.js";import"./log.utils-f56af116.js";function r({children:t,vertical:e,qa:i}){const u=s({"m-button-group":!0,"m-button-group--vertical":!!e});return o("div",{className:u,"data-qa":i,children:t})}a(r,"ButtonGroup");const x={title:"React/Molecules/ButtonGroup",component:r,parameters:{storySource:{source:`import { Button } from '../../atoms/button';
import ButtonGroup from './ButtonGroup';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    docs: {
      description: {
        component: 'The \`ButtonGroup\` component wraps its children in a div with the \`m-button-group\` className.'
      }
    }
  },
  argTypes: {
    vertical: {
      defaultValue: false,
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      },
      description: 'Buttons in a \`ButtonGroup\` can be aligned horizontally (default) or vertically as a list.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => (
  <ButtonGroup {...args}>
    <Button addOn={{ type: 'avatar', avatarProps: { image: 'https://placedog.net/100/100?r' } }}>Avatar button</Button>
    <Button addOn={{ type: 'icon', align: 'left', iconProps: { name: 'archive' } }}>Icon left</Button>
    <Button addOn={{ type: 'icon', align: 'right', iconProps: { name: 'archive' } }}>Icon right</Button>
    <Button outline>Outline</Button>
  </ButtonGroup>
);

export const buttonGroup = Template.bind({});
`,locationsMap:{"button-group":{startLoc:{col:17,line:29},endLoc:{col:1,line:36},startBody:{col:17,line:29},endBody:{col:1,line:36}}}},docs:{description:{component:"The `ButtonGroup` component wraps its children in a div with the `m-button-group` className."}}},argTypes:{vertical:{defaultValue:!1,control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Buttons in a `ButtonGroup` can be aligned horizontally (default) or vertically as a list."},qa:c}},m=a(({...t})=>p(r,{...t,children:[o(n,{addOn:{type:"avatar",avatarProps:{image:"https://placedog.net/100/100?r"}},children:"Avatar button"}),o(n,{addOn:{type:"icon",align:"left",iconProps:{name:"archive"}},children:"Icon left"}),o(n,{addOn:{type:"icon",align:"right",iconProps:{name:"archive"}},children:"Icon right"}),o(n,{outline:!0,children:"Outline"})]}),"Template"),A=m.bind({}),w=["buttonGroup"];export{w as __namedExportsOrder,A as buttonGroup,x as default};
//# sourceMappingURL=ButtonGroup.stories-a599e65d.js.map
