import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DateRangePicker } from './DateRangePicker';

describe('UI Components - Molecules - DateRangePicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DateRangePicker />);
    expect(baseElement).toBeTruthy();
  });

  it('should set the "from" value and keep the calendar open', () => {
    const mockOnChange = jest.fn();
    const { baseElement, getAllByRole, getByLabelText } = render(
      <DateRangePicker value={['2020-05-18', '']} onChange={mockOnChange} />
    );
    const input = baseElement.querySelector('#aui-date-range-picker-from') as HTMLInputElement;
    expect(input.value).toBe('18/05/2020');
    fireEvent.click(getAllByRole('button')[0]);
    const newDate = getByLabelText('Tuesday 19 May 2020');
    fireEvent.click(newDate);
    expect(mockOnChange).toHaveBeenCalled();
    expect(baseElement.querySelector('.is-open')).toBeTruthy();
    const newDateTo = getByLabelText('Friday 22 May 2020');
    fireEvent.click(newDateTo);
    expect(mockOnChange).toHaveBeenCalledWith(['2020-05-19T00:00:00+02:00', '2020-05-22T00:00:00+02:00']);
    expect(baseElement.querySelector('.is-open')).toBeFalsy();
  });

  it('should set the "to" value and close the calendar', () => {
    const mockOnChange = jest.fn();
    const { baseElement, getAllByRole, getByLabelText } = render(
      <DateRangePicker value={['2020-05-18', '2020-05-20']} onChange={mockOnChange} />
    );
    const input = baseElement.querySelector('#aui-date-range-picker-from') as HTMLInputElement;
    expect(input.value).toBe('18/05/2020');
    fireEvent.click(getAllByRole('button')[1]);
    const newDate = getByLabelText('Friday 22 May 2020');
    fireEvent.click(newDate);
    expect(mockOnChange).toHaveBeenCalledWith(['2020-05-18', '2020-05-22T00:00:00+02:00']);
    expect(baseElement.querySelector('.is-open')).toBeFalsy();
  });

  it('should call onChange when changing the input field values of "from" and "to"', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(<DateRangePicker onChange={mockOnChange} />);
    const inputFrom = baseElement.querySelector('#aui-date-range-picker-from') as HTMLInputElement;
    const inputTo = baseElement.querySelector('#aui-date-range-picker-to') as HTMLInputElement;
    fireEvent.change(inputFrom, { target: { value: '2' } });
    fireEvent.change(inputTo, { target: { value: '2' } });
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  // it('should highlight all the dates between "from" and "to"', () => {
  //   const { getAllByRole, baseElement } = render(
  //     <DateRangePicker
  //       value={[
  //         new Date(Date.parse('22 Februari 2022 00:00:00 GMT')).toISOString(),
  //         new Date(Date.parse('24 Februari 2022 00:00:00 GMT')).toISOString()
  //       ]}
  //     />
  //   );
  //   fireEvent.click(getAllByRole('button')[0]);
  //   expect(baseElement.querySelectorAll('.is-selected').length).toBe(2 * 3);
  // });

  it('should be able to handle wrong props', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { baseElement } = render(<DateRangePicker value={false} />);
    expect(baseElement).toBeTruthy();
  });
});
