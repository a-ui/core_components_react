import { Select } from '@a-ui/react';
import { SelectOption } from 'packages/antwerp-ui/react-components/src/lib/atoms/select/Select.types';
import React from 'react';

const options: SelectOption[] = [
  { value: 'first', label: 'First option' },
  { value: 'second', label: 'Second option' },
  { value: 'third', label: 'Third option' },
  { value: 'fourth', label: 'Fourth option' }
];

const placeholder = 'Make your choice';

export function SelectExamples() {
  const [value, setValue] = React.useState(placeholder);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="u-margin">
        <Select
          required
          id="test"
          label="Controlled Select with onChange"
          placeholder={placeholder}
          options={options}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="u-margin">
        <Select
          id="test-1"
          description="Something is not right"
          label="Controlled Select without onChange"
          placeholder={placeholder}
          options={options}
          value="third"
          disabled={false}
          size="small"
          state="error"
        />
      </div>
      <div className="u-margin">
        <Select
          required
          description="Something is right"
          state="success"
          inline
          id="test-2"
          label="Uncontrolled Inline select"
          options={options}
        />
      </div>
    </>
  );
}

export default SelectExamples;
