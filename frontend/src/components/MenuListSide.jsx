import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import MenuRow from './MenuRow';
import List from '@material-ui/core/List';

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
    },
    menusSection: {
        width: "90%",
        margin: "auto",
    }
});

function MenuListSide({t,menus}){

    const classes = useStyles();
    const [switchedChange,setSwitchedChange] = React.useState(false);

    function handleChange(){
        if(!switchedChange){
            setSwitchedChange(true);
        }else{
            setSwitchedChange(false);
        }
        
    }
    return (
        
        <div className={classes.wrapper} >

            <section className={classes.switchSection}>
                <span>{t("Show menus on map")}</span>
                <Switch onChange={ () => handleChange()} color="default" />
            </section>

            {/* menu list */}

            <section className={classes.menusSection}>
                {switchedChange
                    ? <p>Render menus on map to do</p>
                    : <List>
                        {menus.map( (menu,key) => <MenuRow key={key} {...menu} />)}
                      </List>
                }

                
            </section>
        </div>
    );
}

export default MenuListSide;