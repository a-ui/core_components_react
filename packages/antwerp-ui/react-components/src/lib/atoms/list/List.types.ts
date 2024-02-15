import { MouseEvent, ReactElement, ReactNode } from 'react';
import { AvatarProps } from '../avatar';
import { CheckboxProps } from '../checkbox';

export interface DefinitionListProps {
  items: DefinitionListItemProps[];
  qa?: string;
}

export interface DefinitionListItemProps {
  id: string;
  term: string;
  description: string;
  qaTerm?: string;
  qaDescription?: string;
}

export interface FunctionalListProps {
  type?: 'avatar' | 'checkbox';
  flushed?: boolean;
  lined?: boolean;
  children?: ReactElement | ReactElement[];
  ordered?: boolean;
  onItemClick?: (name: string) => void;
  qa?: string;
}

export interface ListItemProps {
  name?: string;
  link?: { href?: string; target?: string };
  active?: boolean;
  iconLeft?: string;
  iconRight?: string;
  children?: ReactNode;
  tabIndex?: number;
  highlighted?: boolean;
  id: string;
  onClick?: (name?: string) => void;
  onMouseDown?: (event: MouseEvent) => void;
  qa?: string;
}

export interface ListItemAvatarProps {
  avatar?: Omit<AvatarProps, 'rounded' | 'size'>;
  name?: string;
  link?: { href?: string; target?: string };
  active?: boolean;
  iconRight?: string;
  id: string;
  onClick?: (name?: string) => void;
  user?: { name?: string; function?: string; email?: string };
  qa?: string;
}

export interface ListItemCheckboxProps extends CheckboxProps {
  onClick?: (name: string) => void;
  qa?: string;
}
