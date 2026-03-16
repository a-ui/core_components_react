import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from './Tooltip';
import '@testing-library/jest-dom/extend-expect';

describe('UI Components - Atoms - Tooltip', () => {
  beforeAll(() => {
    global.ResizeObserver = class {
      observe() { }
      unobserve() { }
      disconnect() { }
    };
  });

  it('should render successfully', async () => {
    const { container } = render(
      <Tooltip anchorId="tooltip-1" text="Some tip" anchor={<span>Anchor</span>} />
    );

    const anchor = container.querySelector('#tooltip-1');
    expect(anchor).toBeInTheDocument();

    fireEvent.focus(anchor as Element);

    const tooltip = await screen.findByText('Some tip');
    expect(tooltip).toBeInTheDocument();

    expect(tooltip).toHaveClass('a-tooltip');
    expect(tooltip.parentElement).toHaveClass('a-tooltip__base');
  });
});