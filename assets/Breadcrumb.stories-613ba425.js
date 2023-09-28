import{a as u,F as h,j as a,Q as b}from"./stories.settings-7040e2b8.js";import{a as g}from"./render.utils-2b079e3b.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./layout.settings-581780cb.js";import"./Avatar-0467fc58.js";import"./dom.utils-26b7419a.js";import"./settings-2256c0f5.js";import"./Icon-b88d001d.js";import"./log.utils-973a80c9.js";import"./Spinner-d608c31b.js";function i({title:e,items:o,renderLinkFunction:s,qa:m}){const d=()=>Array.isArray(o)?o.map(r=>a("li",{children:s?s(r):g(r)},`${r.id}`)):null,p=()=>{if(e&&e.label){const r=e.tag||"h1";return a(r,{className:`${e.className||""} u-margin-top-xxs`,children:e.label})}return null};return u(h,{children:[a("ul",{className:"a-breadcrumb","data-qa":m,children:d()}),p()]})}i.defaultProps={items:[]};const O={title:"React/Atoms/Breadcrumb",component:i,parameters:{docs:{description:{component:"Use a breadcrumb to help the user to determine or understand their place with a platform or website structure. It indicates their current location, but also hints at the previous levels in the hierarchy to which a page belongs andd to which a user can also navigate with ease."}}},args:{items:[{id:"home",label:"Home",href:"/"},{id:"google",label:"Google",href:"https://www.google.be"},{id:"current",label:"Current Page"}],title:{label:"",tag:"h1",className:"h4"}},argTypes:{items:{control:{type:"object"},table:{type:{summary:"array"},defaultValue:{summary:"[]"}},description:"Array of Breadcrumb items link, a link has following attributes: `id`, `label` and `href`. The  last `step` in the items (the current page title) is simply displayed as a non-interactive page title label (no `href`!)."},title:{control:{type:"object"},table:{type:{summary:"object"}},description:"Optional page title, an object with following fields: `label`, `tag`, `className`. When the page title is placed directly below the breadcrumb, the last chevron and non-interactive label must be omitted from the path."},renderLinkFunction:{control:{type:"funnction"},table:{type:{summary:"function"}},description:"Optional (custom) link renderer; allows to override the way links are rendered. This is useful when using a routing framework (like React Router). The first parameter of this function is a `Link` object, with fields `label`, `href`. Example: `renderLinkFunction={(link) => <Link to={link.href}>{link.label}</Link>}`"},qa:b}},f=e=>a(i,{...e}),t=f.bind({});var n,l,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Breadcrumb {...args} />",...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const R=["breadcrumb"];export{R as __namedExportsOrder,t as breadcrumb,O as default};
//# sourceMappingURL=Breadcrumb.stories-613ba425.js.map
