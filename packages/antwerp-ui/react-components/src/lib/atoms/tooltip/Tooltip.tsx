import { cloneElement } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { TooltipProps } from './Tooltip.types';

import './Tooltip.css';

export function Tooltip({ anchor, anchorId = 'aui-tooltip', location = 'bottom', text = '', qa }: TooltipProps) {
  return (
    <>
      {cloneElement(anchor, { id: anchorId, 'aria-describedby': `${anchorId}-tooltip`, tabIndex: 0 })}
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
    </>
  );
}

export default Tooltip;
