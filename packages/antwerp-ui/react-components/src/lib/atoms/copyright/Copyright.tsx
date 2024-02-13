import { classNames } from '../../../utils/dom.utils';
import { CopyrightProps } from './Copyright.types';

export function Copyright({ sign = '©', label, link, forImage = true, qa }: CopyrightProps) {
  const classes = classNames({
    'a-copyright': true,
    'm-image__copyright': !!forImage
  });
  const ElementTag = `${link ? 'a' : 'div'}` as keyof JSX.IntrinsicElements;

  return (
    <ElementTag href={link} className={classes} data-qa={qa}>
      <span className="a-copyright__sign">{sign}</span>
      {label ? <span className="a-copyright__label">{label}</span> : null}
    </ElementTag>
  );
}

export default Copyright;
