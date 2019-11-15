import React from 'react';
import Radio from '@material-ui/core/Radio';

export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = React.useState('c');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <p>{props.descrip1}</p>
      <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <p>{props.descrip2}</p>
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
    </div>
  );
}