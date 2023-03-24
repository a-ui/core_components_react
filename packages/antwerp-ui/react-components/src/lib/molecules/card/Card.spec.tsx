import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('UI Components - Molecules - Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Card />);
    expect(baseElement).toBeTruthy();
  });

  it('should render an image', () => {
    const { baseElement } = render(<Card image={{ src: 'https://placedog.net/400/300?r', alt: 'A random dog' }} />);
    expect(baseElement.getElementsByClassName('m-card__image')).toBeTruthy();
    expect(screen.getByRole('img')).toBeTruthy();
  });

  it('should render a title', () => {
    const { baseElement } = render(
      <Card image={{ src: 'https://placedog.net/400/300?r', alt: 'A random dog' }} title={{ label: 'Card Title' }} />
    );
    expect(baseElement.getElementsByClassName('m-card__body')).toBeTruthy();
    expect(baseElement.getElementsByClassName('h5')).toBeTruthy();
    expect(baseElement.querySelector('h4')).toBeTruthy();
    expect(screen.getByText('Card Title')).toBeTruthy();
  });

  it('should render a title with a specific h tag', () => {
    const { baseElement } = render(<Card title={{ label: 'Card Title', tag: 'h1', className: 'h2' }} />);
    expect(baseElement.querySelector('h4')).toBeFalsy();
    expect(baseElement.querySelector('h1')).toBeTruthy();
    expect(baseElement.getElementsByClassName('h2')).toBeTruthy();
  });

  it('should render a subtitle', () => {
    const { baseElement } = render(
      <Card
        image={{ src: 'https://placedog.net/400/300?r', alt: 'A random dog' }}
        title={{ label: 'Card Title' }}
        subTitle="Card Subtitle"
      />
    );
    expect(baseElement.getElementsByClassName('m-card__body')).toBeTruthy();
    expect(baseElement.getElementsByClassName('small u-text-bold')).toBeTruthy();
    expect(screen.getByText('Card Subtitle')).toBeTruthy();
  });

  it('should render a text description ', () => {
    const { baseElement } = render(
      <Card
        image={{ src: 'https://placedog.net/400/300?r', alt: 'A random dog' }}
        title={{ label: 'Card Title' }}
        subTitle="Card Subtitle"
        description="Card description"
      />
    );
    expect(baseElement.getElementsByClassName('m-card__body')).toBeTruthy();
    expect(screen.getByText('Card description')).toBeTruthy();
  });

  it('should render a link', () => {
    const { baseElement } = render(
      <Card
        image={{ src: 'https://placedog.net/400/300?r', alt: 'A random dog' }}
        title={{ label: 'Card Title' }}
        subTitle="Card Subtitle"
        link={{ label: 'link label', target: 'https://www.google.be' }}
      />
    );
    expect(baseElement.getElementsByClassName('m-card__body')).toBeTruthy();
    expect(baseElement.getElementsByClassName('ai-arrow-right-1')).toBeTruthy();
    expect(screen.getByText('link label')).toBeTruthy();
  });

  it('should render an anchor link', () => {
    const { baseElement } = render(
      <Card
        image={{ src: 'https://placedog.net/400/300?r', alt: 'A random dog' }}
        title={{ label: 'Card Title' }}
        subTitle="Card Subtitle"
        link={{ label: 'link label' }}
      />
    );
    expect(baseElement.getElementsByClassName('m-card__body')).toBeTruthy();
    expect(baseElement.getElementsByClassName('has-icon-right')[0].getAttribute('href') === '#').toBeTruthy();
    expect(screen.getByText('link label')).toBeTruthy();
  });
});
