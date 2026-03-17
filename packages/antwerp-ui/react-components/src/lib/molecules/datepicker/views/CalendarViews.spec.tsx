import jest from 'jest-mock';
import { fireEvent, render, screen } from '@testing-library/react';
import { DayButton } from './DayButton';
import { MonthsView } from './MonthsView';
import { YearsView } from './YearsView';
import { DaysView } from './DaysView';
import '@testing-library/jest-dom';

describe('UI Components - Molecules - Calendar - DayButton', () => {
  const container = document.createElement('tr');

  const date = new Date('2022-05-18');
  const activeMonthYear = new Date(2022, 5);
  it('should render successfully', () => {
    const { baseElement } = render(<DayButton date={date} monthYear={activeMonthYear} onChange={() => { }} />, {
      container
    });
    expect(baseElement).toBeTruthy();
  });
  it('should make DayButton unavailable if unavailableFrom is before date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => { }} unavailableFrom="2022-05-17" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailableTo is after date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => { }} unavailableTo="2022-05-19" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailable contains date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => { }} unavailable={['2022-05-18']} />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailableFrom is same day as date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => { }} unavailableFrom="2022-05-18" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should make DayButton unavailable if unavailableTo is same day as date', () => {
    const { baseElement } = render(
      <DayButton date={date} monthYear={activeMonthYear} onChange={() => { }} unavailableTo="2022-05-18" />,
      { container }
    );
    expect(baseElement.getElementsByClassName('is-unavailable').length).toBe(1);
  });
  it('should be selected if value is same as date', () => {
    const { baseElement } = render(
      <DayButton date={date} value={date} monthYear={activeMonthYear} onChange={() => { }} />,
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
    const { baseElement } = render(<MonthsView activeYear={activeYear} onChange={() => { }} />);
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
      <MonthsView value={new Date(2023, 5)} activeYear={activeYear} onChange={() => { }} />
    );
    expect(baseElement.getElementsByClassName('is-selected').length).toBe(1);
  });
});

describe('UI Components - Molecules - Calendar - YearsView', () => {
  const activeMonth = 5;
  const yearsRowsStart = 2016;
  it('should render successfully', () => {
    const { baseElement } = render(
      <YearsView activeMonth={activeMonth} yearsRowsStart={yearsRowsStart} onChange={() => { }} />
    );
    expect(baseElement).toBeTruthy();
  });
  it('should have a selected year if year of value corresponds to a year in years row', () => {
    const { baseElement } = render(
      <YearsView
        value={new Date(2020, 5)}
        activeMonth={activeMonth}
        yearsRowsStart={yearsRowsStart}
        onChange={() => { }}
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

  describe('UI Components - Molecules - Calendar - DayButton', () => {
    it('calls onMouseEnter with the correct date', () => {
      const mockEnter = vi.fn();
      const date = new Date(2020, 4, 18);

      render(
        <table>
          <tbody>
            <tr>
              <DayButton
                date={date}
                monthYear={date}
                onChange={vi.fn()}
                onMouseEnter={mockEnter}
              />
            </tr>
          </tbody>
        </table>
      );

      const button = screen.getByRole('button');

      fireEvent.mouseEnter(button);

      expect(mockEnter).toHaveBeenCalledTimes(1);
      expect(mockEnter).toHaveBeenCalledWith(date);
    });

    it('calls onMouseLeave with the correct date', () => {
      const mockLeave = vi.fn();
      const date = new Date(2020, 4, 18);

      render(
        <table>
          <tbody>
            <tr>
              <DayButton
                date={date}
                monthYear={date}
                onChange={vi.fn()}
                onMouseLeave={mockLeave}
              />
            </tr>
          </tbody>
        </table>
      );

      const button = screen.getByRole('button');

      fireEvent.mouseLeave(button);

      expect(mockLeave).toHaveBeenCalledWith(date);
    });
  });

  describe('UI Components - Molecules - Calendar - DaysView', () => {
    it('sets hoverStyle correctly when hovering a date after hoverStart', () => {
      const hoverStart = new Date(2026, 3, 9);
      const activeMonth = 3;
      const activeYear = 2026;
      const onChange = vi.fn();

      render(
        <DaysView
          activeMonth={activeMonth}
          activeYear={activeYear}
          onChange={onChange}
          value={new Date(2026, 3, 9)}
          hoverStart={hoverStart.toISOString()}
        />
      );

      const dayButtons = screen.getAllByRole('button');

      const hoveredButton = dayButtons.find((btn) =>
        btn.textContent === '15'
      );
      if (!hoveredButton) throw new Error('Button not found');

      fireEvent.mouseEnter(hoveredButton);

      const affectedButtons = dayButtons.filter((btn) =>
        ['10', '11', '12', '13', '14'].includes(btn.textContent)
      );

      affectedButtons.forEach((btn) => {
        const button = btn as HTMLButtonElement;
        expect(button).toHaveClass('is-hovered');
      });
    });
  });
});