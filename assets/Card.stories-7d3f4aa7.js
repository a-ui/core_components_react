var l=Object.defineProperty;var n=(e,t)=>l(e,"name",{value:t,configurable:!0});import{I as p}from"./Image-86d71fc5.js";import{r as u}from"./render.utils-d204ca25.js";import{a as c,j as a}from"./jsx-runtime-bb315772.js";import{Q as h}from"./stories.settings-7ac24d87.js";import"./dom.utils-1db2b487.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./layout.settings-9902fce9.js";import"./Avatar-285c67d7.js";import"./settings-9292fabe.js";import"./Icon-53ae04fc.js";import"./Spinner-6dd14d1e.js";function b({title:e,subTitle:t,description:r,children:i,image:s,link:o,qa:m}){const d=(e==null?void 0:e.tag)||"h4";return c("div",{className:"m-card","data-qa":m,children:[!!s&&a("div",{className:"m-card__image",children:a(p,{...s})}),c("div",{className:"m-card__body",children:[!!(e!=null&&e.label)&&a(d,{id:`${e==null?void 0:e.id}`,className:`${e.className||"h5"} u-margin-bottom-xs`,children:e.label}),!!t&&a("p",{className:"small u-text-bold u-margin-bottom-xs",children:t}),!!r&&a("p",{className:"u-margin-bottom",children:r}),!!o&&a("p",{className:"u-text-right",children:u({...o,href:o.href??"#"},"arrow-right-1",{className:"has-icon-right","aria-labelledby":e==null?void 0:e.id})}),i]})]})}n(b,"Card");const C={title:"React/Molecules/Card",component:b,parameters:{docs:{description:{component:"Use cards to display content and actions on a single topic as a group. Elements like text and images are placed on them in a way that clearly indicates hierarchy."}}},argTypes:{image:{table:{type:{summary:"object"}},control:{type:"object"},defaultValue:{src:"https://placedog.net/1000/300?r",alt:"A random dog"},description:"The `image` prop sets the image, for the card component. It can have any of the props of an `Image` component passed as an attribute (use `children` prop to pass optional `Copyright`)."},title:{table:{type:{summary:"object"}},defaultValue:{label:"Card Title"},control:{type:"object"},description:"The `title` prop sets the title for the card component. It has the following format `{ label: 'string', tag: 'h1', id: 'title ID', className: 'h3' }` (`tag` can be omitted for an 'h5' tag)."},subTitle:{table:{type:{summary:"string"}},defaultValue:"May 4th 2021, 12:34",control:{type:"text"},description:"The `subTitle` prop sets the subtitle for the card component. In most cases this should be a date or date and time format."},description:{table:{type:{summary:"string"}},defaultValue:"Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram. Multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.",control:{type:"text"},description:"The `description` prop sets the text content for the card component."},link:{table:{type:{summary:"object"}},control:{type:"object"},defaultValue:{label:"link label",href:"https://www.google.be",target:"_blank"},description:"The `link` prop sets the footer action for the card component."},children:{control:{type:!1},table:{type:{summary:"ReactNode"}},description:"React Node(s) inside the card, can be used to have complete custom card content."},qa:h}},L="",V=["card"];export{V as __namedExportsOrder,L as card,C as default};
//# sourceMappingURL=Card.stories-7d3f4aa7.js.map
