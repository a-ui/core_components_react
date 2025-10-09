import { CardProps } from './Card.types';
import { Image } from '../image';
import { classNames } from '../../../utils/dom.utils';
import { renderHTMLLink } from '../../../utils/render.utils';

export function Card({ title, subTitle, description, children, image, link, className, border = 'normal', highlighted = false, renderLinkFunction, qa }: CardProps) {
  const classObject = {
    'm-card': true,
    'm-card--highlight': highlighted,
    'm-card--light-border': border === 'light',
    'm-card--no-border': border === 'none',
    [`${className}`]: !!className
  };
  const classes = classNames(classObject);
  const HeaderTag = title?.tag || 'h4';
  return (
    <div className={classes} data-qa={qa}>
      {!!image && (
        <div className="m-card__image">
          <Image {...image} />
        </div>
      )}
      <div className="m-card__body">
        {!!title?.label && (
          <HeaderTag id={`${title?.id}`} className={`u-margin-bottom-xs ${title.className ?? ''}`}>
            {title.label}
          </HeaderTag>
        )}
        {!!subTitle && <p className="small u-text-bold u-margin-bottom-xs">{subTitle}</p>}
        {!!description && <p className="u-margin-bottom">{description}</p>}
        {!!link && (
          <p className="u-text-right">
            {renderLinkFunction
              ? renderLinkFunction(link)
              : renderHTMLLink({ ...link, href: link.href ?? '#' }, 'arrow-right-1', {
                  className: 'has-icon-right',
                  'aria-labelledby': title?.id
                })}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}

export default Card;
