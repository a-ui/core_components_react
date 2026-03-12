import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './Radio.types';

describe('UI Components - Atoms - RadioGroup', () => {
  const defaultProps: RadioGroupProps = {
    label: 'Choose your fighter',
    name: 'radiogroup',
    qa: 'radio'
  };

  it('should render a label and children elements', () => {
    const { getByText, getByLabelText } = render(
      <RadioGroup {...defaultProps} label="Radio Group">
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
      </RadioGroup>
    );
    expect(getByText('Radio Group')).toBeInTheDocument();
    expect(getByLabelText('Scorpion')).toBeInTheDocument();
    expect(getByLabelText('Raiden')).toBeInTheDocument();
  });

  it('should set the name prop on child elements', () => {
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps}>
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
      </RadioGroup>
    );
    expect((getByLabelText('Scorpion') as HTMLInputElement).name).toBe('radiogroup');
    expect((getByLabelText('Raiden') as HTMLInputElement).name).toBe('radiogroup');
  });

  it('should set the checked prop on child element with the provided value', () => {
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps} value="Raiden">
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
        <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
      </RadioGroup>
    );
    expect((getByLabelText('Scorpion') as HTMLInputElement).checked).toBe(false);
    expect((getByLabelText('Raiden') as HTMLInputElement).checked).toBe(true);
    expect(getByLabelText('Scorpion') as HTMLInputElement).not.toBeChecked();
    expect(getByLabelText('Raiden') as HTMLInputElement).toBeChecked();
  });

  it('should set the checked prop on the child element with the selected value', () => {
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps}>
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
        <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
        <Radio value="None" label="None" id="fourth-option" />
      </RadioGroup>
    );
    fireEvent.click(getByLabelText('Raiden') as HTMLInputElement);
    expect(getByLabelText('Raiden') as HTMLInputElement).toBeChecked();
    expect(getByLabelText('Scorpion') as HTMLInputElement).not.toBeChecked();
  });

  it('should trigger the onChange prop when a child element is clicked', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <RadioGroup {...defaultProps} onChange={mockOnChange}>
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
        <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
        <Radio value="None" label="None" id="fourth-option" />
      </RadioGroup>
    );
    fireEvent.click(getByLabelText('Raiden') as HTMLInputElement);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should add the correct input description', () => {
    const { baseElement } = render(<RadioGroup {...defaultProps} description="descr" />);
    expect(baseElement.getElementsByClassName('a-input__description')[0].textContent === 'descr').toBeTruthy();
  });

  it('should add the correct success state description', () => {
    const { getByText } = render(<RadioGroup {...defaultProps} description="description" state="success" />);
    const descriptionEl = getByText('description');
    expect(descriptionEl).toHaveClass('is-success');
  });

  it('should add the correct error state description', () => {
    const { getByText } = render(<RadioGroup {...defaultProps} description="description" state="error" />);
    const descriptionEl = getByText('description');
    expect(descriptionEl).toHaveClass('is-error');
  });

  it('adds a red asterisk to the label when the required prop is true', () => {
    const { getByLabelText, container } = render(
      <RadioGroup {...defaultProps} required>
        <Radio value="Scorpion" label="Scorpion" id="first-option" />
        <Radio value="Raiden" label="Raiden" id="second-option" />
        <Radio value="Sub-Zero" label="Sub-Zero" id="third-option" />
        <Radio value="None" label="None" id="fourth-option" />
      </RadioGroup>
    );
    expect(container.querySelector('.u-text-danger')).toBeInTheDocument();
    expect((getByLabelText(/Scorpion/) as HTMLInputElement).required).toBe(true);
    expect((getByLabelText(/Raiden/) as HTMLInputElement).required).toBe(true);
    expect((getByLabelText(/Sub-Zero/) as HTMLInputElement).required).toBe(true);
    expect((getByLabelText(/None/) as HTMLInputElement).required).toBe(true);
  });
});