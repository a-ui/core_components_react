var l=Object.defineProperty;var e=(t,a)=>l(t,"name",{value:a,configurable:!0});import{B as o}from"./Button-f7429449.js";import{c as p}from"./dom.utils-bd8c7a66.js";import{j as n,a as u}from"./jsx-runtime-bb315772.js";import{Q as c}from"./stories.settings-7ac24d87.js";import"./layout.settings-9902fce9.js";import"./render.utils-ff559992.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./Avatar-2e303d21.js";import"./settings-b450e1f6.js";import"./Icon-3790c0ed.js";import"./log.utils-f56af116.js";import"./Spinner-17b794e8.js";function r({children:t,vertical:a,qa:i}){const s=p({"m-button-group":!0,"m-button-group--vertical":!!a});return n("div",{className:s,"data-qa":i,children:t})}e(r,"ButtonGroup");const x={title:"React/Molecules/ButtonGroup",component:r,parameters:{storySource:{source:`import { Button } from '../../atoms/button';
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
  args: {
    vertical: false
  },
  argTypes: {
    vertical: {
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
`,locationsMap:{"button-group":{startLoc:{col:17,line:31},endLoc:{col:1,line:38},startBody:{col:17,line:31},endBody:{col:1,line:38}}}},docs:{description:{component:"The `ButtonGroup` component wraps its children in a div with the `m-button-group` className."}}},args:{vertical:!1},argTypes:{vertical:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Buttons in a `ButtonGroup` can be aligned horizontally (default) or vertically as a list."},qa:c}},m=e(({...t})=>u(r,{...t,children:[n(o,{addOn:{type:"avatar",avatarProps:{image:"https://placedog.net/100/100?r"}},children:"Avatar button"}),n(o,{addOn:{type:"icon",align:"left",iconProps:{name:"archive"}},children:"Icon left"}),n(o,{addOn:{type:"icon",align:"right",iconProps:{name:"archive"}},children:"Icon right"}),n(o,{outline:!0,children:"Outline"})]}),"Template"),A=m.bind({}),w=["buttonGroup"];export{w as __namedExportsOrder,A as buttonGroup,x as default};
//# sourceMappingURL=ButtonGroup.stories-04246d79.js.map
