import { Header } from '@a-ui/react';

export function HeaderExamples() {
  return (
    <div className="u-margin" style={{ marginBottom: '100px' }}>
      <h2>Header</h2>
      <Header
        menuItems={[
          { id: '1', label: 'Hello world' },
          {
            id: '2',
            label: 'Firstname Lastname',
            addOn: { type: 'avatar', avatarProps: { image: 'https://placedog.net/100/100?r' } },
            flyout: {
              children: 'Flyout content',
              orientation: 'bottom-right'
            }
          }
        ]}
      />
    </div>
  );
}

export default HeaderExamples;
