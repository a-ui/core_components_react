import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import { TextField } from '../index';

describe('UI Components - Atoms - Input - TextField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextField />);
    expect(baseElement).toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<TextField qa="id-1234" />);
    expect(baseElement.getElementsByClassName('a-input')[0]?.getAttribute('data-qa') === 'id-1234').toBeTruthy();
  });

  it('should set the id attribute', () => {
    const { baseElement } = render(<TextField id="id-1234" />);
    expect(baseElement.querySelector('input')?.getAttribute('id') === 'id-1234').toBeTruthy();
  });

  it('should render the correct label for the input', () => {
    const { baseElement } = render(<TextField id="input-id" label="input label" />);
    expect(baseElement.querySelector('label')?.getAttribute('for') === 'input-id').toBeTruthy();
    expect(baseElement.querySelector('label')?.textContent === 'input label').toBeTruthy();
  });

  it('should render red asterisk after label for required input', () => {
    const { baseElement } = render(<TextField id="input-id" label="input label" required />);
    expect(baseElement.getElementsByClassName('u-text-danger')[0].textContent === '*').toBeTruthy();
  });

  it('should add the correct input size', () => {
    const { baseElement } = render(<TextField size="small" />);
    expect(baseElement.getElementsByClassName('a-input--s').length).toBe(1);
  });

  it('should add the correct input description', () => {
    const { baseElement } = render(<TextField description="descr" />);
    expect(baseElement.getElementsByClassName('a-input__description')[0].textContent === 'descr').toBeTruthy();
  });

  it('should add the correct success state description', () => {
    const { baseElement } = render(<TextField description="input description" state="success" />);
    expect(baseElement.getElementsByClassName('is-success').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-check-1').length).toBe(1);
  });

  it('should add the correct error state description', () => {
    const { baseElement } = render(<TextField description="input description" state="error" />);
    expect(baseElement.getElementsByClassName('is-error').length).toBe(1);
    expect(baseElement.getElementsByClassName('has-error').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-alert-triangle').length).toBe(1);
  });

  it('should add an icon when iconLeft is defined', () => {
    const { baseElement } = render(
      <TextField addOn={{ type: 'icon', content: 'ai-single-neutral', placement: 'left' }} />
    );
    expect(baseElement.getElementsByClassName('has-icon-left').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-single-neutral').length).toBe(1);
  });

  it('should add an icon when iconRight is defined', () => {
    const { baseElement } = render(
      <TextField addOn={{ type: 'icon', content: 'ai-single-neutral', placement: 'right' }} />
    );
    expect(baseElement.getElementsByClassName('has-icon-right').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-single-neutral').length).toBe(1);
  });

  it('should add an addon when addOnLeft is defined', () => {
    const { baseElement } = render(<TextField addOn={{ type: 'text', content: 'left', placement: 'left' }} />);
    expect(baseElement.getElementsByClassName('has-addon-left').length).toBe(1);
    expect(baseElement.getElementsByClassName('a-input__addon')[0].textContent === 'left').toBeTruthy();
  });

  it('should add ann addon when addOnRight is defined', () => {
    const { baseElement } = render(<TextField addOn={{ type: 'text', content: 'right', placement: 'right' }} />);
    expect(baseElement.getElementsByClassName('a-input__addon').length).toBe(1);
    expect(baseElement.getElementsByClassName('has-addon-right').length).toBe(1);
  });

  it('should add a character counter when only maxLength is set', () => {
    const { baseElement } = render(<TextField maxLength={20} />);
    expect(baseElement.getElementsByClassName('a-input__description u-text-right').length).toBeTruthy();
  });

  it('should add a character counter when charCounter is true', () => {
    const { baseElement } = render(<TextField charCounter value="yes" />);
    expect(baseElement.getElementsByClassName('a-input__description u-text-right').length).toBeTruthy();
    expect(baseElement.getElementsByClassName('a-input__description u-text-right')[0].textContent === `3`).toBeTruthy();
  });

  it('should add a character counter when maxLength is set and charCounter is true', () => {
    const { baseElement } = render(<TextField maxLength={20} charCounter value="yes" />);
    expect(baseElement.getElementsByClassName('a-input__description u-text-right').length).toBeTruthy();
    expect(
      baseElement.getElementsByClassName('a-input__description u-text-right')[0].textContent === `3 / 20`
    ).toBeTruthy();
  });

  it('should add no character counter when maxLength is set, but charCounter is false', () => {
    const { baseElement } = render(<TextField maxLength={20} charCounter={false} />);
    expect(baseElement.getElementsByClassName('a-input__description u-text-right').length).toBeFalsy();
  });

  it('should trigger the onChange prop when the input is changed', () => {
    const mockOnChange = jest.fn();
    const { container } = render(<TextField onChange={mockOnChange} maxLength={20} id="mock-example" />);
    const input = container.querySelector('#mock-example') as Element;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should render with a spinner addon', () => {
    const { baseElement } = render(
      <>
        <TextField
          addOn={{
            type: 'spinner',
            placement: 'left'
          }}
        />
        <TextField
          addOn={{
            type: 'spinner',
            placement: 'right'
          }}
        />
      </>
    );

    expect(baseElement.getElementsByClassName('has-spinner').length).toBeTruthy();
    expect(baseElement.getElementsByClassName('has-spinner-left').length).toBeTruthy();
    expect(baseElement.getElementsByClassName('has-spinner-right').length).toBeTruthy();
    expect(baseElement.getElementsByClassName('has-icon-left').length).toBeTruthy();
  });

  it('should overwrite the default charCountText', () => {
    const { baseElement } = render(<TextField charCounter charCountText="test" />);
    expect(
      baseElement.getElementsByClassName('a-input__description u-text-right')[0].textContent === 'test'
    ).toBeTruthy();
  });

  it('should apply the `danger` style to the character counter text if the character count has reached the maxLength', () => {
    const { baseElement } = render(<TextField maxLength={5} charCounter value="12345" />);
    expect(baseElement.getElementsByClassName('u-text-danger').length).toBeTruthy();
  });

  it('should block input when maxLengthBlocksInput is true and maxLength is reached', () => {
    const maxLength = 5;
    const { baseElement } = render(<TextField maxLength={maxLength} maxLengthBlocksInput value="12345" />);
    expect(baseElement.querySelector('input')?.getAttribute('maxlength') === '5').toBeTruthy();

    const input = baseElement.querySelector('input') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'a'.repeat(maxLength + 1) } });

    expect(input.value).toHaveLength(maxLength);
  });
});
