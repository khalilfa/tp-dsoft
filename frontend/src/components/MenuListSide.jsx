import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    wrapper: {
        textAlign: "center",
        marginBottom:10,
        marginTop:10,
        lineHeight: "50px"  
    },
    switchSection:{
        marginTop:"15px",
        margin: "auto",
        backgroundColor: "#fff",
        height: 50,
        borderRadius: 5,
        width: "90%",
        verticalAlign: "bottom",
    }
});

function MenuListSide({menus,t}){
    const classes = useStyles();
    return (
        <div className={classes.wrapper} >
            <section className={classes.switchSection}>
                <span>{t("Show menus on map")}</span>
                <Switch color="default" />
            </section>

            {/* menu list */}

            <section>

            </section>
        </div>
    );
}

export default MenuListSide;