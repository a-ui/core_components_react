import{a as E,j as o}from"./stories.settings-7040e2b8.js";import{S,I as x}from"./settings-577c54c5.js";import{c as _}from"./dom.utils-26b7419a.js";import{l as w}from"./log.utils-973a80c9.js";import{r as B}from"./index-61bf1805.js";const C=1048576;function N(s,e){return e?e.split(",").map(t=>t.trim()).flatMap(t=>t.split(".")).some(t=>{var n,r;return!t||t==="*"||t===s.type||t.includes("*")&&!!((n=t.split("/"))!=null&&n[0])&&s.type.startsWith((r=t.split("/"))==null?void 0:r[0])}):!1}function A(s,e){return!e||s.size<=e*C}function q(s,e,i){return s.map(t=>({validFormat:N(t,e),validSize:A(t,i)}))}function F(s){const{width:e,height:i}=s.getBBox();return e===0&&i===0}const c="ai-svg",T=B.forwardRef(function({name:e,tabIndex:i,onKeyDown:t,className:n,role:r,onClick:u,screenReaderText:l,thin:p,qa:f},h){const m=async function(){var d;if(!fetch)return null;const y=await(await fetch(x)).text(),a=document.createElement("svg");a.id=c,a.innerHTML=y,document.getElementById(c)||document.body.appendChild(a),(d=I())==null||d.forEach(v=>{F(v)&&w(`The provided icon with name "${e}" does not seem to exist. Please make sure the 'name' is correct`)})},I=()=>Array.from(document.querySelectorAll(`.ai-${e.replace("ai-","")} use`));typeof document<"u"&&!document.getElementById(c)&&m();const g=_({ai:!0,[`ai-${e==null?void 0:e.replace("ai-","")}`]:!!e,"ai--thin":!!p,[n||""]:!!n});return E("span",{ref:h,onKeyDown:t,tabIndex:i,role:r,onClick:u,className:g,"data-qa":f,children:[e?o("svg",{"aria-hidden":"true",children:o("use",{href:`#ai-${e.replace("ai-","")}`})}):null,!!l&&o("span",{className:S,children:l})]})});export{T as I,A as a,q as b,N as h};
//# sourceMappingURL=Icon-3fd32ed6.js.map
