var $=Object.defineProperty;var o=(t,e)=>$(t,"name",{value:e,configurable:!0});import{c as h}from"./dom.utils-bd8c7a66.js";import{S as y,D as I,d as P}from"./layout.settings-9902fce9.js";import{r as Z}from"./index-d23035ce.js";import{r as F,a as M,b as O}from"./input.renders-7e520b25.js";import{a as U,j as l}from"./jsx-runtime-bb315772.js";function k({charCounter:t,charCountText:e,description:c,disabled:C,id:r,inline:s,label:f,maxLength:n,name:x,onChange:p,qa:_,readOnly:b,required:i,size:u,state:m,value:a,onBlur:S,onClick:E,onFocus:T,onKeyDown:g,onKeyUp:j}){const[w,A]=Z.exports.useState(a?a.length:0),D=h({"a-input":!0,"a-input--inline":!!s,[`a-input--${y[u||I]}`]:!!u,"has-error":m===P.ERROR}),N=h({"a-input__wrapper":!0,"a-input__wrapper--inline":!!s}),R=o(d=>(A(d.target.value.length),p&&p(d)),"_handleChange");return U("div",{className:D,"data-qa":_,children:[F({label:f,id:r,required:i,inline:s}),M({id:r,description:c,state:m}),l("div",{className:N,children:l("textarea",{value:a,name:x,id:r,disabled:C,readOnly:b,required:i,...t&&n?{"aria-describedby":`${r}--counter`}:{},...c?{"aria-describedby":`${r}--description`}:{},maxLength:n,onChange:R,onBlur:S,onClick:E,onFocus:T,onKeyDown:g,onKeyUp:j})}),O({id:r,charCountText:e,charCounter:t,characterCount:a?a.length:w,maxLength:n})]})}o(k,"TextArea");k.defaultProps={id:"aui-text-area",charCountText:"%count% / %max%"};export{k as T};
//# sourceMappingURL=TextArea-097b5b42.js.map
