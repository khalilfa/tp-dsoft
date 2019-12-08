import React from 'react';
import { makeStyles } from '@material-ui/core';
import FilterByCategory from './FilterByCategory';

const useStyles = makeStyles({
    wrapper: {
        marginTop: 20,
        marginLeft: 10
    }
})


function FilterSide({t}) {
    const classes = useStyles();    

    function filterByCategory(){

    }
    return (
        <div className={classes.wrapper}>
            <h4>{t("Sort menus by")}</h4>
            <h6>
                Por categoría:
                <span>
                    <FilterByCategory t={t} filter={filterByCategory}/>
                </span>
            </h6>
        </div>
    );   
}

export default FilterSide;