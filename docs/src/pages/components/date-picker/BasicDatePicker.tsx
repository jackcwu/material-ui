import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // rightArrowCustom = {
        //   <button>test</button>
        // }
        // rightArrowIconCustom = {"some image"}
        renderInput={(params) => <TextField {...params} variant="standard" />}
      />
    </LocalizationProvider>
  );
}
