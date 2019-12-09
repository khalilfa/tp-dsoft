import React from 'react';
import { makeStyles } from '@material-ui/core';
import FilterByCategory from './FilterByCategory';
import Grid from '@material-ui/core/Grid';
import '../css/client.css'

const useStyles = makeStyles({
    wrapper: {
        marginTop: 20,
        marginLeft: 10
    },
})


function FilterSide({t}) {
    const classes = useStyles();    

    function filterByCategory(){

    }

    return (
        <div className={classes.wrapper}>
            <h4>{t("Sort menus by")}</h4>
            <Grid container className={classes.category}>
                <Grid item xs={5}>
                    <h6 >{t("By category")}: </h6>
                </Grid>
                <Grid item xs={7} >
                    <div >
                        <FilterByCategory onChanged={function(){console.log("it works")}}
                                          t={t}
                                          filter={filterByCategory}/>
                    </div>                  
                </Grid>
            </Grid>
        </div>
    );   
}

export default FilterSide;