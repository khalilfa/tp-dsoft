import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

});
export default function FilterByPrice({t,filterByPrice}){

    const classes = useStyles();
    const [category,setCategory] = React.useState('Min');
                
    const handleChange = event => {
        setCategory(event.target.value);
        /*{filterByPrice};*/
    };

    return (
        <FormControl className={classes.select}>
            <InputLabel>{t("Min/max")}</InputLabel>
            <Select
                value={category}
                onChange={filterByPrice}
            >
                    <MenuItem value="Min">Min</MenuItem>
                    <MenuItem value="Max">Max</MenuItem>
            </Select>
        </FormControl>
    );
}