import { Fragment } from 'react';
import { DefinitionListProps } from '../List.types';

export function DefinitionList({ items = [], qa }: DefinitionListProps) {
  return (
    <dl className="a-definition-list" data-qa={qa}>
      {items.map((i) => (
        <Fragment key={i.id}>
          <dt>{i.term}</dt>
          <dd>{i.description}</dd>
        </Fragment>
      ))}
    </dl>
  );
}

export default DefinitionList;
