import { renderHTMLLink } from '../../../utils/render.utils';
import { BreadcrumbProps } from './Breadcrumb.types';

export function Breadcrumb({ title, items = [], renderLinkFunction, qa }: BreadcrumbProps) {
  const renderItems = () =>
    Array.isArray(items)
      ? items.map((item) => {
          return <li key={`${item.id}`}>{renderLinkFunction ? renderLinkFunction(item) : renderHTMLLink(item)}</li>;
        })
      : null;

  const renderTitle = () => {
    if (title && title.label) {
      const TitleTag = title.tag || ('h1' as keyof JSX.IntrinsicElements);
      return <TitleTag className={`${title.className || ''} u-margin-top-xxs`}>{title.label}</TitleTag>;
    }
    return null;
  };

  return (
    <>
      <ul className="a-breadcrumb" data-qa={qa}>
        {renderItems()}
      </ul>
      {renderTitle()}
    </>
  );
}

export default Breadcrumb;
