import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LogoViandasYa from '../resources/fork.png';
import LanguageButton from './LanguageButton';
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';
import UserIcon from '../resources/user.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  viandasYaIcon: {
    marginRight: theme.spacing(2),
    width: 60,
  },
  appBar: {
    backgroundColor: '#58e0a5',
  },
  title: {
    flexGrow: 1,
  },
  userRoleSection: {
    display: "none"
  },
  userRoleSelect: {
    width:100
  },
  personImg: {
    width: 30,
    marginRight: 20
  }
}));

export default function GeneralNavbar( {t,user,rol} ) {
  const classes = useStyles();
  const handleChange = event => {
  //  setRol(event.target.value);
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.viandasYaIcon}>
            <img src={LogoViandasYa} alt="logo" />
          </IconButton>
          <Typography variant="h6" color="textPrimary" className={classes.title}>
              ViandasYa
          </Typography>
          <div className={classes.userRoleSection}>
            <img className={classes.personImg} src={UserIcon} />
            <FormControl>
              <InputLabel>{t("User Rol")}</InputLabel>
              <Select className={classes.userRoleSelect}
                value={rol}
                onChange={handleChange}
              >
                <MenuItem value="Provider">{t("Provider")}</MenuItem>
                <MenuItem value="Client">{t("Client")}</MenuItem>
              </Select>
            </FormControl>
          </div>
          <LanguageButton />
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
