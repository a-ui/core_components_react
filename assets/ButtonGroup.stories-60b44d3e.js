import{j as t,Q as l,a as m}from"./stories.settings-7040e2b8.js";import{B as n}from"./Button-a8135b72.js";import{c as d}from"./dom.utils-26b7419a.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./layout.settings-4161ae17.js";import"./render.utils-0a170316.js";import"./Avatar-8aaaad62.js";import"./settings-efbb2779.js";import"./Icon-8947511e.js";import"./log.utils-973a80c9.js";import"./Spinner-658614bc.js";function r({children:a,vertical:p,qa:u}){const c=d({"m-button-group":!0,"m-button-group--vertical":!!p});return t("div",{className:c,"data-qa":u,children:a})}n.displayName="Button";r.displayName="ButtonGroup";const I={title:"React/Molecules/ButtonGroup",component:r,parameters:{docs:{description:{component:"The `ButtonGroup` component wraps its children in a div with the `m-button-group` className."}}},args:{vertical:!1},argTypes:{vertical:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Buttons in a `ButtonGroup` can be aligned horizontally (default) or vertically as a list."},qa:l}},g=({...a})=>m(r,{...a,children:[t(n,{addOn:{type:"avatar",avatarProps:{image:"https://placedog.net/100/100?r"}},children:"Avatar button"}),t(n,{addOn:{type:"icon",align:"left",iconProps:{name:"archive"}},children:"Icon left"}),t(n,{addOn:{type:"icon",align:"right",iconProps:{name:"archive"}},children:"Icon right"}),t(n,{outline:!0,children:"Outline"})]}),o=g.bind({});var e,i,s;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
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
  </ButtonGroup>`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const T=["buttonGroup"];export{T as __namedExportsOrder,o as buttonGroup,I as default};
//# sourceMappingURL=ButtonGroup.stories-60b44d3e.js.map
