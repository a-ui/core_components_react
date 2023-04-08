var L=Object.defineProperty;var i=(e,t)=>L(e,"name",{value:t,configurable:!0});import{c as u}from"./dom.utils-1db2b487.js";import{I as x}from"./Icon-fde9928b.js";import{r as h}from"./index-d23035ce.js";import{S as M,D as R}from"./layout.settings-9902fce9.js";import{p as O}from"./math.utils-8c9f5f65.js";import{j as a,a as y}from"./jsx-runtime-bb315772.js";import{Q as A}from"./stories.settings-7ac24d87.js";import"./settings-dbf1bcd4.js";import"./log.utils-f56af116.js";import"./es.object.get-own-property-descriptor-89e834e9.js";const j=i((e,t,o,n)=>y("li",{className:"m-pagination__label",children:[y("span",{className:"u-screen-reader-only",children:[n," "]}),o.replace("%currentPage%",`${e}`).replace("%totalPages%",`${t}`)]},"pagination__label"),"renderTextPagination"),k=i((e,t,o,n)=>O(e,t).map((r,l)=>{if(r){const c=u({"is-active":r===e});return a("li",{children:a("a",{className:c,href:"#",onClick:g=>n&&n(r,g),"aria-label":`${o} ${r}`,"aria-current":r===e?"page":void 0,children:r})},l)}else return a("li",{children:"..."},l)}),"renderNumbersPagination");function b({currentPage:e=1,itemsPerPage:t,totalItems:o,onChange:n,display:m,size:r,ariaLabel:l,ariaLabelNextPage:c,ariaLabelPreviousPage:g,ariaLabelPage:f,text:T,qa:V}){const[p,_]=h.exports.useState(0),v=i(s=>{s.preventDefault(),e>1&&d(e-1)},"onPrev"),w=i(s=>{s.preventDefault(),e<p&&d(e+1)},"onNext"),d=i((s,P)=>(P&&P.preventDefault(),n&&n(s)),"pageChange"),C=u({"m-pagination":!0,[`m-pagination--${M[r||R]}`]:!!r}),N=u({"is-disabled":e<=1}),S=u({"is-disabled":e>=p});return h.exports.useEffect(()=>{if(o&&t){const s=Math.ceil(Math.abs(o)/Math.abs(t));_(s)}},[e,t,o]),a("nav",{role:"navigation","aria-label":l,"data-qa":V,children:y("ul",{className:C,children:[a("li",{className:"m-pagination__prev",children:a("a",{href:"#",className:N,"aria-label":g,onClick:v,children:a(x,{name:"arrow-left-1"})})},"pagination__prev"),m==="text"&&j(e,p,T,f),m==="numbers"&&k(e,p,f,d),a("li",{className:"m-pagination__next",children:a("a",{href:"#",className:S,"aria-label":c,onClick:w,children:a(x,{name:"arrow-right-1"})})},"pagination__next")]})})}i(b,"Pagination");b.defaultProps={currentPage:1,ariaLabel:"Paginering",ariaLabelNextPage:"Volgende pagina",ariaLabelPreviousPage:"Vorige pagina",ariaLabelPage:"Pagina",text:"%currentPage% van de %totalPages%",display:"numbers"};const G={title:"React/Molecules/Pagination",component:b,parameters:{storySource:{source:`import { Pagination } from './Pagination';
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
      defaultValue: 10,
      description: 'The amount of items that should be displayed per page.'
    },
    totalItems: {
      control: { type: 'number' },
      table: {
        type: { summary: 'number' }
      },
      defaultValue: 100,
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
      defaultValue: 'numbers',
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
      defaultValue: '%currentPage% of %totalPages%',
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
`,locationsMap:{pagination:{startLoc:{col:17,line:115},endLoc:{col:1,line:127},startBody:{col:17,line:115},endBody:{col:1,line:127}}}},docs:{description:{component:"The pagination component offers the user an easy method to jump between large amounts of related content that spans across multiple pages. These can also be rows in a data table, a list of cards, etc. Pagination should never be used to indicate progress."}}},argTypes:{currentPage:{table:{type:{summary:"number"},defaultValue:{summary:1}},description:"The page number of the current page. Use it together with `onChange` to control the component."},itemsPerPage:{control:{type:"number"},table:{type:{summary:"number"}},defaultValue:10,description:"The amount of items that should be displayed per page."},totalItems:{control:{type:"number"},table:{type:{summary:"number"}},defaultValue:100,description:"The total amount of items."},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Function that is triggered when page is updated. Makes the component controlled together with `currentPage` prop."},display:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"numbers"}},defaultValue:"numbers",options:["text","numbers"],description:"Set the type of pagination, or with all numbers or with one single text label."},size:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:"medium"}},options:["small","medium"],description:"Set the size of the pagination, `medium` is the default and can be omitted."},text:{if:{arg:"display",eq:"text"},control:{type:"text"},defaultValue:"%currentPage% of %totalPages%",table:{type:{summary:"string"},defaultValue:{summary:"%currentPage% van de %totalPages%"}},description:"Text used when the `display` mode is `text`. `%currentPage%` and `%totalPages%` can be used and will be replaced by their actual values."},ariaLabel:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Paginering"}},description:"The aria-label for the `Pagination` component."},ariaLabelPreviousPage:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Vorige pagina"}},description:"The aria-label for the previous page button in the `Pagination` component."},ariaLabelNextPage:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Volgende pagina"}},description:"The aria-label for the next page button in the `Pagination` component."},ariaLabelPage:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:"Pagina"}},description:"The aria-label for a page in the `Pagination` component."},qa:A}},q=i(e=>{const[t,o]=h.exports.useState(1);return a(b,{...e,currentPage:t,onChange:n=>{e.onChange(n),o(n)}})},"Template"),H=q.bind({}),J=["pagination"];export{J as __namedExportsOrder,G as default,H as pagination};
//# sourceMappingURL=Pagination.stories-87eaac70.js.map
