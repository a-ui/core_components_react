import { cloneElement, ForwardedRef, forwardRef, useImperativeHandle, useRef, useState, useEffect, useCallback } from 'react';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { FlyoutProps } from './Flyout.types';

export const Flyout = forwardRef(function Flyout(
  {
    trigger,
    open,
    hasPadding = true,
    className = '',
    orientation = 'bottom-left',
    size,
    children,
    scrollable = false,
    onStateChange,
    qa
  }: FlyoutProps,
  forwardRef: ForwardedRef<HTMLDivElement | null>
) {
  const [isOpen, setIsOpen] = useState(!!open);
  const showFlyout = open === false || open === true ? open : isOpen;

  const flyoutRef = useRef<HTMLDivElement | null>(null);
  useImperativeHandle(forwardRef, () => flyoutRef.current);

  const _handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      const area = flyoutRef.current;
      if (!area) return;
      if (e.target === area.lastChild) {
        e.preventDefault();
      }
      if (!area.contains(e.target as Node)) {
        setIsOpen(false);
        onStateChange?.(false);
      }
    },
    [onStateChange]
  );

  useEffect(() => {
    if (showFlyout) {
      document.addEventListener('mousedown', _handleOutsideClick, false);
      return () => {
        document.removeEventListener('mousedown', _handleOutsideClick, false);
      };
    }
  }, [showFlyout, _handleOutsideClick]);

  const _toggleIsOpen = () => {
    const newState = !showFlyout;
    setIsOpen(newState);
    onStateChange?.(newState);
  };

  const flyoutClasses = classNames({
    'm-flyout': true,
    [className]: !!className,
    'is-open': !!showFlyout,
    'u-text-right': !!orientation?.includes('right'),
    [`m-flyout--${orientation}`]: !!orientation,
    [`m-flyout--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size,
    'm-flyout--scrollable': !!scrollable
  });

  const flyoutContentClasses = classNames({
    'm-flyout__content': true,
    'has-padding': !!hasPadding
  });

  return trigger ? (
    <div className={flyoutClasses} ref={flyoutRef} data-qa={qa}>
      {cloneElement(trigger, { onClick: _toggleIsOpen, 'aria-haspopup': true, 'aria-expanded': showFlyout })}
      <div className={flyoutContentClasses} {...(scrollable ? { tabIndex: 0 } : {})}>
        {children}
      </div>
    </div>
  ) : null;
});

export default Flyout;
