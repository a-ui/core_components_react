import { StepIndicator } from '@acpaas-ui/react-components';
import { useState } from 'react';

export function StepIndicatorExamples() {
  const [clickedOn, setClickedOn] = useState('');
  return (
    <div className="u-margin">
      <h2>Step Indicator</h2>
      <div className="u-margin">
        <p>Clicked on step: {clickedOn}</p>
        <StepIndicator
          steps={[
            { id: 'step1', complete: true, label: 'Stap 1', link: { href: '#' } },
            { id: 'step2', active: true, label: 'Stap 2 - Gegevens' },
            { id: 'step3' },
            { id: 'step4', link: { href: '#' } }
          ]}
          onStepClick={setClickedOn}
        />
      </div>
    </div>
  );
}

export default StepIndicatorExamples;
