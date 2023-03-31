import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from 'react';

interface InputProps {
  charCounter?: boolean;
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
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface TextFieldProps extends InputProps {
  addon?: { type: 'icon' | 'text'; content: string; placement: 'left' | 'right' };
  role?: string;
  type?: InputTypes;
}

export interface TextAreaProps extends InputProps {}

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
