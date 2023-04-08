import DefinitionList from './DefinitionList';
import { QA_PROP_STORY } from '../../../../constants/stories.settings';

export default {
  title: 'React/Atoms/List/DefinitionList',
  component: DefinitionList,
  parameters: {
    docs: {
      description: {
        component:
          'The definition list is a component that can be used to list terms or definitions, together with their respective descriptions. It can be used to explain complicated jargon.'
      }
    }
  },
  args: {
    items: [
      { id: '1', term: 'Hello', description: 'World' },
      { id: '2', term: 'Term', description: 'Term description' }
    ]
  },
  argTypes: {
    items: {
      control: { type: 'array' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: [] }
      },
      description:
        'Items of the definition list. Array of objects `{id: "string", term: "string", description: "string"}`.'
    },
    qa: QA_PROP_STORY
  }
};

export const definitionList = '';
