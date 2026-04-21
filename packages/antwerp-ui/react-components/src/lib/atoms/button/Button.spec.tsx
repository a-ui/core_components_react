import { render, screen } from '@testing-library/react';
import jest from 'jest-mock';
import type { Link } from '../../../constants/application.types';
import { Button } from './Button';

describe('UI Components - Atoms - Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('should add the title if provided', () => {
    render(<Button title="test" />);
    expect(screen.getByTitle('test')).toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<Button qa="id-1234" />);
    expect(baseElement.querySelector('button')?.getAttribute('data-qa') === 'id-1234').toBeTruthy();
  });

  it('should add the outline class', () => {
    const { baseElement } = render(<Button emphasis="medium" />);
    expect(baseElement.getElementsByClassName('a-button--outlined').length).toBe(1);
  });

  it('should add the transparent class', () => {
    const { baseElement } = render(<Button emphasis="low" />);
    expect(baseElement.getElementsByClassName('a-button--text').length).toBe(1);
  });

  it('should add the correct button size', () => {
    const { baseElement } = render(<Button size="small" />);
    expect(baseElement.getElementsByClassName('a-button--s').length).toBe(1);
  });

  it('should support icon buttons', () => {
    const { baseElement } = render(<Button addOn={{ type: 'icon', iconProps: { name: 'ai-test-icon' } }} />);
    expect(baseElement.getElementsByClassName('has-icon').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-test-icon').length).toBe(1);
  });

  it('should support icon left buttons', () => {
    const { baseElement } = render(
      <Button addOn={{ type: 'icon', align: 'left', iconProps: { name: 'ai-test-icon' } }} />
    );
    expect(baseElement.getElementsByClassName('has-icon-left').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-test-icon').length).toBe(1);
  });

  it('should support icon right buttons', () => {
    const { baseElement } = render(
      <Button addOn={{ type: 'icon', align: 'right', iconProps: { name: 'ai-test-icon' } }} />
    );
    expect(baseElement.getElementsByClassName('has-icon-right').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-test-icon').length).toBe(1);
  });

  it('should support spinner buttons', () => {
    const { baseElement } = render(<Button addOn={{ type: 'spinner' }} />);
    expect(baseElement.getElementsByClassName('has-icon-right').length).toBe(1);
    expect(baseElement.getElementsByClassName('a-spinner').length).toBe(1);
  });

  it('should use an extra-small spinner if the button is small', () => {
    const { baseElement } = render(<Button addOn={{ type: 'spinner' }} size="small" />);
    expect(baseElement.getElementsByClassName('a-spinner--xs').length).toBe(1);
  });

  it('should support avatar buttons', () => {
    const { baseElement } = render(<Button addOn={{ type: 'avatar' }} />);
    expect(baseElement.getElementsByClassName('has-avatar').length).toBe(1);
  });

  it('should support image avatar buttons', () => {
    const { baseElement } = render(
      <Button
        addOn={{
          type: 'avatar',
          avatarProps: { image: 'https://placedog.net/500/500', imageAlt: '', ariaLabel: '', qa: '' }
        }}
      />
    );
    expect(baseElement.getElementsByClassName('has-avatar-with-inset').length).toBe(1);
  });

  it('should support text avatar buttons', () => {
    const { baseElement } = render(
      <Button addOn={{ type: 'avatar', avatarProps: { letter: 'tt', imageAlt: '', ariaLabel: '', qa: '' } }} />
    );
    expect(baseElement.getElementsByClassName('has-avatar-with-inset').length).toBe(1);
  });

  it('should support themed buttons', () => {
    const { baseElement } = render(<Button theme="warning" />);
    expect(baseElement.getElementsByClassName('a-button--warning').length).toBe(1);
  });

  it('should prohibit the use of the neutral theme in high emphasis buttons', () => {
    const { baseElement } = render(<Button theme="neutral" />);
    expect(baseElement.getElementsByClassName('a-button--neutral').length).toBe(0);
  });

  it('should render as anchor when link and href are provided', () => {
    const { baseElement } = render(
      <Button link={{ href: '/page', target: '_blank' }}>Link text</Button>
    );
    const anchor = baseElement.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor?.getAttribute('href')).toBe('/page');
    expect(anchor?.getAttribute('target')).toBe('_blank');
    expect(anchor?.textContent).toContain('Link text');
  });

  it('should use renderLinkFunction when link and renderLinkFunction are provided', () => {
    const renderLinkFunction = jest.fn((link: Link, props: Record<string, string | boolean | undefined>) => (
      <span data-testid="custom-link" data-href={link.href} {...props}>
        {link.label}
      </span>
    ));
    render(
      <Button link={{ href: '/custom' }} renderLinkFunction={renderLinkFunction}>
        Custom
      </Button>
    );
    expect(renderLinkFunction).toHaveBeenCalledWith(
      expect.objectContaining({ href: '/custom' }),
      expect.any(Object)
    );
    expect(screen.getByTestId('custom-link')).toBeTruthy();
  });

  it('should render button with disabled', () => {
    const { baseElement } = render(<Button disabled />);
    const button = baseElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.hasAttribute('disabled')).toBe(true);
  });

  it('should call onClick when button is clicked', () => {
    const onClick = jest.fn();
    const { baseElement } = render(<Button onClick={onClick} />);
    baseElement.querySelector('button')?.click();
    expect(onClick).toHaveBeenCalled();
  });
});
