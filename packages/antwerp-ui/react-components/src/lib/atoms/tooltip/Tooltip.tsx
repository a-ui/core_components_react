import { cloneElement, useEffect, useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { TooltipProps } from './Tooltip.types';

import './Tooltip.css';

export function Tooltip({ anchor, anchorId = 'aui-tooltip', location = 'bottom', text = '', qa }: TooltipProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {cloneElement(anchor, { id: anchorId, 'aria-describedby': `tooltip-${anchorId}`, tabIndex: 0 })}
      {mounted && (
        <ReactTooltip
          id={`tooltip-${anchorId}`}
          anchorSelect={anchorId ? `#${anchorId}` : undefined}
          className="a-tooltip__base"
          noArrow
          positionStrategy="fixed"
          place={location}
          style={{ padding: '0' }}
        >
          <div className="a-tooltip" data-qa={qa}>
            {text}
          </div>
        </ReactTooltip>
      )}
    </>
  );
}

export default Tooltip;
