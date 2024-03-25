import { Button } from '../../atoms/button';
import { Flyout } from '../../molecules/flyout';
import { HeaderProps } from './Header.types';

export function Header({
  logoHref = '/',
  logoAlt = 'Naar de startpagina',
  menuItems = [],
  logoSrc = 'https://cdn.antwerpen.be/core_branding_scss/6.6.1/assets/images/a-logo.svg',
  skipToMainLabel = 'Ga naar inhoud',
  qa
}: HeaderProps) {
  return (
    <header className="o-header" data-qa={qa}>
      <div className="o-header__content-wrapper">
        <div className="o-header__content">
          <a href="#main" className="a-button a-button--text a-button--neutral o-header__button-skip">
            {skipToMainLabel}
          </a>
          <a href={logoHref} className="o-header__logo">
            <img src={logoSrc} alt={logoAlt} />
          </a>
        </div>
        <div className="o-header__menu-items">
          {(menuItems || []).map((m) =>
            m.flyout ? (
              <Flyout
                key={m.id}
                {...m.flyout}
                trigger={
                  <Button {...m} key={m.id} emphasis="low" theme="neutral" className="o-header__button">
                    {m.label}
                  </Button>
                }
              />
            ) : (
              <Button {...m} key={m.id} emphasis="low" theme="neutral" className="o-header__button">
                {m.label}
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
