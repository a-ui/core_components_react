var L=Object.defineProperty;var i=(e,t)=>L(e,"name",{value:t,configurable:!0});import{c as m}from"./dom.utils-1db2b487.js";import{I as x}from"./Icon-fde9928b.js";import{r as h}from"./index-d23035ce.js";import{S as M,D as R}from"./layout.settings-9902fce9.js";import{p as O}from"./math.utils-8c9f5f65.js";import{j as n,a as y}from"./jsx-runtime-bb315772.js";import{Q as A}from"./stories.settings-7ac24d87.js";import"./settings-dbf1bcd4.js";import"./log.utils-f56af116.js";import"./es.object.get-own-property-descriptor-89e834e9.js";const I=i((e,t,o,a)=>y("li",{className:"m-pagination__label",children:[y("span",{className:"u-screen-reader-only",children:[a," "]}),o.replace("%currentPage%",`${e}`).replace("%totalPages%",`${t}`)]},"pagination__label"),"renderTextPagination"),j=i((e,t,o,a)=>O(e,t).map((r,l)=>{if(r){const c=m({"is-active":r===e});return n("li",{children:n("a",{className:c,href:"#",onClick:g=>a&&a(r,g),"aria-label":`${o} ${r}`,"aria-current":r===e?"page":void 0,children:r})},l)}else return n("li",{children:"..."},l)}),"renderNumbersPagination");function b({currentPage:e=1,itemsPerPage:t,totalItems:o,onChange:a,display:u,size:r,ariaLabel:l,ariaLabelNextPage:c,ariaLabelPreviousPage:g,ariaLabelPage:f,text:T,qa:_}){const[p,v]=h.exports.useState(0),V=i(s=>{s.preventDefault(),e>1&&d(e-1)},"onPrev"),w=i(s=>{s.preventDefault(),e<p&&d(e+1)},"onNext"),d=i((s,P)=>(P&&P.preventDefault(),a&&a(s)),"pageChange"),C=m({"m-pagination":!0,[`m-pagination--${M[r||R]}`]:!!r}),N=m({"is-disabled":e<=1}),S=m({"is-disabled":e>=p});return h.exports.useEffect(()=>{if(o&&t){const s=Math.ceil(Math.abs(o)/Math.abs(t));v(s)}},[e,t,o]),n("nav",{role:"navigation","aria-label":l,"data-qa":_,children:y("ul",{className:C,children:[n("li",{className:"m-pagination__prev",children:n("a",{href:"#",className:N,"aria-label":g,onClick:V,children:n(x,{name:"arrow-left-1"})})},"pagination__prev"),u==="text"&&I(e,p,T,f),u==="numbers"&&j(e,p,f,d),n("li",{className:"m-pagination__next",children:n("a",{href:"#",className:S,"aria-label":c,onClick:w,children:n(x,{name:"arrow-right-1"})})},"pagination__next")]})})}i(b,"Pagination");b.defaultProps={currentPage:1,ariaLabel:"Paginering",ariaLabelNextPage:"Volgende pagina",ariaLabelPreviousPage:"Vorige pagina",ariaLabelPage:"Pagina",text:"%currentPage% van de %totalPages%",display:"numbers"};const G={title:"React/Molecules/Pagination",component:b,parameters:{storySource:{source:`import { Pagination } from './Pagination';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useState } from 'react';

export default {
  title: 'React/Molecules/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          'The pagination component offers the user an easy method to jump between large amounts of related content that spans across multiple pages. These can also be rows in a data table, a list of cards, etc. Pagination should never be used to indicate progress.'
      }
    }
  },
  args: {
    itemsPerPage: 10,
    totalItems: 100,
    display: 'numbers',
    text: '%currentPage% of %totalPages%'
  },
  argTypes: {
    currentPage: {
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 }
      },
      description: 'The page number of the current page. Use it together with \`onChange\` to control the component.'
    },
    itemsPerPage: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      },
      description: 'The amount of items that should be displayed per page.'
    },
    totalItems: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      },
      description: 'The total amount of items.'
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Function that is triggered when page is updated. Makes the component controlled together with \`currentPage\` prop.'
    },
    display: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'numbers' }
      },
      options: ['text', 'numbers'],
      description: 'Set the type of pagination, or with all numbers or with one single text label.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' }
      },
      options: ['small', 'medium'],
      description: 'Set the size of the pagination, \`medium\` is the default and can be omitted.'
    },
    text: {
      if: { arg: 'display', eq: 'text' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '%currentPage% van de %totalPages%' }
      },
      description:
        'Text used when the \`display\` mode is \`text\`. \`%currentPage%\` and \`%totalPages%\` can be used and will be replaced by their actual values.'
    },
    ariaLabel: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Paginering' }
      },
      description: 'The aria-label for the \`Pagination\` component.'
    },
    ariaLabelPreviousPage: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Vorige pagina' }
      },
      description: 'The aria-label for the previous page button in the \`Pagination\` component.'
    },
    ariaLabelNextPage: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Volgende pagina' }
      },
      description: 'The aria-label for the next page button in the \`Pagination\` component.'
    },
    ariaLabelPage: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Pagina' }
      },
      description: 'The aria-label for a page in the \`Pagination\` component.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [current, setCurrent] = useState(1);
  return (
    <Pagination
      {...args}
      currentPage={current}
      onChange={(p) => {
        args.onChange(p);
        setCurrent(p);
      }}
    />
  );
};

export const pagination = Template.bind({});
`,locationsMap:{pagination:{startLoc:{col:17,line:117},endLoc:{col:1,line:129},startBody:{col:17,line:117},endBody:{col:1,line:129}}}},docs:{description:{component:"The pagination component offers the user an easy method to jump between large amounts of related content that spans across multiple pages. These can also be rows in a data table, a list of cards, etc. Pagination should never be used to indicate progress."}}},args:{itemsPerPage:10,totalItems:100,display:"numbers",text:"%currentPage% of %totalPages%"},argTypes:{currentPage:{table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The page number of the current page. Use it together with `onChange` to control the component."},itemsPerPage:{control:{type:"number"},table:{type:{summary:"number"}},description:"The amount of items that should be displayed per page."},totalItems:{control:{type:"number"},table:{type:{summary:"number"}},description:"The total amount of items."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function that is triggered when page is updated. Makes the component controlled together with `currentPage` prop."},display:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"numbers"}},options:["text","numbers"],description:"Set the type of pagination, or with all numbers or with one single text label."},size:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}},options:["small","medium"],description:"Set the size of the pagination, `medium` is the default and can be omitted."},text:{if:{arg:"display",eq:"text"},control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"%currentPage% van de %totalPages%"}},description:"Text used when the `display` mode is `text`. `%currentPage%` and `%totalPages%` can be used and will be replaced by their actual values."},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Paginering"}},description:"The aria-label for the `Pagination` component."},ariaLabelPreviousPage:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Vorige pagina"}},description:"The aria-label for the previous page button in the `Pagination` component."},ariaLabelNextPage:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Volgende pagina"}},description:"The aria-label for the next page button in the `Pagination` component."},ariaLabelPage:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Pagina"}},description:"The aria-label for a page in the `Pagination` component."},qa:A}},k=i(e=>{const[t,o]=h.exports.useState(1);return n(b,{...e,currentPage:t,onChange:a=>{e.onChange(a),o(a)}})},"Template"),H=k.bind({}),J=["pagination"];export{J as __namedExportsOrder,G as default,H as pagination};
//# sourceMappingURL=Pagination.stories-ca82c87b.js.map
