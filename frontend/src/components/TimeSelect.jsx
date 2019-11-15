import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
  KeyboardTimePicker } from '@material-ui/pickers';

export default function TimeSelect({ time }) {
  const newTime = new Date();
  if (time) {
    const timeList = time.split(':');
    newTime.setHours(timeList[0]);
    newTime.setMinutes(timeList[1]);
  }

  const sendTime = (selectedTime) => {
    const stringTime = `${selectedTime.getHours()}:${selectedTime.getMinutes()}`;
    console.log(stringTime);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={newTime}
          onChange={sendTime}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
