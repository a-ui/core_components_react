import { AlertProps } from './Alert.types';
import { classNames } from '../../../utils/dom.utils';
import { Icon } from '../../base/icon';
import { THEME_ICON_MAP } from '../../../constants/layout.settings';
import { Button } from '../../atoms/button';

const renderModalAlert = (className: string, props: AlertProps) => {
  const { ariaLabelClose, cancelButton, children, confirmButton, onClose, qa, theme, title, titleId } = props;
  const HeaderTag = props.title?.tag || 'h5';
  const textClass = classNames({
    'u-margin-bottom': !!(confirmButton || cancelButton)
  });

  return (
    <div role="alertdialog" className={className} aria-labelledby={titleId} aria-modal="true" data-qa={qa}>
      <Button
        addOn={{ type: 'icon', iconProps: { name: 'remove' } }}
        emphasis="low"
        className="m-alert__close"
        theme={theme}
        ariaLabel={ariaLabelClose}
        onClick={onClose}
      />
      {!!theme && (
        <span className="m-alert__icon">
          <Icon name={THEME_ICON_MAP[theme]} />
        </span>
      )}
      <HeaderTag id={titleId} className="u-margin-bottom-xs">
        {title?.label}
      </HeaderTag>
      <p className={textClass}>{children}</p>
      <div className="m-alert__actions">
        {confirmButton ? <Button {...confirmButton} /> : null}
        {cancelButton ? <Button {...cancelButton} /> : null}
      </div>
    </div>
  );
};

const renderInlineAlert = (className: string, props: AlertProps) => {
  const HeaderTag = props.title?.tag || 'h5';
  return (
    <div role="alert" className={className} aria-labelledby={props.titleId} data-qa={props.qa}>
      {!!props.theme && (
        <span className="m-alert__icon">
          <Icon name={THEME_ICON_MAP[props.theme]} />
        </span>
      )}
      {!!props.title && (
        <HeaderTag id={props.titleId} className="paragraph has-base-font">
          {props.title?.label}
        </HeaderTag>
      )}
      <p>{props.children}</p>
    </div>
  );
};

export function Alert(props: AlertProps) {
  const alertClasses = classNames({
    'm-alert': true,
    [`m-alert--${props.theme}`]: !!props.theme,
    'm-alert--inline': !!props.inline
  });

  return props.inline ? renderInlineAlert(alertClasses, props) : renderModalAlert(alertClasses, props);
}

Alert.defaultProps = {
  title: { label: '' },
  ariaLabelClose: 'Sluiten'
};

export default Alert;
