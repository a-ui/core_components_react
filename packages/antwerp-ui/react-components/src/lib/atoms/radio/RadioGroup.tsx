import { RadioGroupProps } from './Radio.types';
import { ChangeEvent, cloneElement, Children, ReactElement } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { renderDescription } from '../input/input.renders';

export function RadioGroup({ label, name, children = [], value, qa, onChange, description, state, required = false }: RadioGroupProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    return onChange && onChange(event.target?.value);
  };

  const classes = classNames({
    'a-input': true
  });

  return (
    <fieldset className={classes} data-qa={qa}>
      <legend className="a-input__label">{label}{required && <span className="u-text-danger">*</span>}</legend>
      {renderDescription({ description, state })}
      {Children.map(children, (child: ReactElement) => {
        return cloneElement(child, {
          name: name,
          onChange: handleChange,
          required: required,
          ...(value ? { checked: child.props.value === value } : {}),
          ...child.props
        });
      })}
    </fieldset>
  );
}

export default RadioGroup;
