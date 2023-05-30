/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonProps } from '../../atoms/button';
import { Map } from './Map';
import { render } from '@testing-library/react';

describe('UI Components - Organisms - Header', () => {
  const controls: ButtonProps[] = [
    { size: 'small', title: 'test', ariaLabel: 'control' },
    { size: 'small', title: 'test two', ariaLabel: 'control two' }
  ];
  it('should render successfully', () => {
    const { baseElement } = render(<Map />);
    expect(baseElement).toBeTruthy();
  });
  it('should render with top left controls', () => {
    const { baseElement } = render(<Map topLeftControls={controls} />);
    expect(baseElement.getElementsByClassName('o-map__controls--top-left').length).toBe(1);
  });
  it('should render with top right controls', () => {
    const { baseElement } = render(<Map topRightControls={controls} />);
    expect(baseElement.getElementsByClassName('o-map__controls--top-right').length).toBe(1);
  });
  it('should render with bottom left controls', () => {
    const { baseElement } = render(<Map bottomLeftControls={controls} />);
    expect(baseElement.getElementsByClassName('o-map__controls--bottom-left').length).toBe(1);
  });
  it('should render with bottom right controls', () => {
    const { baseElement } = render(<Map bottomRightControls={controls} />);
    expect(baseElement.getElementsByClassName('o-map__controls--bottom-right').length).toBe(1);
  });
  it('should render with open content if contentOpen is true', () => {
    const { baseElement } = render(<Map sidebar="test" sidebarOpen />);
    expect(baseElement.getElementsByClassName('o-map__content--open').length).toBe(1);
  });
});
