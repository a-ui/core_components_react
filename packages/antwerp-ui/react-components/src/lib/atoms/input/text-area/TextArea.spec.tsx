import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import { TextArea } from '../index';

describe('UI Components - Atoms - Input - TextArea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextArea />);
    expect(baseElement).toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<TextArea qa="id-1234" />);
    expect(baseElement.getElementsByClassName('a-input')[0]?.getAttribute('data-qa') === 'id-1234').toBeTruthy();
  });

  it('should set the id attribute', () => {
    const { baseElement } = render(<TextArea id="id-1234" />);
    expect(baseElement.querySelector('textarea')?.getAttribute('id') === 'id-1234').toBeTruthy();
  });

  it('should render the correct label for the input', () => {
    const { baseElement } = render(<TextArea id="input-id" label="input label" />);
    expect(baseElement.querySelector('label')?.getAttribute('for') === 'input-id').toBeTruthy();
    expect(baseElement.querySelector('label')?.textContent === 'input label').toBeTruthy();
  });

  it('should render red asterisk after label for required input', () => {
    const { baseElement } = render(<TextArea id="input-id" label="input label" required />);
    expect(baseElement.getElementsByClassName('u-text-danger')[0].textContent === '*').toBeTruthy();
  });

  it('should add the correct input size', () => {
    const { baseElement } = render(<TextArea size="small" />);
    expect(baseElement.getElementsByClassName('a-input--s').length).toBe(1);
  });

  it('should add the correct input description', () => {
    const { baseElement } = render(<TextArea description="descr" />);
    expect(baseElement.getElementsByClassName('a-input__description')[0].textContent === 'descr').toBeTruthy();
  });

  it('should add the correct success state description', () => {
    const { baseElement } = render(<TextArea description="input description" state="success" />);
    expect(baseElement.getElementsByClassName('is-success').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-check-1').length).toBe(1);
  });

  it('should add the correct error state description', () => {
    const { baseElement } = render(<TextArea description="input description" state="error" />);
    expect(baseElement.getElementsByClassName('is-error').length).toBe(1);
    expect(baseElement.getElementsByClassName('has-error').length).toBe(1);
    expect(baseElement.getElementsByClassName('ai-alert-triangle').length).toBe(1);
  });

  it('should add no character counter when only maxLength is set', () => {
    const { baseElement } = render(<TextArea maxLength={20} />);
    expect(baseElement.getElementsByClassName('a-input__description u-text-right').length).toBeFalsy();
  });

  it('should add a character counter when charCounter is true', () => {
    const { baseElement } = render(<TextArea charCounter value="yes" />);
    expect(baseElement.getElementsByClassName('a-input__description u-text-right').length).toBeTruthy();
    expect(baseElement.getElementsByClassName('a-input__description u-text-right')[0].textContent === `3`).toBeTruthy();
  });

  it('should add a character counter when maxLength is set and charCounter is true', () => {
    const { baseElement } = render(<TextArea maxLength={20} charCounter value="yes" />);
    expect(baseElement.getElementsByClassName('a-input__description u-text-right').length).toBeTruthy();
    expect(
      baseElement.getElementsByClassName('a-input__description u-text-right')[0].textContent === `3 / 20`
    ).toBeTruthy();
  });

  it('should trigger the onChange prop when the content is changed', () => {
    const mockOnChange = jest.fn();
    const { container } = render(<TextArea onChange={mockOnChange} maxLength={20} id="mock-example" />);
    const input = container.querySelector('#mock-example') as Element;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('should overwrite the default charCountText', () => {
    const { baseElement } = render(<TextArea charCounter charCountText="test" />);
    expect(
      baseElement.getElementsByClassName('a-input__description u-text-right')[0].textContent === 'test'
    ).toBeTruthy();
  });

  it('should apply the `danger` style to the character counter text if the character count has reached the maxLength', () => {
    const { baseElement } = render(<TextArea maxLength={5} charCounter value="12345" />);
    expect(baseElement.getElementsByClassName('u-text-danger').length).toBeTruthy();
  });

  it('should block input when maxLengthBlocksInput is true and maxLength is reached', () => {
    const maxLength = 5;
    const { baseElement } = render(<TextArea maxLength={maxLength} maxLengthBlocksInput value="12345" />);
    expect(baseElement.querySelector('textarea')?.getAttribute('maxlength') === '5').toBeTruthy();

    const textArea = baseElement.querySelector('textarea') as HTMLTextAreaElement;

    fireEvent.change(textArea, { target: { value: 'a'.repeat(maxLength + 1) } });

    expect(textArea.value).toHaveLength(maxLength);
  });
});
