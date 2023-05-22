import { Footer } from '@a-ui/react';

export function FooterExamples() {
  const items = [
    { label: '© stad Antwerpen' },
    { label: 'Privacy', href: '#' },
    { label: 'Toegankelijkheid', href: '#' },
    { label: 'Cookie instellingen', href: '#' }
  ];
  return (
    <div className="u-margin">
      <h2>Footer</h2>
      <Footer backToTop items={items} />
    </div>
  );
}

export default FooterExamples;
