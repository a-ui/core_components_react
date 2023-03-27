import { render, screen } from '@testing-library/react';
import jest from 'jest-mock';
import '@testing-library/jest-dom';
import { Image } from './Image';
import { ImageProps } from './Image.types';
import { Copyright } from '../../atoms/copyright/Copyright';

describe('Image', () => {
  const alt = 'An image';
  const src = 'https://placedog.net/400/300?r';
  const qa = 'image';
  const defaultProps: ImageProps = {
    alt: alt,
    src: src,
    qa: qa
  };

  it('renders the image with the correct src and alt attributes', () => {
    render(<Image {...defaultProps} />);
    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute('src', src);
  });

  it('renders the image without class', () => {
    const { baseElement } = render(<Image {...defaultProps} noClass />);
    expect(baseElement).not.toHaveClass('m-image');
  });

  it('renders the image with a copyright as a child', () => {
    const { container } = render(
      <Image {...defaultProps}>
        <Copyright sign="©" label="All rights reserved" link="https://www.google.be/" qa="copyright" />
      </Image>
    );
    expect(container.innerHTML).toContain('href="https://www.google.be/"');
  });

  it('should log a warning if children are not Copryight or figcaption', () => {
    const warnSpy = jest.spyOn(console, 'warn');
    render(
      <Image {...defaultProps}>
        <div>Hello</div>
      </Image>
    );
    expect(warnSpy).toHaveBeenCalledWith(
      "[AUI] Warning - Image's children should only be a Copyright component or a figcaption element."
    );
  });
});
