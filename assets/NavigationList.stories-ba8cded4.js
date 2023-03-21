var L=Object.defineProperty;var i=(n,r)=>L(n,"name",{value:r,configurable:!0});import{Q as w}from"./stories.settings-7ac24d87.js";import{c as m}from"./dom.utils-1db2b487.js";import{u as z}from"./custom.hooks-25de1769.js";import{j as o}from"./jsx-runtime-bb315772.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";function u({items:n,border:r,ariaLabel:p,onItemClick:s,direction:t,qa:h}){const[v,b,c,d]=z(),g=m({"m-nav-list":t==="vertical","m-nav-tabs":t!=="vertical","has-border":!!r,"has-shadow-left":t!=="vertical"&&!c,"has-shadow-right":t!=="vertical"&&!d}),f=i((a,e,l)=>{s&&!e.disabled&&(a.preventDefault(),a.stopPropagation(),s(e.id,l))},"onClick"),y=i((a,e)=>{const l=m({"is-active":!!a.active,"is-disabled":!!a.disabled});return o("li",{className:l,children:o("a",{href:a.href,onClick:N=>f(N,a,e),...a.disabled?{"aria-disabled":"true"}:{},...a.active?{"aria-current":"true"}:{},children:a.label})},a.id)},"renderNavigationItem");return o("nav",{role:"navigation",className:g,"aria-label":p,"data-qa":h,children:o("ul",{ref:v,onScroll:b,...!c||!d?{tabIndex:0}:{},children:n.map(y)})})}i(u,"NavigationList");u.defaultProps={items:[],direction:"horizontal",ariaLabel:"Navigatie"};const O={title:"React/Molecules/NavigationList",component:u,parameters:{docs:{description:{component:"This type of navigation can be used when you need to both inform and instruct the user on their current location and how to navigate to related pages."}}},argTypes:{direction:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}},description:"Navigation lists can be configured as a vertical list or alternatively as a horizontal tab list.",options:["","horizontal","vertical"]},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Navigatie"}},description:"The `aria-label` used for the navigation list."},border:{control:{type:"boolean"},table:{type:{summary:"boolean"}},defaultValue:!1,description:"When using a horizontal navigation list, the `hasBorder` property will add a border to the bottom."},onItemClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"onItemClick",description:"Function triggered when clicking on an item. The parameters are the id (string) and position (number) of the navigation list item."},items:{control:{type:"object"},table:{type:{summary:"object"}},defaultValue:[{id:"item-overview",label:"Overzicht",active:!0},{id:"item-attachments",label:"Bijlagen"},{id:"item-locations",label:"Locaties"},{id:"item-communications",label:"Communicatie",disabled:!0}],description:"The items of the `NavigationList` component. Navigation list items have following fields: id, label, href, active and disabled."},qa:w}},P="",R=["navigationList"];export{R as __namedExportsOrder,O as default,P as navigationList};
//# sourceMappingURL=NavigationList.stories-ba8cded4.js.map
