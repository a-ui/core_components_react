import{j as t,a as o,Q as y}from"./stories.settings-7040e2b8.js";import{F as A}from"./FunctionalList-243252a1.js";import{c as L}from"./dom.utils-26b7419a.js";import{I}from"./Icon-b88d001d.js";import{A as N}from"./Avatar-0467fc58.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./settings-2256c0f5.js";import"./log.utils-973a80c9.js";import"./layout.settings-581780cb.js";function p(n){return t(A,{type:"avatar",...n})}function i({avatar:n,name:h,link:e,active:f,user:a,iconRight:s,id:u,onClick:l,qa:v}){const g=`${e&&(e.href||e.href==="")?"a":"span"}`,b=L({"a-avatar-list__item":!0,"is-active":!!f});return t("li",{className:b,id:u,"data-qa":v,children:o(g,{className:"a-avatar-list__item-container",onClick:_=>{l&&(_.preventDefault(),l(h))},...e&&(e.href||e.href==="")?{href:e.href}:{},children:[t(N,{...n,className:"a-avatar-list__avatar",rounded:!0,size:"small"}),o("div",{className:"a-avatar-list__content",children:[o("span",{className:"a-avatar-list__text",children:[a!=null&&a.name?t("span",{className:"avatar-list__name paragraph",children:a.name}):null,a!=null&&a.function?t("span",{className:"small",children:a.function}):null,a!=null&&a.email?t("span",{className:"small",children:a.email}):null]}),s&&t(I,{name:s})]})]})})}const D={title:"React/Atoms/List/AvatarList",component:p,parameters:{docs:{description:{component:"Use lists to better organise the text. A list breaks the information into manageable chunks, making the text easier to read for the user."}}},args:{ordered:!1,flushed:!1,children:[t(i,{name:"albert",user:{name:"Albert Einstein"},avatar:{letter:"AE"},active:!0,iconRight:"navigation-menu-horizontal",id:"albert"},"albert"),t(i,{name:"dog",user:{name:"A dog",function:"Dog",email:"dog@antwerpen.be"},avatar:{image:"https://placedog.net/100/100?r"},iconRight:"navigation-menu-horizontal",id:"dog"},"dog"),t(i,{name:"isaac",avatar:{letter:"IN"},link:{href:"#"},user:{name:"Isaac Newton",email:"isaac.newton@antwerpen.be"},iconRight:"navigation-menu-horizontal",id:"isaac"},"isaac")]},argTypes:{ordered:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The ordered prop switches the default unordered list to an ordered list."},flushed:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `flushed` prop removes the top and bottom lines of a lined list. "},children:{control:!1,table:{type:{summary:"ReactElement[]"}},description:"Use `ListItemAvatar` as the children of an `AvatarList` component."},onItemClick:{control:{type:"function"},table:{type:{summary:"function"}},action:"onItemClick",description:"Function triggered when a list item is clicked. First parameter of this function the `name` prop of the `ListItem`. It can be overriden by `onClick` prop on the item self."},qa:y}},x=n=>t(p,{...n}),r=x.bind({});var m,c,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"args => <AvatarList {...args} />",...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const P=["avatarList"];export{P as __namedExportsOrder,r as avatarList,D as default};
//# sourceMappingURL=AvatarList.stories-ca04a3ca.js.map
