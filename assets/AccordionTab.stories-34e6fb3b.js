var a=Object.defineProperty;var n=(e,t)=>a(e,"name",{value:t,configurable:!0});import{A as o}from"./AccordionTab-6e7a1d14.js";import{Q as c}from"./stories.settings-7ac24d87.js";import{j as r}from"./jsx-runtime-bb315772.js";import"./index-d23035ce.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./dom.utils-1db2b487.js";const b={title:"React/Molecules/Accordion",component:o,parameters:{storySource:{source:`import AccordionTab from './AccordionTab';
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
  argTypes: {
    header: {
      control: { type: 'text' },
      defaultValue: 'Hello who?',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' }
      },
      description: 'Permanently visible header, with a descriptive title and status icon.'
    },
    children: {
      control: { type: 'text' },
      defaultValue: 'Hello World!',
      table: {
        type: { summary: 'ReactNode ' }
      },
      description:
        'Children of the \`AccordionTab\` are the content of the tab; a collapsible panel that can contain almost any type of content; text, images and media,...'
    },
    id: {
      control: { type: 'text' },
      defaultValue: 'accordion-tab',
      table: {
        type: { summary: 'ReactNode ' },
        defaultValue: { summary: '' }
      },
      description:
        'The \`id\` is set on the button HTML element of the \`AccordionTab\`.'
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
`,locationsMap:{"accordion-tab":{startLoc:{col:17,line:65},endLoc:{col:1,line:67},startBody:{col:17,line:65},endBody:{col:1,line:67}}}},docs:{description:{component:"An `AccordionTab` is a sub-component of an `Accordion` and should only be used within that component."}}},argTypes:{header:{control:{type:"text"},defaultValue:"Hello who?",table:{type:{summary:"string"},defaultValue:{summary:""}},description:"Permanently visible header, with a descriptive title and status icon."},children:{control:{type:"text"},defaultValue:"Hello World!",table:{type:{summary:"ReactNode "}},description:"Children of the `AccordionTab` are the content of the tab; a collapsible panel that can contain almost any type of content; text, images and media,..."},id:{control:{type:"text"},defaultValue:"accordion-tab",table:{type:{summary:"ReactNode "},defaultValue:{summary:""}},description:"The `id` is set on the button HTML element of the `AccordionTab`."},open:{control:{type:"boolean"},table:{type:{summary:"boolean"}},description:"The `open` prop controles the `AccordionTab` toggle state. This prop makes the `AccordionTab` a controlled component and should be used together with `onToggle`."},onToggle:{control:{type:"function"},table:{type:{summary:"function"}},action:"onToggle",description:"Function triggered when the `AccordionTab` is clicked. The first parameter of this function is the `id` prop."},qa:c}},i=n(e=>r(o,{...e,children:e.children}),"Template"),y=i.bind({}),T=["accordionTab"];export{T as __namedExportsOrder,y as accordionTab,b as default};
//# sourceMappingURL=AccordionTab.stories-34e6fb3b.js.map
