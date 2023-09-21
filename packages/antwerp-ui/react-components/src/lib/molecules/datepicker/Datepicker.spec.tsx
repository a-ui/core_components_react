import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Datepicker } from './Datepicker';

describe('UI Components - Molecules - Datepicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Datepicker />);
    expect(baseElement).toBeTruthy();
  });

  it('should format the value based on the provided `format`', () => {
    const { baseElement } = render(
      <Datepicker value={new Date(Date.parse('18 May 2020 00:12:00 GMT')).toISOString()} format="dd/MM" />
    );
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    expect(input.value).not.toBe('18/05/2020');
    expect(input.value).toBe('18/05');
  });

  it('should open the calendar', () => {
    const { baseElement, getByRole } = render(<Datepicker />);
    const button = getByRole('button');
    expect(baseElement.querySelector('.is-open')).toBeFalsy();
    fireEvent.click(button);
    expect(baseElement.querySelector('.is-open')).toBeTruthy();
  });

  it('should close the calendar when clicking outside of it', () => {
    const { baseElement, getByRole } = render(<Datepicker />);
    const button = getByRole('button');
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    expect(baseElement.querySelector('.is-open')).toBeFalsy();
    fireEvent.click(button);
    expect(baseElement.querySelector('.is-open')).toBeTruthy();
    fireEvent.click(input);
    expect(baseElement.querySelector('.is-open')).toBeFalsy();
  });

  it('should control the open state of calendar with keyboard', () => {
    const { baseElement } = render(<Datepicker />);

    const button = baseElement.getElementsByClassName('ai-calendar')[0] as HTMLSpanElement;
    button.focus();
    expect(button).toHaveFocus();

    fireEvent.keyDown(button, { code: 'Enter' });
    expect(baseElement.querySelector('.is-open')).toBeTruthy();
    fireEvent.keyDown(button, { code: 'Enter' });
    expect(baseElement.querySelector('.is-open')).toBeFalsy();
  });

  it('should set the Datepicker value when selecting a date in the Calendar', () => {
    const mockOnChange = jest.fn();
    const { baseElement, getByRole, getByLabelText } = render(
      <Datepicker value={new Date(Date.parse('18 May 2020 00:12:00 GMT')).toISOString()} onChange={mockOnChange} />
    );
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    expect(input.value).toBe('18/05/2020');
    fireEvent.click(getByRole('button'));

    const newDate = getByLabelText('Tuesday 19 May 2020');
    fireEvent.click(newDate);
    expect(input.value).toBe('19/05/2020');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should handleChange on changing the input field value', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(<Datepicker onChange={mockOnChange} />);
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '20/05/2020' } });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should handleChange on empty input field value', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(<Datepicker onChange={mockOnChange} />);
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '20/05/2020' } });
    fireEvent.change(input, { target: { value: '' } });
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  it('should show error text on setting invalid input value', () => {
    const { baseElement, getByText } = render(<Datepicker />);
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'invalid' } });
    expect(getByText('Ongeldige datum')).toBeInTheDocument();
  });

  it('Does not display error message if invalidDateText is wrong', () => {
    /* eslint-disable-next-line */
    /* @ts-ignore */
    const { baseElement, queryByText } = render(<Datepicker invalidDateText={null} />);
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'invalid' } });
    const errorMessage = queryByText('Ongeldige datum');
    expect(errorMessage).toBeFalsy();
  });

  it('sets the dateInvalidError state when a date outside the allowed range is entered', () => {
    const { baseElement, getByText } = render(
      <Datepicker
        value=""
        inputProps={{ label: 'Date' }}
        calendarProps={{
          unavailableFrom: new Date(2023, 4, 1).toISOString(),
          unavailableTo: new Date(2023, 4, 5).toISOString()
        }}
      />
    );
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '05/06/2023' } });
    expect(getByText('Ongeldige datum')).toBeInTheDocument();
  });

  it('does not show error message if invalidDateText is wrong for value outside date range', () => {
    const { baseElement, queryByText } = render(
      <Datepicker
        value=""
        inputProps={{ label: 'Date' }}
        calendarProps={{
          unavailableFrom: new Date(2023, 4, 1).toISOString(),
          unavailableTo: new Date(2023, 4, 5).toISOString()
        }}
        /* eslint-disable-next-line */
        /* @ts-ignore */
        invalidDateText={null}
      />
    );
    const input = baseElement.querySelector('#aui-text-field') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '05/06/2023' } });

    const errorMessage = queryByText('Ongeldige datum');
    expect(errorMessage).toBeFalsy();
  });

  it('should close the calendar when focus is moved outside of it', async () => {
    const { baseElement, getByRole, container } = render(
      <Datepicker value={new Date(Date.parse('18 May 2020 00:12:00 GMT')).toISOString()} />
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(baseElement.querySelector('.is-open')).toBeTruthy();
    const calendar = container.getElementsByClassName('m-datepicker--fixed')[0];
    fireEvent.blur(calendar);
    expect(baseElement.querySelector('.is-open')).toBeFalsy();
  });

  it("should render a label above the datepicker component's input field when passed as a prop", () => {
    const label = 'Datepicker component';
    const { getByText } = render(<Datepicker label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it('should disable icon if iconProps.disabled is true', () => {
    const { baseElement } = render(<Datepicker inputProps={{ disabled: true }} />);
    expect(baseElement.querySelector('is-clickable')).not.toBeTruthy();
  });
});
