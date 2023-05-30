import { FunctionalListProps } from '../List.types';
import FunctionalList from './FunctionalList';

export function AvatarList(props: FunctionalListProps) {
  return <FunctionalList type="avatar" {...props} />;
}

export default AvatarList;
