import{j as t}from"./jsx-runtime-DCCOt0jE.js";import{B as e}from"./Button-BhTqa0_l.js";import{c as u}from"./dom.utils-CWPiogtW.js";import{Q as m}from"./stories.settings-_lQpuS1g.js";import"./index-BeMkoiPZ.js";import"./layout.settings-mr43P2wk.js";import"./render.utils-BWAlHaLj.js";import"./Avatar-BrG1_74y.js";import"./settings-v1TsM2gR.js";import"./Icon-C0jJKbEz.js";import"./log.utils-D5kbEUmO.js";import"./Spinner-a7tz01CM.js";function o({children:a,vertical:p,qa:c}){const l=u({"m-button-group":!0,"m-button-group--vertical":!!p});return t.jsx("div",{className:l,"data-qa":c,children:a})}o.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup",props:{vertical:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactElement[] | ReactElement",elements:[{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"ReactElement"}]},description:""},qa:{required:!1,tsType:{name:"string"},description:""}}};e.displayName="Button";o.displayName="ButtonGroup";const P={title:"React/Molecules/ButtonGroup",component:o,parameters:{docs:{description:{component:"The `ButtonGroup` component wraps its children in a div with the `m-button-group` className."}}},args:{vertical:!1},argTypes:{vertical:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},description:"Buttons in a `ButtonGroup` can be aligned horizontally (default) or vertically as a list."},qa:m}},d=({...a})=>t.jsxs(o,{...a,children:[t.jsx(e,{addOn:{type:"avatar",avatarProps:{image:"https://placedog.net/100/100?r"}},children:"Avatar button"}),t.jsx(e,{addOn:{type:"icon",align:"left",iconProps:{name:"archive"}},children:"Icon left"}),t.jsx(e,{addOn:{type:"icon",align:"right",iconProps:{name:"archive"}},children:"Icon right"}),t.jsx(e,{outline:!0,children:"Outline"})]}),n=d.bind({});var r,i,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`({
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
  </ButtonGroup>`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const E=["buttonGroup"];export{E as __namedExportsOrder,n as buttonGroup,P as default};
