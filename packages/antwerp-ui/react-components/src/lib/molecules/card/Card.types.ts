import { ReactNode } from 'react';
import { Link, Title } from '../../../constants/application.types';
import { ImageProps } from '../image';

export interface CardProps {
  image?: ImageProps;
  title?: Title;
  subTitle?: string;
  description?: string;
  children?: ReactNode;
  link?: Link;
  qa?: string;
}
