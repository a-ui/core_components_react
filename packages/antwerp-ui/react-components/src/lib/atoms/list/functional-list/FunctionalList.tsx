import { classNames } from '../../../../utils/dom.utils';
import { Children, cloneElement, ReactElement } from 'react';
import { FunctionalListProps } from '../List.types';

export function FunctionalList({ onItemClick, type, ordered, flushed, lined, children, qa }: FunctionalListProps) {
  const classes = classNames({
    'a-list': type !== 'avatar' && type !== 'checkbox',
    'a-list--flushed': !!flushed && type !== 'avatar' && type !== 'checkbox',
    'a-list--lined': !!lined,
    'a-avatar-list': type === 'avatar',
    'a-avatar-list--flushed': !!(type === 'avatar' && flushed),
    'a-checkbox-list': type === 'checkbox',
    'a-checkbox-list--flushed': !!(type === 'checkbox' && flushed)
  });

  const ListTag = `${ordered ? 'ol' : 'ul'}` as keyof JSX.IntrinsicElements;

  return (
    <ListTag className={classes} data-qa={qa}>
      {Children.map(children || [], (child: ReactElement) => {
        return cloneElement(child, {
          key: child.props.id,
          onClick: child.props.onClick || onItemClick
        });
      })}
    </ListTag>
  );
}

export default FunctionalList;
