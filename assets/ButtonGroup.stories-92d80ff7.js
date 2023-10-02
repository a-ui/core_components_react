import{j as t,Q as l,a as m}from"./stories.settings-7040e2b8.js";import{B as n}from"./Button-31256f4b.js";import{c as d}from"./dom.utils-26b7419a.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./layout.settings-581780cb.js";import"./render.utils-72fc6f3a.js";import"./Avatar-6ff17722.js";import"./settings-577c54c5.js";import"./Icon-a4a94a86.js";import"./log.utils-973a80c9.js";import"./Spinner-63ac2c73.js";function s({children:a,vertical:p,qa:c}){const u=d({"m-button-group":!0,"m-button-group--vertical":!!p});return t("div",{className:u,"data-qa":c,children:a})}const T={title:"React/Molecules/ButtonGroup",component:s,parameters:{docs:{description:{component:"The `ButtonGroup` component wraps its children in a div with the `m-button-group` className."}}},args:{vertical:!1},argTypes:{vertical:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Buttons in a `ButtonGroup` can be aligned horizontally (default) or vertically as a list."},qa:l}},g=({...a})=>m(s,{...a,children:[t(n,{addOn:{type:"avatar",avatarProps:{image:"https://placedog.net/100/100?r"}},children:"Avatar button"}),t(n,{addOn:{type:"icon",align:"left",iconProps:{name:"archive"}},children:"Icon left"}),t(n,{addOn:{type:"icon",align:"right",iconProps:{name:"archive"}},children:"Icon right"}),t(n,{outline:!0,children:"Outline"})]}),o=g.bind({});var r,e,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
  </ButtonGroup>`,...(i=(e=o.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const j=["buttonGroup"];export{j as __namedExportsOrder,o as buttonGroup,T as default};
//# sourceMappingURL=ButtonGroup.stories-92d80ff7.js.map
