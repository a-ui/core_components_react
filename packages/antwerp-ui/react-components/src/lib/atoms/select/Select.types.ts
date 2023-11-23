import React from 'react';
import { Optional } from '../../../utils/typescript.utils';

export interface SelectProps {
  description?: string;
  disabled?: boolean;
  id?: string;
  inline?: boolean;
  label?: string;
  name?: string;
  options?: SelectOption[];
  placeholder?: string | Optional<SelectOption, 'value'>;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  state?: 'success' | 'error';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  qa?: string;
}

export type SelectOption = {
  disabled?: boolean;
  label: string;
  value: string;
};
