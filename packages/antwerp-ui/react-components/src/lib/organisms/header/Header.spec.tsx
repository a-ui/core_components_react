/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Header } from './Header';
import { render, screen } from '@testing-library/react';

describe('UI Components - Organisms - Header', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the logo and skip to content button', () => {
    const { baseElement } = render(
      <Header
        logoSrc="https://cdn.antwerpen.be/core_branding_scss/6.2.3/assets/images/a-logo.svg"
        logoHref="/main"
        logoAlt="AltText"
      />
    );
    expect(baseElement.getElementsByClassName('o-header__logo')[0]).toBeTruthy();
    expect(screen.getByAltText('AltText')).toBeTruthy();
    expect(
      screen.getByAltText('AltText').getAttribute('src') ===
        'https://cdn.antwerpen.be/core_branding_scss/6.2.3/assets/images/a-logo.svg'
    ).toBeTruthy();
    expect(screen.getByText('Ga naar inhoud')).toBeTruthy();
  });

  it('should render header buttons', () => {
    const { baseElement, getByText } = render(<Header buttons={[{ id: 'hello', label: 'Hello world' }]} />);
    expect(baseElement.getElementsByClassName('o-header__button')[0]).toBeTruthy();
    expect(getByText('Hello world')).toBeTruthy();
  });

  it('should render successfully with wrong input', () => {
    // @ts-ignore
    const { baseElement } = render(<Header buttons={false} />);
    expect(baseElement).toBeTruthy();
  });
});
