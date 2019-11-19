import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({ items, handleChange, selector, selectorName, t }) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const menuItems = items.map((item, key) => <MenuItem key value={key}>{t(item)}</MenuItem>);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        {t(selectorName)}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={selector}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
}
