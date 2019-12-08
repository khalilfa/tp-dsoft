import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    select: {
        /*width: 120,
        height: 20,*/
    }
})

export default function FilterByCategory( {t}){

    const classes = useStyles();
                
    return (
        <FormControl>
            <InputLabel>{t("Categories")}</InputLabel>
            <Select className={classes.select}>
                <MenuItem>{t("Vegan")}</MenuItem>
                <MenuItem>Sushi</MenuItem>
                <MenuItem>Pizza</MenuItem>
                <MenuItem>Sushi</MenuItem>
                <MenuItem>Empanada</MenuItem>
                <MenuItem>{t("Ice cream")}</MenuItem>
            </Select>
        </FormControl>
    );
}