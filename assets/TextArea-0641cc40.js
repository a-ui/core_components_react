import{a as R,j as m}from"./stories.settings-7040e2b8.js";import{c as h}from"./dom.utils-26b7419a.js";import{a as $,D as y,c as I}from"./layout.settings-581780cb.js";import{r as P}from"./index-61bf1805.js";import{r as Z,a as F,b as M}from"./input.renders-184aa385.js";function O({charCounter:s,charCountText:l,description:n,disabled:d,id:a,inline:t,label:C,maxLength:e,name:f,onChange:o,qa:x,readOnly:_,required:c,size:p,state:i,value:r,onBlur:b,onClick:E,onFocus:S,onKeyDown:T,onKeyUp:g}){const[j,w]=P.useState(r?r.length:0),A=h({"a-input":!0,"a-input--inline":!!t,[`a-input--${$[p||y]}`]:!!p,"has-error":i===I.ERROR}),D=h({"a-input__wrapper":!0,"a-input__wrapper--inline":!!t}),N=u=>(w(u.target.value.length),o&&o(u));return R("div",{className:A,"data-qa":x,children:[Z({label:C,id:a,required:c,inline:t}),F({id:a,description:n,state:i}),m("div",{className:D,children:m("textarea",{value:r,name:f,id:a,disabled:d,readOnly:_,required:c,...s&&e?{"aria-describedby":`${a}--counter`}:{},...n?{"aria-describedby":`${a}--description`}:{},maxLength:e,onChange:N,onBlur:b,onClick:E,onFocus:S,onKeyDown:T,onKeyUp:g})}),M({id:a,charCountText:l,charCounter:s,characterCount:r?r.length:j,maxLength:e})]})}O.defaultProps={id:"aui-text-area",charCountText:"%count% / %max%"};export{O as T};
//# sourceMappingURL=TextArea-0641cc40.js.map