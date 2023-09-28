import{j as e,Q as m}from"./stories.settings-7040e2b8.js";import{F as d}from"./FunctionalList-243252a1.js";import{C as h}from"./Checkbox-5438b85e.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./dom.utils-26b7419a.js";import"./settings-2256c0f5.js";function n(t){return e(d,{type:"checkbox",...t})}function r({name:t,onClick:s,qa:b,...l}){return e("li",{className:"a-checkbox-list__item",children:e("div",{onClick:()=>{s&&s(t)},className:"a-input a-checkbox-list__checkbox",children:e(h,{name:t,...l})})})}const _={title:"React/Atoms/List/CheckboxList",component:n,parameters:{docs:{description:{component:"Use lists to better organise the text. A list breaks the information into manageable chunks, making the text easier to read for the user."}}},args:{ordered:!1,flushed:!1,children:[e(r,{name:"checkbox-1",id:"checkbox-1",label:"First item"},"checkbox-1"),e(r,{name:"checkbox-2",id:"checkbox-2",label:"Second item"},"checkbox-2")]},argTypes:{ordered:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The ordered prop switches the default unordered list to an ordered list."},flushed:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `flushed` prop removes the top and bottom lines of a lined list. "},children:{control:!1,table:{type:{summary:"ReactElement[]"}},description:"Use `ListItemCheckbox` as the children of an `CheckboxList` component."},onItemClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"onItemClick",description:"Function triggered when a list item is clicked. First parameter of this function the `name` prop of the `ListItem`. It can be overriden by `onClick` prop on the item self."},qa:m}},p=t=>e(n,{...t}),o=p.bind({});var i,c,a;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"args => <CheckboxList {...args} />",...(a=(c=o.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};const I=["checkboxList"];export{I as __namedExportsOrder,o as checkboxList,_ as default};
//# sourceMappingURL=CheckboxList.stories-b252c632.js.map