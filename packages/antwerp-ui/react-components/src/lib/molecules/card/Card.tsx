import { CardProps } from './Card.types';
import { Image } from '../image';
import { renderHTMLLink } from '../../../utils/render.utils';

export function Card({ title, subTitle, description, children, image, link, qa }: CardProps) {
  const HeaderTag = title?.tag || 'h4';
  return (
    <div className="m-card" data-qa={qa}>
      {!!image && (
        <div className="m-card__image">
          <Image {...image} />
        </div>
      )}
      <div className="m-card__body">
        {!!title?.label && (
          <HeaderTag id={`${title?.id}`} className={`${title.className} u-margin-bottom-xs`}>
            {title.label}
          </HeaderTag>
        )}
        {!!subTitle && <p className="small u-text-bold u-margin-bottom-xs">{subTitle}</p>}
        {!!description && <p className="u-margin-bottom">{description}</p>}
        {!!link && (
          <p className="u-text-right">
            {renderHTMLLink({ ...link, href: link.href ?? '#' }, 'arrow-right-1', {
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
