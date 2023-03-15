var v=Object.defineProperty;var o=(n,i)=>v(n,"name",{value:i,configurable:!0});import{F as p,L as r}from"./ListItem-3178cf9d.js";import{Q as g}from"./stories.settings-7ac24d87.js";import{c as k}from"./dom.utils-1db2b487.js";import{I as x}from"./Icon-53ae04fc.js";import{A as I}from"./Avatar-285c67d7.js";import{j as e,a as l}from"./jsx-runtime-bb315772.js";import{C as A}from"./Checkbox-653c440b.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-9292fabe.js";import"./layout.settings-9902fce9.js";function c({avatar:n,name:i,link:a,active:s,user:t,iconRight:m,onClick:d,qa:f}){const b=`${a&&(a.href||a.href==="")?"a":"span"}`,y=k({"a-avatar-list__item":!0,"is-active":!!s});return e("li",{className:y,"data-qa":f,children:l(b,{className:"a-avatar-list__item-container",onClick:o(L=>{d&&(L.preventDefault(),d(i))},"onLinkClick"),...a&&(a.href||a.href==="")?{href:a.href}:{},children:[e(I,{...n,className:"a-avatar-list__avatar",rounded:!0,size:"small"}),l("div",{className:"a-avatar-list__content",children:[l("span",{className:"a-avatar-list__text",children:[t!=null&&t.name?e("span",{className:"avatar-list__name paragraph",children:t.name}):null,t!=null&&t.function?e("span",{className:"small",children:t.function}):null,t!=null&&t.email?e("span",{className:"small",children:t.email}):null]}),m&&e(x,{name:m})]})]})})}o(c,"ListItemAvatar");function h({name:n,onClick:i,qa:a,...s}){return e("li",{className:"a-checkbox-list__item",children:e("div",{onClick:o(()=>{i&&i(n)},"onItemClick"),className:"a-input a-checkbox-list__checkbox",children:e(A,{name:n,...s})})})}o(h,"ListItemCheckbox");const B={title:"React/Atoms/List/FunctionalList",component:p,parameters:{storySource:{source:`import FunctionalList from './FunctionalList';
import { QA_PROP_STORY } from '../../../../constants/stories.settings';
import ListItem from '../items/ListItem';
import ListItemAvatar from '../items/ListItemAvatar';
import ListItemCheckbox from '../items/ListItemCheckbox';

export default {
  title: 'React/Atoms/List/FunctionalList',
  component: FunctionalList,
  parameters: {
    docs: {
      description: {
        component:
          'Use lists to better organise the text. A list breaks the information into manageable chunks, making the text easier to read for the user.'
      }
    }
  },
  argTypes: {
    type: {
      control: false,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: '',
      description:
        'Set the type of list to \`avatar\` or \`checkbox\`. This transforms the \`FunctionalList\` in an avatar list or checkbox list. The components \`AvatarList\` and \`CheckboxList\` can be used as syntactic sugar.'
    },
    ordered: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The ordered prop switches the default unordered list to an ordered list.'
    },
    lined: {
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The \`lined\` prop add lines between the items of a list.'
    },
    flushed: {
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      },
      description: 'The \`flushed\` prop removes the top and bottom lines of a lined list. '
    },
    children: {
      control: false,
      defaultValue: [
        <ListItem name="first" active link={{ href: '#' }}>
          First active item
        </ListItem>,
        <ListItem name="second" iconLeft="mouse" iconRight="arrow-right-1" link={{ href: '#' }}>
          Second clickable item
        </ListItem>,
        <ListItem name="third">Third item</ListItem>
      ],
      table: {
        type: { summary: 'ReactElement[]' }
      },
      description:
        'A functional list can accept three types of children: \`ListItem\`, \`ListItemAvatar\` or \`ListItemCheckbox\`. Depending on what sort of children you use in the functional list, use the correct \`type\` prop.'
    },
    onItemClick: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onItemClick',
      description:
        'Function triggered when a list item is clicked. First parameter of this function the \`name\` prop of the \`ListItem\`. It can be overriden by \`onClick\` prop on the item self.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => <FunctionalList {...args}></FunctionalList>;

export const functionalList = '';

export const AvatarList = Template.bind({});
AvatarList.args = {
  children: [
    <ListItemAvatar
      name="albert"
      user={{ name: 'Albert Einstein' }}
      avatar={{ letter: 'AE' }}
      active
      iconRight="navigation-menu-horizontal"
    />,
    <ListItemAvatar
      name="dog"
      user={{ name: 'A dog', function: 'Dog', email: 'dog@antwerpen.be' }}
      avatar={{ image: 'https://placedog.net/100/100?r' }}
      iconRight="navigation-menu-horizontal"
    />,
    <ListItemAvatar
      name="isaac"
      avatar={{ letter: 'IN' }}
      link={{ href: '#' }}
      user={{ name: 'Isaac Newton', email: 'isaac.newton@antwerpen.be' }}
      iconRight="navigation-menu-horizontal"
    />
  ],
  type: 'avatar'
};
export const CheckboxList = Template.bind({});
CheckboxList.args = {
  children: [
    <ListItemCheckbox name="checkbox-1" id="checkbox-1" label="First item" />,
    <ListItemCheckbox name="checkbox-2" id="checkbox-2" label="Second item" />
  ],
  type: 'checkbox'
};
`,locationsMap:{"avatar-list":{startLoc:{col:17,line:86},endLoc:{col:77,line:86},startBody:{col:17,line:86},endBody:{col:77,line:86}},"checkbox-list":{startLoc:{col:17,line:86},endLoc:{col:77,line:86},startBody:{col:17,line:86},endBody:{col:77,line:86}}}},docs:{description:{component:"Use lists to better organise the text. A list breaks the information into manageable chunks, making the text easier to read for the user."}}},argTypes:{type:{control:!1,table:{type:{summary:"string"},defaultValue:{summary:""}},defaultValue:"",description:"Set the type of list to `avatar` or `checkbox`. This transforms the `FunctionalList` in an avatar list or checkbox list. The components `AvatarList` and `CheckboxList` can be used as syntactic sugar."},ordered:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The ordered prop switches the default unordered list to an ordered list."},lined:{control:{type:"boolean"},defaultValue:!0,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `lined` prop add lines between the items of a list."},flushed:{control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `flushed` prop removes the top and bottom lines of a lined list. "},children:{control:!1,defaultValue:[e(r,{name:"first",active:!0,link:{href:"#"},children:"First active item"}),e(r,{name:"second",iconLeft:"mouse",iconRight:"arrow-right-1",link:{href:"#"},children:"Second clickable item"}),e(r,{name:"third",children:"Third item"})],table:{type:{summary:"ReactElement[]"}},description:"A functional list can accept three types of children: `ListItem`, `ListItemAvatar` or `ListItemCheckbox`. Depending on what sort of children you use in the functional list, use the correct `type` prop."},onItemClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"onItemClick",description:"Function triggered when a list item is clicked. First parameter of this function the `name` prop of the `ListItem`. It can be overriden by `onClick` prop on the item self."},qa:g}},u=o(({...n})=>e(p,{...n}),"Template"),Q="",C=u.bind({});C.args={children:[e(c,{name:"albert",user:{name:"Albert Einstein"},avatar:{letter:"AE"},active:!0,iconRight:"navigation-menu-horizontal"}),e(c,{name:"dog",user:{name:"A dog",function:"Dog",email:"dog@antwerpen.be"},avatar:{image:"https://placedog.net/100/100?r"},iconRight:"navigation-menu-horizontal"}),e(c,{name:"isaac",avatar:{letter:"IN"},link:{href:"#"},user:{name:"Isaac Newton",email:"isaac.newton@antwerpen.be"},iconRight:"navigation-menu-horizontal"})],type:"avatar"};const _=u.bind({});_.args={children:[e(h,{name:"checkbox-1",id:"checkbox-1",label:"First item"}),e(h,{name:"checkbox-2",id:"checkbox-2",label:"Second item"})],type:"checkbox"};const j=["functionalList","AvatarList","CheckboxList"];export{C as AvatarList,_ as CheckboxList,j as __namedExportsOrder,B as default,Q as functionalList};
//# sourceMappingURL=FunctionalList.stories-46478de6.js.map
