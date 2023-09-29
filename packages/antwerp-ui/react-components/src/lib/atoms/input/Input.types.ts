import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from 'react';
import { IconProps } from '../../base/icon';

interface InputProps {
  charCounter?: boolean;
  autoComplete?: string;
  charCountText?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
  inline?: boolean;
  label?: string;
  maxLength?: number;
  name?: string;
  qa?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  state?: 'success' | 'error';
  value?: string;
}

export interface TextFieldProps extends InputProps {
  addon?: {
    type: 'icon' | 'text' | 'spinner';
    size?: 'small' | 'medium' | 'large';
    content?: string;
    iconProps?: IconProps;
    placement: 'left' | 'right';
  };
  role?: string;
  type?: InputTypes;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps extends InputProps {
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: MouseEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export type LabelProps = Pick<TextFieldProps, 'label' | 'required' | 'inline' | 'id'>;
export type DescriptionProps = Pick<TextFieldProps, 'id' | 'description' | 'state'>;
export type CharacterCounterProps = {
  id?: string;
  charCountText?: string;
  charCounter?: boolean;
  characterCount: number;
  maxLength?: number;
};

type InputTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
