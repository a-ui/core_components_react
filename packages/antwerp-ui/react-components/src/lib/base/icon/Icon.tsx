import { useState } from 'react';
import { IconProps } from './Icon.types';
import { ICONS_URL, SCREEN_READER_CLASS } from '../../../constants/settings';
import { classNames } from '../../../utils/dom.utils';
import { invalidIcon } from '../../../utils/file.utils';
import { logWarning } from '../../../utils/log.utils';
import { ForwardedRef, forwardRef } from 'react';

const ICONS_SVG_HTML_ID = 'ai-svg';

export const Icon = forwardRef(function Icon(
  { name, tabIndex, onKeyDown, className, role, onClick, screenReaderText, thin, qa }: IconProps,
  iconRef: ForwardedRef<HTMLSpanElement>
) {
  const [isInvalidIcon, setIsInvalidIcon] = useState(false);

  const fetchIcons = async function () {
    if (typeof fetch !== 'function') return null;
    const response = await fetch(ICONS_URL);
    const svgText = await response.text();
    const svgWrapper = document.createElement('svg');
    svgWrapper.id = ICONS_SVG_HTML_ID;
    svgWrapper.innerHTML = svgText;
    if (!document.getElementById(ICONS_SVG_HTML_ID)) {
      document.body.appendChild(svgWrapper);
    }
    queryIcons()?.forEach((icon) => {
      if (invalidIcon(icon)) {
        logWarning(
          `The provided icon with name "${name}" does not seem to exist. Please make sure the 'name' is correct`
        );
        setIsInvalidIcon(true);
      }
    });
  };

  const queryIcons = () => {
    return Array.from(document.querySelectorAll(`.ai-${name.replace('ai-', '')} use`)) as SVGGraphicsElement[];
  };

  if (typeof document !== 'undefined' && !document.getElementById(ICONS_SVG_HTML_ID)) {
    fetchIcons();
  }

  if (isInvalidIcon) return null;

  const classes = classNames({
    ai: true,
    [`ai-${name?.replace('ai-', '')}`]: !!name,
    'ai--thin': !!thin,
    [className || '']: !!className
  });

  return (
    <span
      ref={iconRef}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      role={role}
      onClick={onClick}
      className={classes}
      data-qa={qa}
    >
      {name ? (
        <svg aria-hidden="true">
          <use href={`#ai-${name.replace('ai-', '')}`} />
        </svg>
      ) : null}
      {!!screenReaderText && <span className={SCREEN_READER_CLASS}>{screenReaderText}</span>}
    </span>
  );
});
