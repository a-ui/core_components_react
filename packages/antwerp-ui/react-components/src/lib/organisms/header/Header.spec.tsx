/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Header } from './Header';
import { render, screen } from '@testing-library/react';

describe('UI Components - Organisms - Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the logo and skip to content button', () => {
    const { baseElement } = render(<Header logoSrc="logoLink" logoHref="/main" logoAlt="AltText" />);
    expect(baseElement.getElementsByClassName('o-header__logo')[0]).toBeTruthy();
    expect(screen.getByAltText('AltText')).toBeTruthy();
    expect(screen.getByAltText('AltText').getAttribute('src') === 'logoLink').toBeTruthy();
    expect(screen.getByText('Ga naar inhoud')).toBeTruthy();
  });

  it('should render header buttons', () => {
    const { baseElement, getByText } = render(<Header menuItems={[{ label: 'Hello world' }]} />);
    expect(baseElement.getElementsByClassName('o-header__button')[0]).toBeTruthy();
    expect(getByText('Hello world')).toBeTruthy();
  });

  it('should render header buttons with flyouts', () => {
    const { baseElement, getByText } = render(
      <Header
        menuItems={[
          { id: 'hello', label: 'Hello flyout', flyout: { children: 'Flyout content' } },
          { label: 'Hello flyout two', flyout: { children: 'Flyout content' } }
        ]}
      />
    );
    expect(baseElement.getElementsByClassName('o-header__button')[0]).toBeTruthy();
    expect(getByText('Hello flyout')).toBeTruthy();
  });

  it('should render successfully with wrong input', () => {
    // @ts-ignore
    const { baseElement } = render(<Header menuItems={false} />);
    expect(baseElement).toBeTruthy();
  });
});
