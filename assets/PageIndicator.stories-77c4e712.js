var A=Object.defineProperty;var s=(o,a)=>A(o,"name",{value:a,configurable:!0});import{R as x,r as _}from"./index-d23035ce.js";import{c as y}from"./dom.utils-1db2b487.js";import{S,D as L}from"./layout.settings-9902fce9.js";import{j as t,a as R}from"./jsx-runtime-bb315772.js";import{Q as V}from"./stories.settings-7ac24d87.js";import"./es.object.get-own-property-descriptor-89e834e9.js";function v({qa:o,size:a,pages:n,activePage:i,onPageChange:f}){const[c,m]=x.useState(0),P=s(e=>m(e),"handleFocus"),w=s(e=>()=>f&&f(e),"clickHandler"),I=s(e=>{var g;const d=e.key==="ArrowLeft",r=e.key==="ArrowRight";if(d||r){(g=document.getElementById(i))==null||g.setAttribute("tabindex","-1");let p=c;r&&(p=c+1>=n.length?0:c+1,m(p)),d&&(p=c-1<0?n.length-1:c-1,m(p));const u=n[p].id;if(u){const l=document.getElementById(u);l==null||l.setAttribute("tabindex","0"),n.filter(h=>h.id!==u).forEach(h=>{var b;(b=document.getElementById(h.id))==null||b.setAttribute("tabindex","-1")}),l==null||l.focus()}}},"handleArrowNavigation"),C=y({"a-page-indicator":!0,[`a-page-indicator--${S[a||L]}`]:!!a});return t("div",{className:C,"data-qa":o,onKeyDown:I,role:"tablist",children:n==null?void 0:n.map((e,d)=>{const r=!!i&&i===e.id,g=y({"a-page-indicator__item":!0,"is-active":r});return t("button",{id:e.id,role:"tab",className:g,"aria-label":e.ariaLabel,"aria-selected":r?"true":"false","aria-controls":e.ariaControls,tabIndex:r?0:-1,onClick:w(e.id),onFocus:()=>P(d)},e.id)})})}s(v,"PageIndicator");const B={title:"React/Molecules/PageIndicator",component:v,parameters:{storySource:{source:`import { useState } from 'react';
import PageIndicator from './PageIndicator';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/PageIndicator',
  component: PageIndicator,
  parameters: {
    docs: {
      description: {
        component:
          'A page indicator is used to inform the users on which panel or page in a set they are currently viewing. It displays the total number of panels, as well as which panel is currently active, or in view.'
      }
    }
  },
  argTypes: {
    activePage: {
      control: { type: null },
      defaultValue: 'page-1',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'page-1' }
      },
      description:
        'ID of the current active page. Must be one of IDs of pages provided via \`pages\` prop. Makes the component controlled, use \`onPageChange\` to listen for changes.'
    },
    pages: {
      control: { type: 'object' },
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' }
      },
      defaultValue: [
        { id: 'page-1', ariaControls: 'panel-1', ariaLabel: 'Page 1' },
        { id: 'page-2', ariaControls: 'panel-2', ariaLabel: 'Page 2' },
        { id: 'page-3', ariaControls: 'panel-3', ariaLabel: 'Page 3' }
      ],
      description: 'Allows to define pages displayed with the component.'
    },
    size: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      defaultValue: '',
      options: ['', 'large', 'small'],
      description: 'Size of the component.'
    },
    onPageChange: {
      control: { type: 'function' },
      action: 'onPageChange',
      table: {
        type: { summary: 'function' }
      },
      description: 'Allows to control which page is activated. First parameter of the function is the new page.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  const [activePage, setActivePage] = useState('page-1');
  return (
    <div role="tablist">
      <div
        id="panel-1"
        className="u-margin-bottom"
        role="tabpanel"
        aria-labelledby="page-1"
        hidden={activePage !== 'page-1'}
      >
        <p>Content for the first panel (switch page to change content)</p>
      </div>
      <div
        id="panel-2"
        className="u-margin-bottom"
        role="tabpanel"
        aria-labelledby="page-2"
        hidden={activePage !== 'page-2'}
      >
        <p>Content for the second panel (switch page to change content)</p>
      </div>
      <div
        id="panel-3"
        className="u-margin-bottom"
        role="tabpanel"
        aria-labelledby="page-3"
        hidden={activePage !== 'page-3'}
      >
        <p>Content for the third panel (switch page to change content)</p>
      </div>
      <PageIndicator
        {...args}
        activePage={activePage}
        onPageChange={(p) => {
          args.onPageChange(p);
          setActivePage(p);
        }}
      />
    </div>
  );
};

export const pageIndicator = Template.bind({});
`,locationsMap:{"page-indicator":{startLoc:{col:17,line:62},endLoc:{col:1,line:103},startBody:{col:17,line:62},endBody:{col:1,line:103}}}},docs:{description:{component:"A page indicator is used to inform the users on which panel or page in a set they are currently viewing. It displays the total number of panels, as well as which panel is currently active, or in view."}}},argTypes:{activePage:{control:{type:null},defaultValue:"page-1",table:{type:{summary:"text"},defaultValue:{summary:"page-1"}},description:"ID of the current active page. Must be one of IDs of pages provided via `pages` prop. Makes the component controlled, use `onPageChange` to listen for changes."},pages:{control:{type:"object"},table:{type:{summary:"array"},defaultValue:{summary:"[]"}},defaultValue:[{id:"page-1",ariaControls:"panel-1",ariaLabel:"Page 1"},{id:"page-2",ariaControls:"panel-2",ariaLabel:"Page 2"},{id:"page-3",ariaControls:"panel-3",ariaLabel:"Page 3"}],description:"Allows to define pages displayed with the component."},size:{control:{type:"select"},table:{type:{summary:"string"},defaultValue:{summary:""}},defaultValue:"",options:["","large","small"],description:"Size of the component."},onPageChange:{control:{type:"function"},action:"onPageChange",table:{type:{summary:"function"}},description:"Allows to control which page is activated. First parameter of the function is the new page."},qa:V}},N=s(o=>{const[a,n]=_.exports.useState("page-1");return R("div",{role:"tablist",children:[t("div",{id:"panel-1",className:"u-margin-bottom",role:"tabpanel","aria-labelledby":"page-1",hidden:a!=="page-1",children:t("p",{children:"Content for the first panel (switch page to change content)"})}),t("div",{id:"panel-2",className:"u-margin-bottom",role:"tabpanel","aria-labelledby":"page-2",hidden:a!=="page-2",children:t("p",{children:"Content for the second panel (switch page to change content)"})}),t("div",{id:"panel-3",className:"u-margin-bottom",role:"tabpanel","aria-labelledby":"page-3",hidden:a!=="page-3",children:t("p",{children:"Content for the third panel (switch page to change content)"})}),t(v,{...o,activePage:a,onPageChange:i=>{o.onPageChange(i),n(i)}})]})},"Template"),F=N.bind({}),Q=["pageIndicator"];export{Q as __namedExportsOrder,B as default,F as pageIndicator};
//# sourceMappingURL=PageIndicator.stories-77c4e712.js.map
