import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Boolean(props) {
  return (
    <FormControl>
      <h3>{props.question}</h3>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value={"Yes"} control={<Radio />} label="Yes" />
        <FormControlLabel value={"No"} control={<Radio />} label="No" />
        </RadioGroup>
    </FormControl>
  );
}