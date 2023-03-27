import { ReactNode } from 'react';
import { classNames } from '../../../utils/dom.utils';
import { ImageProps } from './Image.types';

type ImageChildren = ReactNode | ReactNode[] | undefined;

export function Image({ alt, children, src, noClass, qa }: ImageProps) {
  const classes = classNames({
    'm-image': !noClass
  });

  const isFigCaptionOrCopyright = (child: ImageChildren) => {
    const element = child as React.ReactElement;
    return (
      child &&
      typeof child === 'object' &&
      (element.type === 'figcaption' || (typeof element.type !== 'string' && element.type.name === 'Copyright'))
    );
  };

  if (!!children && !isFigCaptionOrCopyright(children)) {
    console.warn("Image's children should only be a Copyright component or a figcaption element.");
  }

  return (
    <figure className={classes} data-qa={qa}>
      <img src={src} alt={alt} />
      {children}
    </figure>
  );
}

Image.defaultProps = { alt: '' };

export default Image;
