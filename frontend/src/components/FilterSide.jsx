import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterByCategory from './FilterByCategory';
import FilterByPrice from './FilterByPrice';
import Grid from '@material-ui/core/Grid';
import '../css/client.css';

const useStyles = makeStyles({
    wrapper: {
        marginTop: 20,
        marginLeft: 10,
    },
})

function FilterSide({t}) {
    const classes = useStyles();    

    function filterByCategory(){
    // TODO
        console.log("category works");
    }

    function filterByPrice(){
    // TODO
    console.log("price works");
    }

    return (
        <div className={classes.wrapper}>
            <h4>{t("Sort menus by")}</h4>
            <Grid container >
                <Grid item xs={5}>
                    <h6 >{t("By category")}: </h6>
                </Grid>
                <Grid item xs={7} >
                    <div >
                        <FilterByCategory 
                                          t={t}
                                          filter={filterByCategory}/>
                    </div>                  
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={5}>
                    <h6 >{t("By min/max price")}: </h6>
                </Grid>
                <Grid item xs={7} >
                    <div >
                        <FilterByPrice 
                                          t={t}
                                          filter={filterByPrice}/>
                    </div>                  
                </Grid>
            </Grid>
        </div>
    );   
}

export default FilterSide;