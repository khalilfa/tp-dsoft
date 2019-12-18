import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(0);

  function handleChange(e, v) {
    setValue(v);
  }
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(e, newValue) => handleChange(e, newValue)}
        />
      </Box>
    </div>
  );
}
