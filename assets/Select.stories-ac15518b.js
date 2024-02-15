import{a as i,j as o,Q as M}from"./stories.settings-7040e2b8.js";import{c as u}from"./dom.utils-26b7419a.js";import{I as j}from"./Icon-8947511e.js";import{a as q,D as A}from"./layout.settings-4161ae17.js";import{r as V,a as E}from"./input.renders-77d49baf.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./settings-efbb2779.js";import"./log.utils-973a80c9.js";function l({description:a,disabled:f,id:s,inline:r,label:g,name:S,options:v,placeholder:c="Maak een keuze",required:w,size:p,state:m,value:n,onChange:d,qa:T}){const x=e=>d&&d(e),_=u({"a-input":!0,"has-icon-right":!0,"a-input--inline":!!r,[`a-input--${q[p||A]}`]:!!p,"has-error":m==="error"}),k=u({"a-input__wrapper":!0,"a-input__wrapper--inline":!!r});return i("div",{className:_,"data-qa":T,children:[V({label:g,id:s,required:w,inline:r}),E({id:s,description:a,state:m}),i("div",{className:k,children:[i("select",{disabled:f,name:S,id:s,value:n,defaultValue:!n&&c||void 0,onChange:x,children:[o("option",{disabled:!0,children:c}),(v||[]).map((e,C)=>o("option",{value:e.value,disabled:e.disabled,children:e.label},`${e.value}-${C}`))]},n),o(j,{name:"arrow-down-1"})]})]})}l.displayName="Select";const $={title:"React/Atoms/Select",component:l,parameters:{docs:{description:{component:"Use the selection input field when the user needs to make a specific selection in a form. Specifically when you have a limited number of options and there is no sufficient place to display these options. Also use a selection field for data with a specific pattern such as time."}}},args:{id:"select-story",inline:!1,label:"Select example",name:"select-story",disabled:!1,required:!1,placeholder:"Make your choice",options:[{value:"first",label:"First option"},{value:"second",label:"Second option"},{value:"third",label:"Third option"},{value:"fourth",label:"Fourth option"}]},argTypes:{id:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `id` prop set on the `select` HTML element."},inline:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `inline` prop when set to `true` sets the style of the `Select` component to inline."},label:{control:{type:"text"},table:{type:{summary:"string"}},description:"A `Select` features at least a label atop or to the left side of the component."},name:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `name` prop sets the `name` attribute on the `select` HTML element."},placeholder:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Maak een keuze"}},description:"Sets a placeholder value for the `Select` component."},disabled:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `disabled` prop will disable inputs on the `Select` component when set to `true`."},required:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Setting the `required` prop to `true` will mark the `Select` component as `required` and an asterisk will be placed next to the label to mark it as such."},description:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `Select` component can have a small descriptive text above its `select` field."},size:{control:{type:"select"},options:["small","medium","large"],table:{type:{summary:"string"}},description:"The `size` prop will change the height of the `Select` component. Can be omitted for `medium`."},state:{control:{type:"select"},options:["","success","error"],table:{type:{summary:"string"}},description:"Whenever an input field is associated with a success or error state, the border of the container will match to that thematic colour as well as display a message (the `description` prop) above the container together with an identifiable icon."},value:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `value` prop sets the selected value for the `Select` component. This prop turns the component into a controlled component. To be used along with `onChange`."},options:{control:{type:"object"},table:{type:{summary:"object"},defaultValue:{summary:"[]"}},description:'The `options` prop is an array of objects in the format `{ value: "string", label: "string", disabled?: boolean }`. It sets the `option` HTML elements in `Select` component.'},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function triggered when the `Select` value has changed. The first parameter of this function is of type `(React).ChangeEvent`."},qa:M}},I=a=>o(l,{...a}),t=I.bind({});var h,y,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"args => <Select {...args} />",...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Q=["select"];export{Q as __namedExportsOrder,$ as default,t as select};
//# sourceMappingURL=Select.stories-ac15518b.js.map
