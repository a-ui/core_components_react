import { SelectProps } from './Select.types';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import React from 'react';
import { SIZE_MAP } from '../../../constants/layout.settings';
import { DEFAULT_SIZE } from '../../../constants/layout.settings';
import { renderDescription, renderLabel } from '../input/input.renders';

export function Select({
  description,
  disabled,
  id,
  inline,
  label,
  name,
  options,
  placeholder,
  required,
  size,
  state,
  value,
  onChange,
  qa
}: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return onChange && onChange(e);
  };
  const classes = classNames({
    'a-input': true,
    'has-icon-right': true,
    'a-input--inline': !!inline,
    [`a-input--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'has-error': state === 'error'
  });
  const inputWrapperClasses = classNames({
    'a-input__wrapper': true,
    'a-input__wrapper--inline': !!inline
  });
  return (
    <div className={classes} data-qa={qa}>
      {renderLabel({ label, id, required, inline })}
      {renderDescription({ id, description, state })}
      <div className={inputWrapperClasses}>
        <select
          disabled={disabled}
          name={name}
          id={id}
          value={value}
          defaultValue={(!value && placeholder) || undefined}
          onChange={handleChange}
        >
          <option disabled>{placeholder}</option>
          {(options || []).map((o, index) => {
            return (
              <option key={`${o.value}-${index}`} value={o.value} disabled={o.disabled}>
                {o.label}
              </option>
            );
          })}
        </select>
        <Icon name="arrow-down-1" />
      </div>
    </div>
  );
}

Select.defaultProps = {
  placeholder: 'Maak een keuze'
};

export default Select;
