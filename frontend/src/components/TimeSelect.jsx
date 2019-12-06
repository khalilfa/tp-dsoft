import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
  KeyboardTimePicker } from '@material-ui/pickers';

export default function TimeSelect({ time, handleChange, className, t }) {
  const newTime = new Date();
  if (time) {
    const timeList = time.split(':');
    newTime.setHours(timeList[0]);
    newTime.setMinutes(timeList[1]);
  }

  const sendTime = (selectedTime) => {
    const zeroMin = selectedTime.getMinutes() < 10 ? '0' : '';
    const zeroHour = selectedTime.getHours() < 10 ? '0' : '';
    const stringTime = `${zeroHour}${selectedTime.getHours()}:${zeroMin}${selectedTime.getMinutes()}`;
    handleChange(stringTime);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        className={className}
        margin="normal"
        id="time-picker"
        label={t('Select time')}
        value={newTime}
        onChange={sendTime}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
