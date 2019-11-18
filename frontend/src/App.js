import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Login from './components/Login';
import Register from './components/Register';
import Maps from './components/Maps';
import Provider from './components/Provider';
import GeneralNavbar from './components/GeneralNavbar';
import Grid from '@material-ui/core/Grid';
import makeStyles  from '@material-ui/core/styles/makeStyles';
import { red, blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: { 
    flexGrow: 1
  },
  right: {
   backgroundColor: red, 
  },
  left: {
    backgroundColor: blue, 
  }
}));

//function classes(){ return useStyles()}

function App ({ t }) {

  const foo = "foo"
  return (
    <div>
      <GeneralNavbar />
      {/*    <Grid container>
        <Grid className={classes.right} item xs={6}></Grid>
        <Grid className={classes.left} item xs={6}></Grid>
      </Grid>  */}
      <Router>
        <Route exact path="/" render={(props) => <Login {...props} t={t} />} />
        <Route exact path="/register" render={(props) => <Register {...props} t={t} />} />
        <Route exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
        <Route exact path="/provider" render={(props) => <Provider {...props} t={t} />} />
      </Router>
    </div>
  )
    
    };

export default withTranslation()(App);
