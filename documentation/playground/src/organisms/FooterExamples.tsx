import { Footer } from '@acpaas-ui/react-components';

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
      <div className="u-margin">
        <Footer items={items} />
        <Footer backToTop backToTopAriaLabel="Naar omhoog" items={items} />
      </div>
    </div>
  );
}

export default FooterExamples;
