/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { TextField } from '../../atoms/input';
import { FunctionalList, ListItem } from '../../atoms/list';
import { Flyout } from '../flyout';
import { AutocompleteProps } from './Autocomplete.types';
import './Autocomplete.css';

export function Autocomplete({
  id,
  label,
  items,
  name,
  multiple,
  inputValue,
  value,
  onInputChange,
  onChange,
  noResultsText,
  qa,
  description,
  state,
  addOn
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState(items);
  const [input, setInput] = useState(inputValue || '');
  const [selected, setSelected] = useState<string>((!multiple && (value as string)) || '');
  const [cursor, setCursor] = useState(-1);
  const [selectedMultiple, setSelectedMultiple] = useState<string[]>((multiple && (value as string[])) || []);

  const fieldValue = inputValue || inputValue === '' ? inputValue : input;
  const selectedValue = value || value === '' ? value : selected;

  const flyoutRef = React.useRef(null);

  useEffect(() => {
    if (value && !multiple) {
      selectValue(value as string, true);
    }
    if (value && multiple) {
      setSelectedMultiple(value as string[]);
    }
  }, [value]);

  useEffect(() => {
    setResults(
      (items || []).filter((i) => (fieldValue ? i.label?.toLowerCase().includes(fieldValue.toLowerCase()) : true))
    );
  }, [fieldValue, items]);

  useEffect(() => {
    if (flyoutRef.current) {
      const current = flyoutRef.current as HTMLDivElement;
      const highlighted = current.querySelector(`.a-list__item:nth-child(${cursor + 1})`);
      highlighted?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }, [cursor]);

  const handleStateChange = (state: boolean) => {
    setIsOpen(state);
  };

  const closeFlyout = () => {
    setIsOpen(false);
    setCursor(-1);
  };

  const handleInput = (val: string) => {
    setInput(val);
    setIsOpen(true);
    if (selectedValue && !val) {
      setSelected('');
      !multiple && onChange && onChange('', name);
    }
    onInputChange && onInputChange(val, name);
  };

  const selectValue = (val: string, silence = false) => {
    if (!multiple && value !== '' && (!value || value === val)) {
      const actualValue = items?.find((i) => i.value === val);
      handleInput(actualValue?.label || '');
      setSelected(actualValue?.value || '');
      closeFlyout();
    }
    !silence && onChange && onChange(val, name);
  };

  const selectMultiple = (val: string) => {
    const actualValue = items?.find((i) => i.value === val);
    actualValue && setSelected(actualValue.value);
    const newSelectedMultiple = !selectedMultiple.includes(val)
      ? [...selectedMultiple, val].filter((v) => v !== '')
      : selectedMultiple.filter((value) => value !== val);
    setSelectedMultiple(newSelectedMultiple);
    onChange && onChange(newSelectedMultiple, name);
  };

  const setValueBack = () => {
    const actualValue = items?.find((i) => i.value === selectedValue);
    if (actualValue && fieldValue?.length && actualValue.label !== fieldValue) {
      handleInput(actualValue.label);
    }
    closeFlyout();
  };

  const onEnter = () => {
    const highlighted = results && results[cursor];
    if (highlighted) {
      multiple ? selectMultiple(highlighted.value) : selectValue(highlighted.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const totalResults = results?.length || 0;
    switch (e.key) {
      case 'ArrowDown':
        setCursor(cursor === -1 ? 0 : (cursor + 1) % totalResults);
        return setIsOpen(true);
      case 'ArrowUp':
        setCursor(cursor === -1 ? totalResults - 1 : cursor - 1 < 0 ? totalResults - 1 : cursor - 1);
        return setIsOpen(true);
      case 'Enter':
        return onEnter();
      case 'Escape':
        return closeFlyout();
      default:
        break;
    }
  };

  const isValueActive = (val: string) => {
    return multiple ? selectedMultiple.includes(val) : val === selectedValue;
  };

  return (
    <Flyout
      scrollable
      hasPadding={false}
      qa={qa}
      className="m-autocomplete"
      trigger={
        <TextField
          id={id}
          name={name}
          label={label}
          onBlur={setValueBack}
          value={fieldValue}
          onChange={(e) => handleInput(e.target.value)}
          role="combobox"
          aria-autocomplete="list"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onKeyDown={handleKeyDown}
          description={description}
          state={state}
          addOn={addOn ? { ...addOn, content: addOn.content } : undefined}
        />
      }
      ref={flyoutRef}
      open={isOpen}
      onStateChange={handleStateChange}
    >
      {results && results.length ? (
        <FunctionalList
          lined
          onItemClick={(v) => {
            multiple ? selectMultiple(v) : selectValue(v);
          }}
        >
          {results.map((r, i) => (
            <ListItem
              id={r.value}
              tabIndex={-1}
              highlighted={i === cursor}
              onMouseDown={(e) => e.preventDefault()}
              active={isValueActive(r.value)}
              name={r.value}
              link={{ href: '' }}
              key={r.value}
            >
              {r.label}
            </ListItem>
          ))}
        </FunctionalList>
      ) : (
        <FunctionalList lined>
          <ListItem id="aui-autocomplete-no-results">
            <small>{noResultsText}</small>
          </ListItem>
        </FunctionalList>
      )}
    </Flyout>
  );
}

Autocomplete.defaultProps = {
  id: 'aui-autocomplete',
  noResultsText: 'Geen resultaten'
};

export default Autocomplete;
