import { useState, useEffect, ForwardedRef, forwardRef } from 'react';
import { IconProps } from './Icon.types';
import { ICONS_SVG_HTML_ID, ICONS_URL, SCREEN_READER_CLASS } from '../../../constants/settings';
import { classNames } from '../../../utils/dom.utils';
import { iconExists } from '../../../utils/file.utils';
import { logError, logWarning } from '../../../utils/log.utils';

let svgFetchPromise: Promise<void> | null = null;

export const __resetIconCache = () => {
  svgFetchPromise = null;
};

export const ensureSvgLoaded = (): Promise<void> => {
  if (document.getElementById(ICONS_SVG_HTML_ID)) {
    return Promise.resolve();
  }

  if (!svgFetchPromise) {
    svgFetchPromise = fetch(ICONS_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.statusText}`);
        return res.text();
      })
      .then((svgText) => {
        const svgWrapper = document.createElement('div');
        svgWrapper.id = ICONS_SVG_HTML_ID;
        svgWrapper.style.display = 'none';
        svgWrapper.innerHTML = svgText;
        document.body.appendChild(svgWrapper);
      })
      .catch((err) => {
        logError(
          `Error loading SVG sprite:
          ${err}`
        );
        svgFetchPromise = null;
      });
  }

  return svgFetchPromise;
};

export const Icon = forwardRef(function Icon(
  { name, tabIndex, onKeyDown, className, role, onClick, screenReaderText, thin, qa }: IconProps,
  iconRef: ForwardedRef<HTMLSpanElement>
) {
  const [svgLoaded, setSvgLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [iconValid, setIconValid] = useState<boolean>(true);

  useEffect(() => {
    ensureSvgLoaded()
      .then(() => {
        if (!document.getElementById(ICONS_SVG_HTML_ID)) {
          setHasError(true);
          return;
        }
        setSvgLoaded(true);
      })
      .catch(() => setHasError(true));
  }, []);

  useEffect(() => {
    if (svgLoaded && name) {
      const exists = iconExists(name.replace('ai-', ''));
      if (!exists) {
        logWarning(
          `The provided icon with name "${name}" does not seem to exist. Please make sure the 'name' is correct`
        );
        setIconValid(false);
      }
    }
  }, [svgLoaded, name]);

  if (hasError) {
    logError(`Failed to load icon "${name}".`);
    return null;
  }

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
      {iconValid ? (
        <svg aria-hidden="true" focusable="false">
          <use href={`#ai-${name.replace('ai-', '')}`} />
        </svg>
      ) : null}
      {!!screenReaderText && <span className={SCREEN_READER_CLASS}>{screenReaderText}</span>}
    </span>
  );
});
