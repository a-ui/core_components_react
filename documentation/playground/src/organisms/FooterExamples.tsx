import { Footer } from '@a-ui/react';
import { Link } from 'packages/antwerp-ui/react-components/src/constants/application.types';
import { MouseEvent } from 'react';

export function FooterExamples() {
  const items: Link[] = [
    { label: '© stad Antwerpen', onClick: (event: MouseEvent<HTMLAnchorElement>) => console.log(event) },
    { label: 'Privacy' },
    { label: 'Toegankelijkheid', href: '#' },
    { label: 'Cookie instellingen', onClick: () => console.log('clicked') }
  ];
  return (
    <div className="u-margin">
      <h2>Footer</h2>
      <Footer backToTop items={items} />
    </div>
  );
}

export default FooterExamples;
