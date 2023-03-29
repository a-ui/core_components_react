var s=Object.defineProperty;var e=(o,n)=>s(o,"name",{value:n,configurable:!0});import{c as d}from"./dom.utils-1db2b487.js";import{j as t,a as p}from"./jsx-runtime-bb315772.js";import{A as c}from"./AccordionTab-6e7a1d14.js";import{Q as l}from"./stories.settings-7ac24d87.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";function r({children:o=[],type:n,qa:i}){const a=d({"m-accordion":!0,"m-accordion--open":n==="open"});return t("div",{className:a,"data-qa":i,children:o})}e(r,"Accordion");const g={title:"React/Molecules/Accordion",component:r,parameters:{storySource:{source:`import { Accordion } from './Accordion';
import AccordionTab from './AccordionTab';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'An accordion is a flexible control that allows for large chunks of information to be presented within a single page through progressive disclosure. It aims to reduce cognitive load and allows the user to expose or hide multiple blocks of information as they choose.'
      }
    }
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      table: {
        type: { summary: 'string' }
      },
      options: ['', 'open'],
      description: 'Set the type of the accordion component. An open accordion omits the outside borders.'
    },
    children: {
      table: {
        type: { summary: 'ReactNode | ReactNode[]' }
      },
      description: 'Children of the \`Accordion\` component are \`AccordionTab\` components.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  return (
    <Accordion type={args.type}>
      <AccordionTab header="Tab 1">Content</AccordionTab>
      <AccordionTab header="Tab 2">Content 2</AccordionTab>
    </Accordion>
  );
};

export const accordion = Template.bind({});
`,locationsMap:{accordion:{startLoc:{col:17,line:35},endLoc:{col:1,line:42},startBody:{col:17,line:35},endBody:{col:1,line:42}}}},docs:{description:{component:"An accordion is a flexible control that allows for large chunks of information to be presented within a single page through progressive disclosure. It aims to reduce cognitive load and allows the user to expose or hide multiple blocks of information as they choose."}}},argTypes:{type:{control:{type:"select"},table:{type:{summary:"string"}},options:["","open"],description:"Set the type of the accordion component. An open accordion omits the outside borders."},children:{table:{type:{summary:"ReactNode | ReactNode[]"}},description:"Children of the `Accordion` component are `AccordionTab` components."},qa:l}},m=e(o=>p(r,{type:o.type,children:[t(c,{header:"Tab 1",children:"Content"}),t(c,{header:"Tab 2",children:"Content 2"})]}),"Template"),R=m.bind({}),x=["accordion"];export{x as __namedExportsOrder,R as accordion,g as default};
//# sourceMappingURL=Accordion.stories-6abb7c4c.js.map
