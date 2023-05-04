var W=Object.defineProperty;var s=(b,x)=>W(b,"name",{value:x,configurable:!0});import{Q as $}from"./stories.settings-7ac24d87.js";import{r as c,R as N}from"./index-d23035ce.js";import{a as U}from"./TextField-203da87d.js";import"./TextArea-4e125d57.js";import"./DefinitionList-850b66f5.js";import{F as M}from"./FunctionalList-3d217ebd.js";import{j as m}from"./jsx-runtime-bb315772.js";import{L as E}from"./ListItem-3aa94e1f.js";import"./Icon-fde9928b.js";import"./Avatar-a0dce5e3.js";import"./Checkbox-d28d43fa.js";import{F as Y}from"./Flyout-2219970d.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./dom.utils-1db2b487.js";import"./layout.settings-9902fce9.js";import"./input.renders-700890b4.js";import"./settings-dbf1bcd4.js";import"./log.utils-f56af116.js";import"./index-8eee599f.js";function L({id:b,label:x,items:n,name:d,multiple:a,inputValue:y,value:o,onInputChange:I,onChange:h,noResultsText:V,qa:D}){const[_,f]=c.exports.useState(!1),[u,O]=c.exports.useState(n),[P,j]=c.exports.useState(y||""),[q,T]=c.exports.useState(!a&&o||""),[l,A]=c.exports.useState(-1),[g,k]=c.exports.useState(a&&o||[]),i=y||y===""?y:P,w=o||o===""?o:q,S=N.useRef(null);c.exports.useEffect(()=>{o&&!a&&C(o,!0),o&&a&&k(o)},[o]),c.exports.useEffect(()=>{O((n||[]).filter(e=>{var t;return i?(t=e.label)==null?void 0:t.toLowerCase().includes(i.toLowerCase()):!0}))},[i,n]),c.exports.useEffect(()=>{if(S.current){const t=S.current.querySelector(`.a-list__item:nth-child(${l+1})`);t==null||t.scrollIntoView({block:"nearest",inline:"nearest"})}},[l]);const B=s(e=>{f(e)},"handleStateChange"),v=s(()=>{f(!1),A(-1)},"closeFlyout"),R=s(e=>{j(e),f(!0),w&&!e&&(T(""),!a&&h&&h("",d)),I&&I(e,d)},"handleInput"),C=s((e,t=!1)=>{if(!a&&o!==""&&(!o||o===e)){const r=n==null?void 0:n.find(p=>p.value===e);R((r==null?void 0:r.label)||""),T((r==null?void 0:r.value)||""),v()}!t&&h&&h(e,d)},"selectValue"),F=s(e=>{const t=n==null?void 0:n.find(p=>p.value===e);t&&T(t.value);const r=g.includes(e)?g.filter(p=>p!==e):[...g,e].filter(p=>p!=="");k(r),h&&h(r,d)},"selectMultiple"),G=s(()=>{const e=n==null?void 0:n.find(t=>t.value===w);e&&(i!=null&&i.length)&&e.label!==i&&R(e.label),v()},"setValueBack"),H=s(()=>{const e=u&&u[l];e&&(a?F(e.value):C(e.value))},"onEnter"),K=s(e=>{const t=(u==null?void 0:u.length)||0;switch(e.key){case"ArrowDown":return A(l===-1?0:(l+1)%t),f(!0);case"ArrowUp":return A(l===-1||l-1<0?t-1:l-1),f(!0);case"Enter":return H();case"Escape":return v()}},"handleKeyDown"),Q=s(e=>a?g.includes(e):e===w,"isValueActive");return m(Y,{scrollable:!0,hasPadding:!1,qa:D,trigger:m(U,{id:b,name:d,label:x,onBlur:G,value:i,onChange:e=>R(e.target.value),role:"combobox","aria-autocomplete":"list","aria-haspopup":"true","aria-expanded":_,onKeyDown:K}),ref:S,open:_,onStateChange:B,children:u&&u.length?m(M,{lined:!0,onItemClick:e=>{a?F(e):C(e)},children:u.map((e,t)=>m(E,{id:e.value,tabIndex:-1,highlighted:t===l,onMouseDown:r=>r.preventDefault(),active:Q(e.value),name:e.value,link:{href:""},children:e.label},e.value))}):m(M,{lined:!0,children:m(E,{id:"aui-autocomplete-no-results",children:m("small",{children:V})})})})}s(L,"Autocomplete");L.defaultProps={id:"aui-autocomplete",noResultsText:"Geen resultaten"};const ye={title:"React/Molecules/Autocomplete",component:L,parameters:{docs:{description:{component:"The `Autocomplete` component is a normal text input enhanced by a pannel of filtered suggestions."}}},args:{name:"aui-autocomplete",items:[{label:"Acadia",value:"1"},{label:"American Samoa",value:"2"},{label:"Arches",value:"3"},{label:"Canyonlands",value:"4"},{label:"Capitol Reef",value:"5"}],label:"National Parks",noResultsText:"Sorry, niet gevonden",multiple:!1},argTypes:{name:{control:{type:"text"},table:{type:{summary:"string"}},description:"The `name` prop; is set on the `input` HTML element of the `Autocomplete` component. It is also returned by `onChange` and `onInputChange` to identify the component."},items:{control:{type:"array"},table:{type:{summary:"array"},defaultValue:{summary:"[]"}},description:'The `items` prop control the results from the dropdown in the `Autocomplete` component. These `items` are objects in the format of `{ label: "", value: "" }`.'},label:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"The label of the `Autocomplete` component."},noResultsText:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Geen resultaten"}},description:"The text when no item match the provided search term."},multiple:{control:{type:"boolean"},table:{type:{summary:"boolean"},defaultValue:{summary:!1}},description:"The `multiple` (if set to `true`) prop will allow the user to select multiple values. The representation of those values is free to chose (e.g. use `Tag` components)"},inputValue:{table:{type:{summary:"string"}},description:"The `inputValue` prop controls the value of the `Autocomplete` input field. This prop makes the `Autocomplete` a controlled component and should be used together with `onInputChange`."},value:{table:{type:{summary:"string | string[]"}},description:"The `value` prop controls the value of the selected `Autocomplete` item. This prop makes the `Autocomplete` a controlled component and should be used together with `onChange`. When `multiple` is `true` the value should be an array of strings."},id:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"aui-autocomplete"}},description:"The `id` prop; set on the `input` HTML element of the `Autocomplete` component."},onChange:{control:{type:"function"},table:{type:{summary:" function"}},action:"onChange",description:"Function triggered when selecting an option from the `Autocomplete` dropdown. The first parameter of this function is the selected value, the second parameter is the `name` of the `Autocomplete` component. When the `multiple` prop is set to `true`, the value is an array."},onInputChange:{control:{type:"function"},table:{type:{summary:" function"}},action:"onInputChange",description:"Function triggered when the input field value changes. The first parameter of this function is the input, the second parameter is the given component name."},qa:$}},ge="",be=["autocomplete"];export{be as __namedExportsOrder,ge as autocomplete,ye as default};
//# sourceMappingURL=Autocomplete.stories-1dfc6dba.js.map
