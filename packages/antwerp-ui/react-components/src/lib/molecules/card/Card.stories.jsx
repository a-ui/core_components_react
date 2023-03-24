import Card from './Card';
import { QA_PROP_STORY } from '../../../constants/stories.settings';

export default {
  title: 'React/Molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'Use cards to display content and actions on a single topic as a group. Elements like text and images are placed on them in a way that clearly indicates hierarchy.'
      }
    }
  },
  argTypes: {
    image: {
      table: {
        type: { summary: 'object' }
      },
      control: { type: 'object' },
      defaultValue: {
        src: 'https://placedog.net/1000/300?r',
        alt: 'A random dog'
      },
      description:
        'The `image` prop sets the image, for the card component. It can have any of the props of an `Image` component passed as an attribute (use `children` prop to pass optional `Copyright`).'
    },
    title: {
      table: {
        type: { summary: 'object' }
      },
      defaultValue: { label: 'Card Title' },
      control: { type: 'object' },
      description:
        "The `title` prop sets the title for the card component. It has the following format `{ label: 'string', tag: 'h1', id: 'title ID', className: 'h3' }` (`tag` can be omitted for an 'h5' tag)."
    },
    subTitle: {
      table: {
        type: { summary: 'string' }
      },
      defaultValue: 'May 4th 2021, 12:34',
      control: { type: 'text' },
      description:
        'The `subTitle` prop sets the subtitle for the card component. In most cases this should be a date or date and time format.'
    },
    description: {
      table: {
        type: { summary: 'string' }
      },
      defaultValue:
        'Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram. Multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae.',
      control: { type: 'text' },
      description: 'The `description` prop sets the text content for the card component.'
    },
    link: {
      table: {
        type: { summary: 'object' }
      },
      control: { type: 'object' },
      defaultValue: {
        label: 'link label',
        href: 'https://www.google.be',
        target: '_blank'
      },
      description: 'The `link` prop sets the footer action for the card component.'
    },
    children: {
      control: { type: false },
      table: {
        type: { summary: 'ReactNode' }
      },
      description: 'React Node(s) inside the card, can be used to have complete custom card content.'
    },
    qa: QA_PROP_STORY
  }
};

export const card = '';
