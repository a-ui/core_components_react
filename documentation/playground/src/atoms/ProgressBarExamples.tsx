import { ProgressBar } from '@a-ui/react';
import { useEffect, useState } from 'react';

export function ProgressBarExamples() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (value + 1 > 100) {
        setValue(0);
      } else {
        setValue(value + 1);
      }
    }, 25);
  }, [value]);

  return (
    <div className="u-margin">
      <h2>Progress bars</h2>
      <div className="u-margin">
        <div className="u-margin-top">
          <ProgressBar percentage={value} label="Progress" labelId="defaultProgressbar" />
        </div>
        <div className="u-margin-top">
          <ProgressBar label="With label" percentage={value} large labelId="labelId" />
        </div>
      </div>
    </div>
  );
}

export default ProgressBarExamples;
