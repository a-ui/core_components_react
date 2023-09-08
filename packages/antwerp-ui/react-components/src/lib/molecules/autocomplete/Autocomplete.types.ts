export interface AutocompleteProps {
  id?: string;
  label?: string;
  items?: { value: string; label: string }[];
  name?: string;
  multiple?: boolean;
  inputValue?: string;
  value?: string | string[];
  noResultsText?: string;
  qa?: string;
  description?: string;
  state?: 'error' | 'success';
  addon?: {
    type: 'icon' | 'spinner';
    size?: 'small' | 'medium' | 'large';
    iconName?: string;
    placement: 'left' | 'right';
  };
  onChange?: (value: string | string[], name?: string) => void;
  onInputChange?: (value: string, name?: string) => void;
}
