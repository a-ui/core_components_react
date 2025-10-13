import{j as t,a as l}from"./jsx-runtime-c9381026.js";import{B as n}from"./Button-a5cf811f.js";import{c as m}from"./dom.utils-26b7419a.js";import{Q as d}from"./stories.settings-7ac24d87.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./layout.settings-ece9b612.js";import"./render.utils-45a27ac5.js";import"./Avatar-356daf9d.js";import"./settings-d981ed66.js";import"./Icon-7c7c2667.js";import"./log.utils-4457c06c.js";import"./Spinner-581bc327.js";function r({children:a,vertical:p,qa:u}){const c=m({"m-button-group":!0,"m-button-group--vertical":!!p});return t("div",{className:c,"data-qa":u,children:a})}n.displayName="Button";r.displayName="ButtonGroup";const T={title:"React/Molecules/ButtonGroup",component:r,parameters:{docs:{description:{component:"The `ButtonGroup` component wraps its children in a div with the `m-button-group` className."}}},args:{vertical:!1},argTypes:{vertical:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Buttons in a `ButtonGroup` can be aligned horizontally (default) or vertically as a list."},qa:d}},g=({...a})=>l(r,{...a,children:[t(n,{addOn:{type:"avatar",avatarProps:{image:"https://placedog.net/100/100?r"}},children:"Avatar button"}),t(n,{addOn:{type:"icon",align:"left",iconProps:{name:"archive"}},children:"Icon left"}),t(n,{addOn:{type:"icon",align:"right",iconProps:{name:"archive"}},children:"Icon right"}),t(n,{outline:!0,children:"Outline"})]}),o=g.bind({});var e,i,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
  ...args
}) => <ButtonGroup {...args}>
    <Button addOn={{
    type: 'avatar',
    avatarProps: {
      image: 'https://placedog.net/100/100?r'
    }
  }}>Avatar button</Button>
    <Button addOn={{
    type: 'icon',
    align: 'left',
    iconProps: {
      name: 'archive'
    }
  }}>Icon left</Button>
    <Button addOn={{
    type: 'icon',
    align: 'right',
    iconProps: {
      name: 'archive'
    }
  }}>Icon right</Button>
    <Button outline>Outline</Button>
  </ButtonGroup>`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const j=["buttonGroup"];export{j as __namedExportsOrder,o as buttonGroup,T as default};
