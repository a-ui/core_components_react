export interface AutocompleteProps {
  id?: string;
  label?: string;
  items?: { value: string; label: string }[];
  name?: string;
  multiple?: boolean;
  inputValue?: string;
  selection?: string[];
  value?: string;
  noResultsText?: string;
  qa?: string;
  onChange?: (value: string, name?: string, selection?: string[]) => void;
  onInputChange?: (value: string, name?: string) => void;
}
