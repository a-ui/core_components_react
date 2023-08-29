import React, { Suspense, cloneElement } from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import { TooltipProps } from './Tooltip.types';

import './Tooltip.css';

const ReactTooltip = React.lazy(() => import('react-tooltip').then((module) => ({ default: module.Tooltip })));

export function Tooltip({ anchor, anchorId, location, text, qa }: TooltipProps) {
  return (
    <>
      {cloneElement(anchor, { id: anchorId, 'aria-describedby': `${anchorId}-tooltip`, tabIndex: 0 })}
      <Suspense>
        <ReactTooltip
          id={`${anchorId}-tooltip`}
          anchorId={anchorId}
          className="a-tooltip__base"
          noArrow
          positionStrategy="fixed"
          place={location}
        >
          <div className="a-tooltip" data-qa={qa}>
            {text}
          </div>
        </ReactTooltip>
      </Suspense>
    </>
  );
}

Tooltip.defaultProps = {
  text: '',
  location: 'bottom',
  anchorId: 'aui-tooltip'
};

export default Tooltip;
