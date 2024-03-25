import { Button, Calendar, Datepicker } from '@a-ui/react';
import { mn } from 'date-fns/locale';

import { useState } from 'react';

export function DatepickerExamples() {
  const [date, setDate] = useState(new Date('2023-02-22').toISOString());
  const [customError, setCustomError] = useState('' as string);

  return (
    <div className="u-margin" style={{ width: '420px' }}>
      <h2>Calendar</h2>
      <div className="u-margin">
        <p className="u-margin-top">Uncontrolled</p>
        <Calendar locale={mn} />
        <p className="u-margin-top">Controlled</p>
        <Calendar
          value={date}
          onChange={setDate}
          unavailableTo="2023-02-02"
          unavailableFrom="2023-02-28"
          unavailable={[new Date('2023-02-24').toISOString(), new Date('2023-02-25').toISOString()]}
        />
      </div>
      <h2>Datepicker</h2>
      <div className="u-margin"></div>
      <Datepicker
        label="Without value (format dd/mm/yyyy)"
        required
        inputProps={{ id: 'aui-datepicker-1' }}
        calendarProps={{
          unavailable: [new Date(Date.now()).toISOString()],
          unavailableTo: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          unavailableFrom: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
        }}
      />
      <div className="u-margin"></div>
      <Datepicker
        label="With value (format dd-mm-yyyy)"
        format="dd-MM-yyyy"
        value={date}
        onChange={setDate}
        calendarProps={{
          locale: mn
        }}
      />
      <Button onClick={() => setDate('')}>Clear Datepicker</Button>
      <div className="u-margin"></div>
      <Datepicker
        label="Custom input field"
        inputProps={{
          state: 'success',
          description: 'OK, success'
        }}
      />
      <div className="u-margin"></div>
      <Datepicker
        invalidDateText={customError}
        label="With onChange listener (format dd-mm-yyyy)"
        inputProps={{
          onChange: (e) => {
            return setCustomError(`The wrong date has "${e.target.value.length}" characters`);
          }
        }}
        calendarProps={{ unavailableFrom: new Date('2024-02-24').toISOString() }}
        format="dd-MM-yyyy"
        value={new Date(Date.now()).toISOString()}
      />
      <div className="u-margin"></div>
      <Datepicker
        label="Custom error function"
        errorMsgFunction={(value) => {
          if (!value || (value && value.includes('00/00'))) return '';
          return 'IT DOES NOT CONTAIN 00/00';
        }}
        value={'THIS IS NOT A DATE!'}
        inputProps={{ id: 'aui-datepicker-1', state: 'success' }}
        calendarProps={{
          unavailable: [new Date(Date.now()).toISOString()],
          unavailableTo: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          unavailableFrom: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
        }}
      />
      <div style={{ marginBottom: '200px' }}></div>
    </div>
  );
}

export default DatepickerExamples;
