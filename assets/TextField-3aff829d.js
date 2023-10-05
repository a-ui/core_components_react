import{a as y,j as r}from"./stories.settings-7040e2b8.js";import{c as g}from"./dom.utils-26b7419a.js";import{a as z,D as B}from"./layout.settings-581780cb.js";import{I as C}from"./Icon-a4a94a86.js";import{r as G,a as H,b as J}from"./input.renders-184aa385.js";import{r as T}from"./index-61bf1805.js";import{S as K}from"./Spinner-63ac2c73.js";const b=T.forwardRef(function({addOn:t,charCounter:a,charCountText:$,description:m,disabled:F,id:e,role:N,inline:c,label:S,maxLength:i,name:w,onChange:h,qa:E,readOnly:I,required:u,size:f,state:x,type:j="text",value:s,onBlur:D,onClick:R,onFocus:A,onKeyDown:L,onKeyUp:P},Z){const[M,U]=T.useState(s?s.length:0),p=(t==null?void 0:t.type)==="text"&&t.placement==="left"?t.content:null,l=(t==null?void 0:t.type)==="text"&&t.placement==="right"?t.content:null,o=(t==null?void 0:t.type)==="icon"&&t.placement==="left"?t.content:null,n=(t==null?void 0:t.type)==="icon"&&t.placement==="right"?t.content:null,k=g({"a-input":!0,"a-input--inline":!!c,[`a-input--${z[f||B]}`]:!!f,"has-icon-left":!!o||(t==null?void 0:t.type)==="spinner"&&(t==null?void 0:t.placement)==="left","has-icon-right":!o&&!!n,"has-addon-left":!!p,"has-addon-right":!!l,"has-error":x==="error","has-spinner":(t==null?void 0:t.type)==="spinner",[`has-spinner-${t==null?void 0:t.placement}`]:!!t}),q=g({"a-input__wrapper":!0,"a-input__wrapper--inline":!!c}),v=_=>(U(_.target.value.length),h&&h(_));return y("div",{className:k,"data-qa":E,children:[G({label:S,id:e,required:u,inline:c}),H({id:e,description:m,state:x}),y("div",{className:q,children:[(t==null?void 0:t.type)==="spinner"&&r(K,{size:"small"}),!!o&&r(C,{name:o}),!!p&&r("div",{className:"a-input__addon",children:p}),r("input",{ref:Z,type:j,value:s,name:w,id:e,disabled:F,readOnly:I,required:u,maxLength:i,onChange:v,onBlur:D,onClick:R,onFocus:A,onKeyDown:L,onKeyUp:P,role:N,...a&&i?{"aria-describedby":`${e}--counter`}:{},...m?{"aria-describedby":`${e}--description`}:{}}),!!n&&!o&&r(C,{name:n}),!!l&&r("div",{className:"a-input__addon",children:l})]}),J({id:e,charCountText:$,charCounter:a,characterCount:s?s.length:M,maxLength:i})]})});b.defaultProps={type:"text",id:"aui-text-field",charCountText:"%count% / %max%"};const et=b;export{et as T,b as a};
//# sourceMappingURL=TextField-3aff829d.js.map