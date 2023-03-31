var l=Object.defineProperty;var a=(t,o)=>l(t,"name",{value:o,configurable:!0});import{T as n}from"./Tag-3908332b.js";import{r as c}from"./index-d23035ce.js";import{c as m}from"./dom.utils-1db2b487.js";import{w as p}from"./render.utils-f99aabf1.js";import{j as e,a as g}from"./jsx-runtime-bb315772.js";import{Q as T}from"./stories.settings-7ac24d87.js";import"./Icon-26da32f2.js";import"./settings-4d2c475c.js";import"./log.utils-f56af116.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./layout.settings-9902fce9.js";import"./Avatar-f56fc850.js";import"./Spinner-2995a70f.js";function s({children:t=[],qa:o}){const r=m({"o-tag-list":!0});return e("ul",{className:r,"data-qa":o,children:c.exports.Children.map(t,i=>p(i,e("li",{className:"o-tag-list__item"}),!0))})}a(s,"TagList");const Q={title:"React/Organisms/TagList",component:s,parameters:{storySource:{source:`import Tag from '../../molecules/tag/Tag';
import TagList from './TagList';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Organisms/TagList',
  component: TagList,
  parameters: {
    docs: {
      description: {
        component:
          'The tag list component shows a collection of one or multiple tags, that are in one way or another related to each other or to the context they are placed next to.'
      }
    }
  },
  argTypes: {
    children: {
      table: {
        type: { summary: 'ReactNode[]' },
        description: 'The children of a \`TagList\` component are \`Tag\` components.'
      },
    },
    qa: QA_PROP_STORY
  }
};

const Template = ({ ...args }) => (
  <TagList {...args}>
    <Tag label="Hello 1" iconLeft="tags" />
    <Tag label="Hello 2" toggle iconLeft="tags" />
    <Tag label="Hello 3" iconLeft="tags"  />
  </TagList>
);

export const tagList = Template.bind({});
`,locationsMap:{"tag-list":{startLoc:{col:17,line:27},endLoc:{col:1,line:33},startBody:{col:17,line:27},endBody:{col:1,line:33}}}},docs:{description:{component:"The tag list component shows a collection of one or multiple tags, that are in one way or another related to each other or to the context they are placed next to."}}},argTypes:{children:{table:{type:{summary:"ReactNode[]"},description:"The children of a `TagList` component are `Tag` components."}},qa:T}},d=a(({...t})=>g(s,{...t,children:[e(n,{label:"Hello 1",iconLeft:"tags"}),e(n,{label:"Hello 2",toggle:!0,iconLeft:"tags"}),e(n,{label:"Hello 3",iconLeft:"tags"})]}),"Template"),S=d.bind({}),j=["tagList"];export{j as __namedExportsOrder,Q as default,S as tagList};
//# sourceMappingURL=TagList.stories-0819493e.js.map
