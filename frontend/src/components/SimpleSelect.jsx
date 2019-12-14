import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../css/simple-select.css';

function SimpleSelect({ items, handleChange, selector, selectorName, t, className }) {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const menuItems = items.map((item, key) => <MenuItem key={key} value={key}>{t(item)}</MenuItem>);

  return (
    <FormControl variant="outlined" className={className}>
      <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
        {t(selectorName)}
      </InputLabel>
      <Select
        className="select"
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

export default SimpleSelect;
