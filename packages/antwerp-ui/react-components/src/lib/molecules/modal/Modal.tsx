import React, { cloneElement, MouseEventHandler } from 'react';
import ReactModal from 'react-modal';
import { DEFAULT_SIZE, SIZE_MAP } from '../../../constants/layout.settings';
import { classNames } from '../../../utils/dom.utils';
import { Button } from '../../atoms/button';
import { ModalProps } from './Modal.types';

export function Modal({
  appRootId,
  ariaCloseLabel,
  cancelButton,
  children,
  closeButton,
  confirmButton,
  onAfterOpen,
  onClose,
  open,
  qa,
  shouldCloseOnOverlayClick,
  size,
  title,
  trigger
}: ModalProps) {
  const [modalOpen, setModalOpen] = React.useState(!!open);
  const showModal = open === false || open === true ? open : modalOpen;
  const HeaderTag = title?.tag || 'h6';

  const runFunctionAndClose = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    toRun?: MouseEventHandler<HTMLButtonElement>
  ) => {
    return toRun && typeof toRun === 'function'
      ? Promise.resolve(toRun(ev)).then(() => setModalOpen(false))
      : setModalOpen(false);
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => runFunctionAndClose(e, onClose);

  return (
    <>
      {trigger ? cloneElement(trigger, { onClick: () => setModalOpen(true) }) : null}
      <ReactModal
        appElement={document.getElementById(appRootId) as HTMLElement}
        bodyOpenClassName={null}
        htmlOpenClassName={null}
        className={classNames({ 'm-modal': true, [`m-modal--${SIZE_MAP[size || DEFAULT_SIZE]}`]: !!size })}
        isOpen={showModal}
        onRequestClose={handleClose}
        role="dialog"
        aria-modal="true"
        overlayClassName={classNames({
          'm-overlay': true,
          'is-active': true
        })}
        data-qa={qa}
        ariaHideApp={true}
        onAfterOpen={onAfterOpen}
        shouldCloseOnOverlayClick={cancelButton || confirmButton || closeButton ? shouldCloseOnOverlayClick : true}
      >
        <div className="m-modal__content">
          {(title || closeButton) && (
            <div className="m-modal__header u-margin-bottom-xs">
              {title && title?.label && (
                <HeaderTag className={title.className} id={title.id}>
                  {title.label}
                </HeaderTag>
              )}
              {closeButton && (
                <Button
                  className="m-modal__close"
                  theme="neutral"
                  addOn={{ type: 'icon', iconProps: { name: 'ai-close' } }}
                  ariaLabel={ariaCloseLabel}
                  emphasis="low"
                  onClick={handleClose}
                />
              )}
            </div>
          )}
          {children && <div className="u-margin-bottom">{children}</div>}
          {confirmButton || cancelButton ? (
            <div className="m-modal__footer">
              {confirmButton ? (
                <Button {...confirmButton} onClick={(e) => runFunctionAndClose(e, confirmButton.onClick)} />
              ) : null}
              {cancelButton ? (
                <Button {...cancelButton} onClick={(e) => runFunctionAndClose(e, cancelButton.onClick)} />
              ) : null}
            </div>
          ) : null}
        </div>
      </ReactModal>
    </>
  );
}

Modal.defaultProps = {
  ariaCloseLabel: 'Sluiten',
  closeButton: true,
  shouldCloseOnOverlayClick: true,
  showCancel: true,
  showConfirm: true,
  size: '',
  title: ''
};

export default Modal;
