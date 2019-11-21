import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { width } from '@material-ui/system';

const useStyles = makeStyles( theme => ({
    selectSearch: {
        width: 100,
    },
}));

export default function SearchMenus(){

    const classes = useStyles();

    return (
        <h4>
            Buscar por:
            <span>
                <Select className={classes.selectSearch}>
                    <MenuItem value="nombre">Nombre</MenuItem>
                    <MenuItem value="categoria">Categoría</MenuItem>
                    <MenuItem value="localidad">Localidad</MenuItem>
                </Select>
            </span> 
        </h4>
    )
    
}