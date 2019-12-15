import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(0);

  function handleChange(e,v){
      setValue(v);
      // pegarle al endpoint TODO
  }
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(e,value) => handleChange(e,value)}
        />
      </Box>
    </div>
  );
}