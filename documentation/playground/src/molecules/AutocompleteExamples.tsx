import { Autocomplete, Button, Tag } from '@a-ui/react';
import { useState } from 'react';

const items = [
  { label: 'Acadia', value: '1' },
  { label: 'American Samoa', value: '2' },
  { label: 'Arches', value: '3' },
  { label: 'Badlands', value: '4' },
  { label: 'Big Bend', value: '5' },
  { label: 'Biscayne', value: '6' },
  { label: 'Black Canyon of the Gunnison', value: '7' },
  { label: 'Bryce Canyon', value: '8' },
  { label: 'Canyonlands', value: '9' },
  { label: 'Capitol Reef', value: '10' }
];

export function AutocompleteExamples() {
  const [value, setValue] = useState<string>();
  const [inputValue, setInputValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>(value ? [value] : []);

  const handleChange = (value: string, name?: string, selection?: string[]) => {
    setValue(value);
    selection && setSelectedValues(selection);
  };

  const handleRemove = (name: string) => {
    const valueToRemove = name.replace('-delete', '');
    setSelectedValues(selectedValues.filter((v) => v !== valueToRemove));
  };

  return (
    <div className="u-margin" style={{ width: '420px' }}>
      <h2>Autocomplete</h2>
      <div className="u-margin">
        <Autocomplete id="autocomplete-example-1" multiple label="Select National Parc (Uncontrolled)" items={items} />

        <div className="u-margin-xs">Last value clicked: {items.find((i) => i.value === value)?.label}</div>
        <div className="u-margin-xs">
          {selectedValues
            .filter((v) => v !== '')
            .map((v) => {
              return (
                <Tag
                  key={v}
                  label={items.find((i) => i.value === v)?.label || ''}
                  name={v ?? undefined}
                  removable
                  onClick={handleRemove}
                />
              );
            })}
        </div>
        <Autocomplete
          id="autocomplete-example-2"
          noResultsText="NOTHING FOUND"
          label="Select National Parc (Controlled)"
          items={items}
          name="test"
          inputValue={inputValue}
          selection={selectedValues}
          multiple
          onInputChange={setInputValue}
          onChange={handleChange}
          value={value}
        />

        <Button className="u-margin-top" size="small" theme="warning" onClick={() => setValue('8')}>
          Click to select "Bryce Canyon"
        </Button>
      </div>
    </div>
  );
}

export default AutocompleteExamples;
