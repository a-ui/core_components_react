import { classNames } from '../../../utils/dom.utils';
import { logWarning } from '../../../utils/log.utils';
import { ImageProps } from './Image.types';

export function Image({ alt, children, src, noClass, qa }: ImageProps) {
  const classes = classNames({
    'm-image': !noClass
  });

  const validateChildren = (child: React.ReactElement) => {
    return (
      child &&
      typeof child === 'object' &&
      (child.type === 'figcaption' || (typeof child.type !== 'string' && child.type.name === 'Copyright'))
    );
  };

  if (!!children && !validateChildren(children)) {
    logWarning("Image's children should only be a Copyright component or a figcaption element");
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
