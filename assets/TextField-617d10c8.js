import{a as y,j as r}from"./stories.settings-7040e2b8.js";import{c as T}from"./dom.utils-26b7419a.js";import{a as H,D as J}from"./layout.settings-4161ae17.js";import{I as b}from"./Icon-a1e4ec3d.js";import{r as K,a as Q,b as V}from"./input.renders-0071cf08.js";import{r as $}from"./index-61bf1805.js";import{S as W}from"./Spinner-5b702f63.js";const X=$.forwardRef(function({addOn:t,autoComplete:F,charCounter:a,charCountText:m,description:h,disabled:N,id:e="aui-text-field",role:S,inline:i,label:w,maxLength:s,maxLengthBlocksInput:E,name:I,onChange:u,qa:j,readOnly:D,required:f,size:x,state:C,type:R="text",value:o,onBlur:v,onClick:A,onFocus:Z,onKeyDown:L,onKeyUp:M},P){const[U,k]=$.useState(o?o.length:0),p=(t==null?void 0:t.type)==="text"&&t.placement==="left"?t.content:null,l=(t==null?void 0:t.type)==="text"&&t.placement==="right"?t.content:null,c=(t==null?void 0:t.type)==="icon"&&t.placement==="left"?t.content:null,n=(t==null?void 0:t.type)==="icon"&&t.placement==="right"?t.content:null,_=a!==void 0?a:!!s,q=m||(s?"%count% / %max%":"%count%"),z=T({"a-input":!0,"a-input--inline":!!i,[`a-input--${H[x||J]}`]:!!x,"has-icon-left":!!c||(t==null?void 0:t.type)==="spinner"&&(t==null?void 0:t.placement)==="left","has-icon-right":!c&&!!n,"has-addon-left":!!p,"has-addon-right":!!l,"has-error":C==="error","has-spinner":(t==null?void 0:t.type)==="spinner",[`has-spinner-${t==null?void 0:t.placement}`]:!!t}),B=T({"a-input__wrapper":!0,"a-input__wrapper--inline":!!i}),G=g=>(k(g.target.value.length),u&&u(g));return y("div",{className:z,"data-qa":j,children:[K({label:w,id:e,required:f,inline:i}),Q({id:e,description:h,state:C}),y("div",{className:B,children:[(t==null?void 0:t.type)==="spinner"&&r(W,{size:"small"}),!!c&&r(b,{name:c}),!!p&&r("div",{className:"a-input__addon",children:p}),r("input",{ref:P,type:R,value:o,name:I,id:e,autoComplete:F,disabled:N,readOnly:D,required:f,maxLength:s&&E?s:void 0,onChange:G,onBlur:v,onClick:A,onFocus:Z,onKeyDown:L,onKeyUp:M,role:S,..._?{"aria-describedby":`${e}--counter`}:{},...h?{"aria-describedby":`${e}--description`}:{}}),!!n&&!c&&r(b,{name:n}),!!l&&r("div",{className:"a-input__addon",children:l})]}),V({id:e,charCountText:q,charCounter:_,characterCount:o?o.length:U,maxLength:s})]})}),ct=X;export{ct as T,X as a};
//# sourceMappingURL=TextField-617d10c8.js.map
