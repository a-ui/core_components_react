import React from 'react';
import { classNames } from '../../../utils/dom.utils';
import { AccordionTabProps } from './Accordion.types';
import './Accordion.css';

export function AccordionTab({ id, header, children, open, onToggle, qa }: AccordionTabProps) {
  const [isOpen, setIsOpen] = React.useState(!!open);
  const [animation, setAnimation] = React.useState(false);
  const openState = open === true || open === false ? open : isOpen;

  const accordionTabClass = classNames({
    'm-accordion__tab': true
  });

  const _toggle = () => {
    if (openState) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
        setIsOpen(!isOpen);
        return onToggle && onToggle(id);
      }, 500);
    } else {
      setIsOpen(!isOpen);
      return onToggle && onToggle(id);
    }
  };

  return (
    <div className={accordionTabClass} data-qa={qa}>
      <button id={id} className="m-accordion__header" aria-expanded={openState} onClick={_toggle}>
        {header}
      </button>
      <div
        style={openState ? { maxHeight: 'none' } : {}}
        className={classNames({
          'm-accordion__content': true,
          'm-accordion__content--open': !!openState,
          'm-accordion__content--animate': ((open && onToggle) || !open) && !!animation
        })}
      >
        {children}
      </div>
    </div>
  );
}

AccordionTab.defaultProps = {
  id: '',
  header: ''
};

export default AccordionTab;
