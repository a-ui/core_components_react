var j=Object.defineProperty;var s=(a,t)=>j(a,"name",{value:t,configurable:!0});import{c as A}from"./dom.utils-1db2b487.js";import{S as D,D as N,d as R}from"./layout.settings-9902fce9.js";import{r as T}from"./index-d23035ce.js";import{r as w,a as I,b as P}from"./input.renders-16a516e8.js";import{a as Z,j as h}from"./jsx-runtime-bb315772.js";function y({charCounter:a,description:t,disabled:u,id:e,inline:n,label:l,maxLength:o,name:f,onChange:c,qa:C,readOnly:x,required:i,size:p,state:d,value:r,...S}){const[_,b]=T.exports.useState(r?r.length:0),g=A({"a-input":!0,"a-input--inline":!!n,[`a-input--${D[p||N]}`]:!!p,"has-error":d===R.ERROR}),E=s(m=>(b(m.target.value.length),c&&c(m)),"_handleChange");return Z("div",{className:g,"data-qa":C,children:[w({label:l,id:e,required:i,inline:n}),I({description:t,state:d}),h("div",{className:"a-input__wrapper",children:h("textarea",{value:r,name:f,id:e,disabled:u,readOnly:x,required:i,"aria-describedby":"text-field-description",maxLength:o,onChange:E,...S})}),P({id:e,charCounter:a,characterCount:r?r.length:_,maxLength:o})]})}s(y,"TextArea");y.defaultProps={id:"aui-text-area"};export{y as T};
//# sourceMappingURL=TextArea-0ff6fbcb.js.map
