var a=Object.defineProperty;var o=(n,t)=>a(n,"name",{value:t,configurable:!0});import{A as e}from"./AccordionTab-6e7a1d14.js";import{Q as c}from"./stories.settings-7ac24d87.js";import{j as r}from"./jsx-runtime-bb315772.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./dom.utils-1db2b487.js";const u={title:"React/Molecules/Accordion",component:e,parameters:{storySource:{source:`import AccordionTab from './AccordionTab';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Accordion',
  component: AccordionTab,
  parameters: {
    docs: {
      description: {
        component:
          'An \`AccordionTab\` is a sub-component of an \`Accordion\` and should only be used within that component.'
      }
    }
  },
  args: {
    header: 'Hello who?',
    children: 'Hello World!',
    id: 'accordion-tab'
  },
  argTypes: {
    header: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Permanently visible header, with a descriptive title and status icon.'
    },
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode ' }
      },
      description:
        'Children of the \`AccordionTab\` are the content of the tab; a collapsible panel that can contain almost any type of content; text, images and media,...'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'ReactNode ' },
        defaultValue: { summary: '' }
      },
      description: 'The \`id\` is set on the button HTML element of the \`AccordionTab\`.'
    },
    open: {
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' }
      },
      description:
        'The \`open\` prop controles the \`AccordionTab\` toggle state. This prop makes the \`AccordionTab\` a controlled component and should be used together with \`onToggle\`.'
    },
    onToggle: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onToggle',
      description:
        'Function triggered when the \`AccordionTab\` is clicked. The first parameter of this function is the \`id\` prop.'
    },
    qa: QA_PROP_STORY
  }
};

const Template = (args) => {
  return <AccordionTab {...args}>{args.children}</AccordionTab>;
};

export const accordionTab = Template.bind({});
`,locationsMap:{"accordion-tab":{startLoc:{col:17,line:66},endLoc:{col:1,line:68},startBody:{col:17,line:66},endBody:{col:1,line:68}}}},docs:{description:{component:"An `AccordionTab` is a sub-component of an `Accordion` and should only be used within that component."}}},args:{header:"Hello who?",children:"Hello World!",id:"accordion-tab"},argTypes:{header:{control:{type:"text"},table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Permanently visible header, with a descriptive title and status icon."},children:{control:{type:"text"},table:{type:{summary:"ReactNode "}},description:"Children of the `AccordionTab` are the content of the tab; a collapsible panel that can contain almost any type of content; text, images and media,..."},id:{control:{type:"text"},table:{type:{summary:"ReactNode "},defaultValue:{summary:""}},description:"The `id` is set on the button HTML element of the `AccordionTab`."},open:{control:{type:"boolean"},table:{type:{summary:"boolean"}},description:"The `open` prop controles the `AccordionTab` toggle state. This prop makes the `AccordionTab` a controlled component and should be used together with `onToggle`."},onToggle:{control:{type:"function"},table:{type:{summary:"function"}},action:"onToggle",description:"Function triggered when the `AccordionTab` is clicked. The first parameter of this function is the `id` prop."},qa:c}},i=o(n=>r(e,{...n,children:n.children}),"Template"),y=i.bind({}),T=["accordionTab"];export{T as __namedExportsOrder,y as accordionTab,u as default};
//# sourceMappingURL=AccordionTab.stories-16c32f53.js.map
