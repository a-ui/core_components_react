import { TextFieldProps } from '../Input.types';
import { classNames } from '../../../../utils/dom.utils';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../../constants/layout.settings';
import { Icon } from '../../../base/icon';
import { renderCharacterCounter, renderDescription, renderLabel } from '../input.renders';
import { ForwardedRef, forwardRef, useState } from 'react';

export const TextField = forwardRef(function TextField(
  {
    addon,
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
  const [characterCount, setCharacterCount] = useState(value ? value.length : 0);
  const addonLeft = addon?.type === 'text' && addon.placement === 'left' ? addon.content : null;
  const addonRight = addon?.type === 'text' && addon.placement === 'right' ? addon.content : null;
  const iconLeft = addon?.type === 'icon' && addon.placement === 'left' ? addon.content : null;
  const iconRight = addon?.type === 'icon' && addon.placement === 'right' ? addon.content : null;

  const classes = classNames({
    'a-input': true,
    'a-input--inline': !!inline,
    [`a-input--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'has-icon-left': !!iconLeft,
    'has-icon-right': !iconLeft && !!iconRight,
    'has-addon-left': !!addonLeft,
    'has-addon-right': !!addonRight,
    'has-error': state === 'error'
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
        {!!iconLeft && <Icon name={iconLeft} />}
        {!!addonLeft && <div className="a-input__addon">{addonLeft}</div>}
        <input
          ref={inputRef}
          type={type}
          value={value}
          name={name}
          id={id}
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
        {!!addonRight && <div className="a-input__addon">{addonRight}</div>}
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
