import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LogoViandasYa from '../resources/fork.png';
import Typography  from '@material-ui/core/Typography';
import LanguageButton from './LanguageButton'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: 20,
    },
    viandasYaIcon: {
        marginRight: theme.spacing(2),
        width: 60
    },
    appBar: {
        backgroundColor:"#58e0a5"
    },
    title: {
        flexGrow: 1,
    }
}));

export default function GeneralNavbar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.viandasYaIcon}>
                        <img src={LogoViandasYa} alt="image" />
                    </IconButton>
                    <Typography variant="h6" color="textPrimary" className={classes.title}>
                        ViandasYa
                    </Typography>
                    <LanguageButton/>
                </Toolbar>
            </AppBar>
        </div>
    );
}