import { NavigationList } from '@a-ui/react';
import { useState } from 'react';

export function NavigationListExamples() {
  const [active, setActive] = useState('1');
  return (
    <div className="u-margin">
      <h2>Navigation Lists</h2>
      <div className="u-margin" style={{ maxWidth: '300px' }}>
        <NavigationList
          border={true}
          items={[
            { id: '1', label: 'Overzicht', active: true },
            { id: '2', label: 'Bijlagen' },
            { id: '3', label: 'Locaties' },
            { id: '4', label: 'Communicatie', disabled: true }
          ]}
        />
      </div>
      <NavigationList
        onItemClick={setActive}
        items={[
          { id: '1', label: 'Overzicht', active: active === '1' },
          { id: '2', label: 'Bijlagen', active: active === '2' },
          { id: '3', label: 'Locaties', active: active === '3' }
        ]}
      />
      <NavigationList
        direction={'vertical'}
        items={[
          { id: '1', label: 'Overzicht', active: true },
          { id: '2', label: 'Bijlagen' },
          { id: '3', label: 'Locaties' },
          { id: '4', label: 'Communicatie', disabled: true }
        ]}
      />
    </div>
  );
}

export default NavigationListExamples;
