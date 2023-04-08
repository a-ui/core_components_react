var d=Object.defineProperty;var o=(e,a)=>d(e,"name",{value:a,configurable:!0});import{c as y}from"./dom.utils-1db2b487.js";import{a as g,j as r}from"./jsx-runtime-bb315772.js";import{Q as h}from"./stories.settings-7ac24d87.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";function l({label:e,labelId:a,showLabel:t,percentage:s,ariaValueNow:i,minValue:n,maxValue:m,large:u,qa:p}){const c=i||s,b=y({"a-progress":!0,"a-progress--l":!!u});return g("div",{className:b,"data-qa":p,children:[t?r("div",{id:a,className:"a-progress__label",children:e}):null,r("div",{className:"a-progress__inner",children:r("div",{className:"a-progress__bar",role:"progressbar","aria-valuenow":c,"aria-valuemin":n,"aria-valuemax":m,style:{width:`${s}%`},...t?{"aria-labelledby":a}:{"aria-label":e}})})]})}o(l,"ProgressBar");l.defaultProps={percentage:0,minValue:0,maxValue:100,showLabel:!0,labelId:"aui-progress-label",size:""};const N={title:"React/Atoms/ProgressBar",component:l,parameters:{docs:{description:{component:"A progress indicator communicates to the user that they have to wait for a page, element of functionality to complete loading or processing a task before they can access it."}}},args:{percentage:10,large:!1,label:"Downloading...",minValue:0,maxValue:100,showLabel:!0},argTypes:{percentage:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:0}},description:"Current width in percentage; value from 0 to 100."},large:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"Set the size of the bar to `large`."},label:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Label of the progress bar."},ariaValueNow:{control:{type:"number"},table:{type:{summary:"number"}},description:"Use this prop to override the `aria-valuenow`, if not set the `percentage` prop is used."},minValue:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:0}},description:"Use this prop to set the `aria-valuemin` attribute."},maxValue:{control:{type:"number"},table:{type:{summary:"number"},defaultValue:{summary:100}},description:"Use this prop to set the `aria-valuemax` attribute."},showLabel:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!0}},description:"Set to false to hide the label (by replacing it with an `aria-label`)."},labelId:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"aui-progress-label"}},description:"Id of the label, used by `aria-labelledby`."},qa:h}},P="",B=["progressBar"];export{B as __namedExportsOrder,N as default,P as progressBar};
//# sourceMappingURL=ProgressBar.stories-9c53fff2.js.map
