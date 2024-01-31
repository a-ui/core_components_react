import { cloneElement, KeyboardEvent, MouseEvent, ReactElement, ReactNode } from 'react';
import { Link } from '../constants/application.types';
import { Size } from '../constants/layout.settings';
import { Avatar } from '../lib/atoms/avatar';
import { ButtonAddOnProps } from '../lib/atoms/button/Button.types';
import { Spinner } from '../lib/atoms/spinner';
import { Icon } from '../lib/base/icon';

export function wrapWithIf(toWrap: ReactNode, wrapper: ReactElement, condition: boolean): ReactNode {
  return condition ? cloneElement(wrapper, { children: toWrap }) : (toWrap as JSX.Element);
}

export function renderHTMLLink(
  link: Link,
  icon?: string,
  props?: { className?: string; 'aria-labelledby'?: string }
): ReactNode {
  if (!link?.href && !link?.onClick) {
    return link?.label || '';
  }
  if (link?.href) {
    return (
      <a href={link.href} target={link.target || '_self'} {...props}>
        {link.label || ''}
        {icon ? <Icon name={icon} /> : null}
      </a>
    );
  }

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    return link.onClick && link.onClick(event);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      return link.onClick && link.onClick(event);
    }
  };

  return (
    <a
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      {...props}
    >
      {link.label || ''}
      {icon ? <Icon name={icon} /> : null}
    </a>
  );
}

export function labelWrapper(children: ReactElement, label?: string, id?: string, labelId?: string) {
  if (label) {
    return (
      <div className="a-input">
        <label className="a-input__label" id={labelId} htmlFor={id}>
          {label}
        </label>
        {children}
      </div>
    );
  } else {
    return children;
  }
}

export function renderAddOn(addOn?: ButtonAddOnProps, size?: 'small' | 'medium' | 'large'): JSX.Element | null {
  if (addOn?.type === 'spinner') {
    return <Spinner ariaHidden size={size === Size.S ? Size.XS : Size.S} />;
  } else if (addOn?.type === 'avatar') {
    return <Avatar {...addOn?.avatarProps} size={size} />;
  } else if (addOn?.type === 'icon') {
    return <Icon {...addOn?.iconProps} />;
  }
  return null;
}
