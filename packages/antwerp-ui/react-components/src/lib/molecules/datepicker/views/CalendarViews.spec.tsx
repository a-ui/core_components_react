import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import { DayButton } from './DayButton';
import { MonthsView } from './MonthsView';
import { YearsView } from './YearsView';

describe('UI Components - Molecules - Calendar - DayButton', () => {
  const container = document.createElement('tr');

  const date = new Date('2022-05-18');
  const activeMonthYear = new Date(2022, 5);
  it('should render successfully', () => {
    const { baseElement } = render(<DayButton date={date} monthYear={activeMonthYear} onChange={() => {}} />, {
      container
    });
    expect(baseElement).toBeTruthy();
  });
  it('should make DayButton unavailable if unavailableFrom is before date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => {}} unavailableFrom="2022-05-17" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailableTo is after date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => {}} unavailableTo="2022-05-19" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailable contains date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => {}} unavailable={['2022-05-18']} />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailableFrom is same day as date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => {}} unavailableFrom="2022-05-18" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailableTo is same day as date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => {}} unavailableTo="2022-05-18" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should be selected if value is same as date', () => {
    const { baseElement } = render(
      <DayButton date={date} value={date} monthYear={activeMonthYear} onChange={() => {}} />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-selected').length).toBe(1);
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(<DayButton date={date} monthYear={activeMonthYear} onChange={mockOnChange} />, {
      container
    });
    const button = baseElement.querySelector('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
  });
});

describe('UI Components - Molecules - Calendar - MonthsView', () => {
  const activeYear = 2023;
  it('should render successfully', () => {
    const { baseElement } = render(<MonthsView activeYear={activeYear} onChange={() => {}} />);
    expect(baseElement).toBeTruthy();
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(<MonthsView activeYear={activeYear} onChange={mockOnChange} />);
    const button = baseElement.querySelector('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
  });
  it('should have a selected month if month and year of value correspond to a month in activeYear', () => {
    const { baseElement } = render(
      <MonthsView value={new Date(2023, 5)} activeYear={activeYear} onChange={() => {}} />
    );
    expect(baseElement.getElementsByClassName('is-selected').length).toBe(1);
  });
});

describe('UI Components - Molecules - Calendar - YearsView', () => {
  const activeMonth = 5;
  const yearsRowsStart = 2016;
  it('should render successfully', () => {
    const { baseElement } = render(
      <YearsView activeMonth={activeMonth} yearsRowsStart={yearsRowsStart} onChange={() => {}} />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should have a selected year if year of value corresponds to a year in years row', () => {
    const { baseElement } = render(
      <YearsView
        value={new Date(2020, 5)}
        activeMonth={activeMonth}
        yearsRowsStart={yearsRowsStart}
        onChange={() => {}}
      />
    );
    expect(baseElement.getElementsByClassName('is-selected').length).toBe(1);
  });
  it('should call onChange', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(
      <YearsView activeMonth={activeMonth} yearsRowsStart={yearsRowsStart} onChange={mockOnChange} />
    );
    const button = baseElement.querySelector('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
  });
  it('should call onChange with value', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(
      <YearsView
        value={new Date(2020, 5)}
        activeMonth={activeMonth}
        yearsRowsStart={yearsRowsStart}
        onChange={mockOnChange}
      />
    );
    const button = baseElement.querySelector('button') as HTMLButtonElement;
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
