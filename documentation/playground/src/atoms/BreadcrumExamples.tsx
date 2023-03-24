import { Breadcrumb } from '@a-ui/react';
import React from 'react';

const BreadcrumbExamples = () => (
  <div className="u-margin">
    <h2>Breadcrumbs</h2>
    <div className="u-margin">
      <Breadcrumb
        items={[
          { id: '1', label: 'Hello', href: 'https://www.google.be' },
          { id: '2', label: 'World', href: 'https://www.wikipedia.be' },
          { id: '3', label: '!!!' }
        ]}
      />
      <Breadcrumb
        items={[
          { id: '1', label: 'Hello', href: 'https://www.google.be' },
          { id: '2', label: 'World', href: 'https://www.wikipedia.be' }
        ]}
      />
      <Breadcrumb
        items={[
          { id: '1', label: 'Hello', href: 'https://www.google.be' },
          { id: '2', label: 'World', href: 'https://www.wikipedia.be' }
        ]}
        title={{ label: 'I am a default title' }}
      />
      <Breadcrumb
        items={[
          { id: '1', label: 'Hello', href: 'https://www.google.be' },
          { id: '2', label: 'World', href: 'https://www.wikipedia.be' }
        ]}
        title={{ label: 'I am an h2 title', tag: 'h2', className: 'h4' }}
      />

      <Breadcrumb
        items={[
          { id: '1', label: 'Hello', href: 'https://www.google.be' },
          { id: '2', label: 'World', href: 'https://www.wikipedia.be' }
        ]}
        renderLinkFunction={(link) => <a href="https://www.google.be">LINK: {link.href} is now GOOGLE</a>}
      />
    </div>
  </div>
);

export default BreadcrumbExamples;
