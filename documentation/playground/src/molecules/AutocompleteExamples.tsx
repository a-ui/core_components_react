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
  const handleChangeSingle = (value: string | string[], name?: string) => {
    setValue(value as string);
  };

  const [valueMulti, setValueMulti] = useState<string[]>([]);
  const handleChangeMulti = (value: string | string[], name?: string) => {
    setValueMulti(value as string[]);
  };
  const handleRemove = (name: string) => {
    const valueToRemove = name.replace('-delete', '');
    setValueMulti(valueMulti.filter((v) => v !== valueToRemove));
  };

  return (
    <div className="u-margin" style={{ width: '700px' }}>
      <h2>Autocomplete</h2>
      <div className="u-margin">
        <Autocomplete id="autocomplete-example-1" label="Select National Parc (Uncontrolled)" items={items} />
        <Autocomplete
          id="autocomplete-example-2"
          noResultsText="NOTHING FOUND"
          label="Select National Parc (Controlled)"
          items={items}
          name="test"
          inputValue={inputValue}
          value={value}
          onInputChange={setInputValue}
          onChange={handleChangeSingle}
        />
        <Button className="u-margin-top" size="small" theme="warning" onClick={() => setValue('8')}>
          Click to select "Bryce Canyon"
        </Button>

        <div className="u-margin-top-xs u-margin-bottom-xs">
          {valueMulti.map((v) => {
            return (
              <Tag
                key={v}
                label={items.find((i) => i.value === v)?.label || ''}
                name={v ?? undefined}
                removable
                // onClick={handleRemove}
              />
            );
          })}
        </div>
        <Autocomplete
          id="autocomplete-example-3"
          label="Autocomplete multiple"
          items={items}
          value={valueMulti}
          multiple
          onChange={handleChangeMulti}
        />
        <Autocomplete
          id="autocomplete-example-4"
          label="Autocomplete icon addon"
          addon={{
            type: 'text',
            placement: 'left',
            content: 'a11y'
          }}
        />
        <Autocomplete
          id="autocomplete-example-5"
          label="Autocomplete spinner addon"
          addon={{
            type: 'spinner',
            placement: 'right'
          }}
        />
      </div>
    </div>
  );
}

export default AutocompleteExamples;
