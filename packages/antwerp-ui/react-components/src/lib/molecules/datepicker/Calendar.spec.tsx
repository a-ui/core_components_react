import jest from 'jest-mock';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Calendar } from './Calendar';

describe('UI Components - Molecules - Calendar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Calendar />);
    expect(baseElement).toBeTruthy();
  });

  it('should set the data-qa attribute', () => {
    const { baseElement } = render(<Calendar qa="calendar-1337" />);
    expect(
      baseElement.getElementsByClassName('m-datepicker')[0]?.getAttribute('data-qa') === 'calendar-1337'
    ).toBeTruthy();
  });

  it('should call onChange when selecting a date', () => {
    const mockOnChange = jest.fn();
    const { baseElement } = render(<Calendar onChange={mockOnChange} />);
    fireEvent.click(
      baseElement.getElementsByClassName('m-datepicker__grid-body')[0].querySelector('button') as HTMLButtonElement
    );
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should call onBlur when focus is removed from Calendar', () => {
    const mockOnBlur = jest.fn();
    const { baseElement } = render(<Calendar onBlur={mockOnBlur} />);
    const focusableElement = baseElement.querySelector('button') as HTMLButtonElement;
    focusableElement.focus();
    focusableElement.blur();
    expect(mockOnBlur).toHaveBeenCalled();
  });

  it('should have an active date if value is provided', () => {
    const date = new Date(Date.now()).toISOString();
    const { baseElement } = render(<Calendar value={date} />);
    expect(baseElement.getElementsByClassName('is-current').length).toBe(1);
  });

  it('should rotate through the views', () => {
    const { baseElement } = render(<Calendar />);
    const rotateViewButton = baseElement.querySelector('.m-datepicker__nav-title') as HTMLButtonElement;
    expect(baseElement.getElementsByClassName('m-datepicker__grid-body').length).toBe(1);
    expect(baseElement.getElementsByClassName('m-datepicker__list').length).toBe(0);
    fireEvent.click(rotateViewButton);
    expect(baseElement.getElementsByClassName('m-datepicker__grid-body').length).toBe(0);
    expect(baseElement.getElementsByClassName('m-datepicker__list').length).toBe(1);
    fireEvent.click(rotateViewButton);
    expect(baseElement.getElementsByClassName('m-datepicker__grid-body').length).toBe(0);
    expect(baseElement.getElementsByClassName('m-datepicker__list').length).toBe(1);
    fireEvent.click(rotateViewButton);
    expect(baseElement.getElementsByClassName('m-datepicker__grid-body').length).toBe(1);
    expect(baseElement.getElementsByClassName('m-datepicker__list').length).toBe(0);
  });

  it('should change to previous page when clicking on previous button', () => {
    const date = new Date('2023-02-22').toISOString();
    const { baseElement, queryByText } = render(<Calendar value={date} locale="enUS" />);

    const rotateViewButton = baseElement.querySelector('.m-datepicker__nav-title') as HTMLButtonElement;
    const prevButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0]
      .childNodes[0] as HTMLButtonElement;

    // DaysView
    expect(queryByText('February 2023')).toBeTruthy();
    fireEvent.click(prevButton);
    expect(queryByText('February 2023')).toBeFalsy();
    expect(queryByText('January 2023')).toBeTruthy();

    // MonthsView
    fireEvent.click(rotateViewButton);

    expect(queryByText('2023')).toBeTruthy();
    fireEvent.click(prevButton);
    expect(queryByText('2023')).toBeFalsy();
    expect(queryByText('2022')).toBeTruthy();

    // YearsView
    fireEvent.click(rotateViewButton);

    expect(queryByText('2016 - 2033')).toBeTruthy();
    fireEvent.click(prevButton);
    expect(queryByText('2016 - 2033')).toBeFalsy();
    expect(queryByText('1998 - 2015')).toBeTruthy();
  });

  it('should change to next page when clicking on next button', () => {
    const date = new Date('2023-02-22').toISOString();
    const { baseElement, queryByText } = render(<Calendar value={date} locale="enUS" />);

    const rotateViewButton = baseElement.querySelector('.m-datepicker__nav-title') as HTMLButtonElement;
    const nextButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0]
      .childNodes[1] as HTMLButtonElement;

    // DaysView
    expect(queryByText('February 2023')).toBeTruthy();
    fireEvent.click(nextButton);
    expect(queryByText('February 2023')).toBeFalsy();
    expect(queryByText('March 2023')).toBeTruthy();

    // MonthsView
    fireEvent.click(rotateViewButton);

    expect(queryByText('2023')).toBeTruthy();
    fireEvent.click(nextButton);
    expect(queryByText('2023')).toBeFalsy();
    expect(queryByText('2024')).toBeTruthy();

    // YearsView
    fireEvent.click(rotateViewButton);

    expect(queryByText('2016 - 2033')).toBeTruthy();
    fireEvent.click(nextButton);
    expect(queryByText('2016 - 2033')).toBeFalsy();
    expect(queryByText('2034 - 2051')).toBeTruthy();
  });

  it('should rotate views correctly when selecting a value in a specific view', () => {
    const date = new Date('2023-02-22').toISOString();
    const { baseElement, queryByText } = render(<Calendar value={date} locale="enUS" />);

    const rotateViewButton = baseElement.querySelector('.m-datepicker__nav-title') as HTMLButtonElement;
    // Go to YearsView
    fireEvent.click(rotateViewButton);
    fireEvent.click(rotateViewButton);
    expect(queryByText('2016 - 2033')).toBeTruthy();

    // Select a year and move to MonthsView
    const yearButton = queryByText('2023') as HTMLButtonElement;
    fireEvent.click(yearButton);
    expect(queryByText('2016 - 2033')).toBeFalsy();
    expect(queryByText('2023')).toBeTruthy();

    // Select a month and move to DaysView
    const monthButton = queryByText('March') as HTMLButtonElement;
    fireEvent.click(monthButton);
    expect(queryByText('2023')).toBeFalsy();
    expect(queryByText('March 2023')).toBeTruthy();
  });

  it('should move to previous year if clicking previous on MonthsView in January', () => {
    const date = new Date('2023-01-22').toISOString();
    const { baseElement, queryByText } = render(<Calendar value={date} locale="enUS" />);
    const prevButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0]
      .childNodes[0] as HTMLButtonElement;

    expect(queryByText('January 2023')).toBeTruthy();
    fireEvent.click(prevButton);
    expect(queryByText('January 2023')).toBeFalsy();
    expect(queryByText('December 2022')).toBeTruthy();
  });

  it('should move to next year if clicking next on MonthsView in December', () => {
    const date = new Date('2023-12-22').toISOString();
    const { baseElement, queryByText } = render(<Calendar value={date} locale="enUS" />);
    const nextButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0]
      .childNodes[1] as HTMLButtonElement;

    expect(queryByText('December 2023')).toBeTruthy();
    fireEvent.click(nextButton);
    expect(queryByText('December 2023')).toBeFalsy();
    expect(queryByText('January 2024')).toBeTruthy();
  });

  it('should use the default locale (nl) when providing an unknown/erroneous one', () => {
    const date = new Date('2023-02-22').toISOString();
    const { baseElement, queryByText } = render(<Calendar value={date} locale="unknown" />);
    const prevButton = baseElement.getElementsByClassName('m-datepicker__nav-pagination')[0]
      .childNodes[0] as HTMLButtonElement;
    expect(queryByText('Februari 2023')).toBeTruthy();
    fireEvent.click(prevButton);
    expect(queryByText('Februari 2023')).toBeFalsy();
    expect(queryByText('Januari 2023')).toBeTruthy();
  });
});
