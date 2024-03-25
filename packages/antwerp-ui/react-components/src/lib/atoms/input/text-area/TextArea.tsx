import { classNames } from '../../../../utils/dom.utils';
import { DEFAULT_SIZE, SIZE_MAP, State } from '../../../../constants/layout.settings';
import { useState } from 'react';
import { renderCharacterCounter, renderDescription, renderLabel } from '../input.renders';
import { TextAreaProps } from '../Input.types';

export function TextArea({
  charCounter,
  charCountText,
  description,
  disabled,
  id = 'aui-text-area',
  inline,
  label,
  maxLength,
  maxLengthBlocksInput,
  name,
  onChange,
  qa,
  readOnly,
  required,
  size,
  state,
  value,
  onBlur,
  onClick,
  onFocus,
  onKeyDown,
  onKeyUp
}: TextAreaProps) {
  const [characterCount, setCharacterCount] = useState(value ? value.length : 0);

  const charCounterText = charCountText ? charCountText : maxLength ? '%count% / %max%' : '%count%';

  const inputClasses = classNames({
    'a-input': true,
    'a-input--inline': !!inline,
    [`a-input--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'has-error': state === State.ERROR
  });

  const wrapperClasses = classNames({
    'a-input__wrapper': true,
    'a-input__wrapper--inline': !!inline
  });

  const _handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharacterCount(event.target.value.length);
    return onChange && onChange(event);
  };

  return (
    <div className={inputClasses} data-qa={qa}>
      {renderLabel({ label, id, required, inline })}
      {renderDescription({ id, description, state })}
      <div className={wrapperClasses}>
        <textarea
          value={value}
          name={name}
          id={id}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          {...(charCounter && maxLength ? { 'aria-describedby': `${id}--counter` } : {})}
          {...(description ? { 'aria-describedby': `${id}--description` } : {})}
          maxLength={maxLength && maxLengthBlocksInput ? maxLength : undefined}
          onChange={_handleChange}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
        ></textarea>
      </div>
      {renderCharacterCounter({
        id,
        charCountText: charCounterText,
        charCounter,
        characterCount: value ? value.length : characterCount,
        maxLength
      })}
    </div>
  );
}

export default TextArea;
