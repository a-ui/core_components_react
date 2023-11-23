import { Select } from './Select';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import jest from 'jest-mock';
import { SelectOption, SelectProps } from './Select.types';

describe('UI Components - Atoms - Select', () => {
  const placeholder = 'placeholder';
  const options: SelectOption[] = [
    { value: '1', label: 'One' },
    { value: '2', label: 'Two' },
    { value: '3', label: 'Three' }
  ];
  const defaultProps: SelectProps = {
    id: 'test',
    label: 'Test',
    options: options
  };
  it('should render successfully', () => {
    const { baseElement } = render(<Select />);
    expect(baseElement).toBeTruthy();
  });
  it('should call onChange when an option is selected', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(
      <Select placeholder={placeholder} value={options[0].value} {...defaultProps} onChange={mockOnChange} />
    );
    const selectElement = baseElement.getElementsByTagName('select')[0] as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(mockOnChange).toHaveBeenCalled();
  });
  it('should display placeholder option as the defaultValue when value is not set', () => {
    const { baseElement } = render(<Select {...defaultProps} inline placeholder={placeholder} />);
    const selectedOption = baseElement.getElementsByTagName('option')[0] as HTMLOptionElement;
    expect(selectedOption.getAttribute('selected')).toBe('');
    expect(selectedOption.innerHTML).toBe(placeholder);
  });
  it('should display a custom placeholder option', () => {
    const placeholderObj: SelectProps['placeholder'] = {
      label: 'Not disabled placeholder'
    };
    const { baseElement } = render(<Select {...defaultProps} inline placeholder={placeholderObj} />);
    const selectedOption = baseElement.getElementsByTagName('option')[0] as HTMLOptionElement;
    expect(selectedOption.getAttribute('selected')).toBe('');
    expect(selectedOption.innerHTML).toBe(placeholderObj.label);
  });
});
