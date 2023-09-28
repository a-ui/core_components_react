import{j as t,a as s,Q as y}from"./stories.settings-7040e2b8.js";import{r as n}from"./index-61bf1805.js";import{B as l}from"./Button-1920ecaa.js";import{F as b}from"./Flyout-84469678.js";import"./_commonjsHelpers-de833af9.js";import"./dom.utils-26b7419a.js";import"./layout.settings-581780cb.js";import"./render.utils-2b079e3b.js";import"./Avatar-0467fc58.js";import"./settings-2256c0f5.js";import"./Icon-b88d001d.js";import"./log.utils-973a80c9.js";import"./Spinner-d608c31b.js";import"./index-2801d3c9.js";function o({logoHref:r,logoAlt:d,menuItems:c,logoSrc:u,skipToMainLabel:h,qa:g}){return t("header",{className:"o-header","data-qa":g,children:s("div",{className:"o-header__content-wrapper",children:[s("div",{className:"o-header__content",children:[t("a",{href:"#main",className:"a-button a-button--text a-button--neutral o-header__button-skip",children:h}),t("a",{href:r,className:"o-header__logo",children:t("img",{src:u,alt:d})})]}),t("div",{className:"o-header__menu-items",children:(c||[]).map(e=>e.flyout?t(b,{...e.flyout,trigger:n.createElement(l,{...e,key:e.id,emphasis:"low",theme:"neutral",className:"o-header__button"},e.label)},e.id):n.createElement(l,{...e,key:e.id,emphasis:"low",theme:"neutral",className:"o-header__button"},e.label))})]})})}o.defaultProps={logoHref:"/",logoAlt:"Naar de startpagina",logoSrc:"https://cdn.antwerpen.be/core_branding_scss/6.3.0/assets/images/a-logo.svg",skipToMainLabel:"Ga naar inhoud",menuItems:[]};const j={title:"React/Organisms/Header",component:o,parameters:{docs:{description:{component:"The header component provides an important landmark for the user at the top of a page."}}},args:{logoHref:"/",logoSrc:"https://cdn.antwerpen.be/core_branding_scss/6.3.0/assets/images/a-logo.svg",logoAlt:"Naar de startpagina",skipToMainLabel:"Ga naar inhoud",menuItems:[{label:"Hello world"},{label:"Firstname Lastname",addOn:{type:"avatar",avatarProps:{image:"https://placedog.net/100/100?r"}},flyout:{children:"Flyout content",orientation:"bottom-right"}}]},argTypes:{logoHref:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"/"}},description:"The url where a click on the logo in the header component leads to."},logoSrc:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"https://cdn.antwerpen.be/core_branding_scss/6.3.0/assets/images/a-logo.svg"}},description:"The url for the src logo image in the header component."},logoAlt:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Naar de startpagina"}},description:"The alternative text for the logo image in the header component."},skipToMainLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Ga naar inhoud"}},description:"The label for the skip to main content button in the header."},menuItems:{table:{type:{summary:"array"},defaultValue:{summary:"[]"}},description:"Array of top right header menu items, use objects of button properties with extra property `label` and `flyout`. Use the `FlyoutProps` in the `flyout` property to add a menu item with a flyout."},qa:y}},f=r=>t(o,{...r}),a=f.bind({});var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"args => <Header {...args} />",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const E=["header"];export{E as __namedExportsOrder,j as default,a as header};
//# sourceMappingURL=Header.stories-7d65d991.js.map