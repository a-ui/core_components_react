import { Calendar, Datepicker } from '@a-ui/react';

import { useState } from 'react';

export function DatepickerExamples() {
  const [date, setDate] = useState(new Date('2023-02-22').toISOString());

  return (
    <div className="u-margin" style={{ width: '420px' }}>
      <h2>Calendar</h2>
      <div className="u-margin">
        <p className="u-margin-top">Uncontrolled</p>
        <Calendar />
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
      <div className="u-margin">
        <p className="u-margin-top">Without value (format dd/mm/yyyy)</p>
        <Datepicker
          inputProps={{ id: 'aui-datepicker-1' }}
          calendarProps={{
            unavailable: [new Date(Date.now()).toISOString()],
            unavailableTo: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            unavailableFrom: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()
          }}
        />
        <p className="u-margin-top">With value (format dd-mm-yyyy)</p>
        <Datepicker
          inputProps={{ id: 'aui-datepicker-2' }}
          format="dd-MM-yyyy"
          value={new Date(Date.now()).toISOString()}
        />
      </div>
    </div>
  );
}

export default DatepickerExamples;
