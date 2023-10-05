import React, { forwardRef, ForwardedRef } from 'react';
import { TextFieldProps } from '../Input.types';
import { classNames } from '../../../../utils/dom.utils';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../../constants/layout.settings';
import { Icon } from '../../../base/icon';
import { renderCharacterCounter, renderDescription, renderLabel } from '../input.renders';
import { Spinner } from '../../spinner';
import './TextField.css';

export const TextField = forwardRef(function TextField(
  {
    addOn,
    autoComplete,
    charCounter,
    charCountText,
    description,
    disabled,
    id,
    role,
    inline,
    label,
    maxLength,
    name,
    onChange,
    qa,
    readOnly,
    required,
    size,
    state,
    type = 'text',
    value,
    onBlur,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp
  }: TextFieldProps,
  inputRef: ForwardedRef<HTMLInputElement>
) {
  const [characterCount, setCharacterCount] = React.useState(value ? value.length : 0);
  const addOnLeft = addOn?.type === 'text' && addOn.placement === 'left' ? addOn.content : null;
  const addOnRight = addOn?.type === 'text' && addOn.placement === 'right' ? addOn.content : null;
  const iconLeft = addOn?.type === 'icon' && addOn.placement === 'left' ? addOn.content : null;
  const iconRight = addOn?.type === 'icon' && addOn.placement === 'right' ? addOn.content : null;

  const classes = classNames({
    'a-input': true,
    'a-input--inline': !!inline,
    [`a-input--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'has-icon-left': !!iconLeft || (addOn?.type === 'spinner' && addOn?.placement === 'left'),
    'has-icon-right': !iconLeft && !!iconRight,
    'has-addon-left': !!addOnLeft,
    'has-addon-right': !!addOnRight,
    'has-error': state === 'error',
    'has-spinner': addOn?.type === 'spinner',
    [`has-spinner-${addOn?.placement}`]: !!addOn
  });

  const wrapperClasses = classNames({
    'a-input__wrapper': true,
    'a-input__wrapper--inline': !!inline
  });

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterCount(event.target.value.length);
    return onChange && onChange(event);
  };

  return (
    <div className={classes} data-qa={qa}>
      {renderLabel({ label, id, required, inline })}
      {renderDescription({ id, description, state })}
      <div className={wrapperClasses}>
        {addOn?.type === 'spinner' && <Spinner size="small" />}
        {!!iconLeft && <Icon name={iconLeft} />}
        {!!addOnLeft && <div className="a-input__addon">{addOnLeft}</div>}
        <input
          ref={inputRef}
          type={type}
          value={value}
          name={name}
          id={id}
          autoComplete={autoComplete}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          onChange={_handleChange}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          role={role}
          {...(charCounter && maxLength ? { 'aria-describedby': `${id}--counter` } : {})}
          {...(description ? { 'aria-describedby': `${id}--description` } : {})}
        ></input>
        {!!iconRight && !iconLeft && <Icon name={iconRight} />}
        {!!addOnRight && <div className="a-input__addon">{addOnRight}</div>}
      </div>
      {renderCharacterCounter({
        id,
        charCountText,
        charCounter,
        characterCount: value ? value.length : characterCount,
        maxLength
      })}
    </div>
  );
});

TextField.defaultProps = {
  type: 'text',
  id: 'aui-text-field',
  charCountText: '%count% / %max%'
};

export default TextField;
