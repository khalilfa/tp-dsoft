import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Login from './components/Login';
import Register from './components/Register';
import Maps from './components/Maps';
import Provider from './components/Provider';
import GeneralNavbar from './components/GeneralNavbar';
import Grid from '@material-ui/core/Grid';
import './css/indexGrid.css';
import Checked from "./resources/check-mark.png";
import RightSideImg from "./resources/hamburger.png";
import MenuBrowser from './components/MenuBrowser';
import Bill from './components/Bill';

const CheckedIcon = () => {
  return (
    <span><img src={Checked} className="checkedIcon"/></span>
  );
};

function App ({ t }) {

  return (
    <div>
      <GeneralNavbar />
        <Grid container className="wrapper">
          <Grid className="left" item xs={6}>
            <Router>
              <Route exact path="/" render={(props) => <Login {...props} t={t} />} />    
            </Router>  
            
          </Grid>
            <Grid className="right" item xs={6}>
              <div className="textContainer">
                <p><CheckedIcon />{t('Make your menu order and we will send it to you by delivery')}</p>
                <p><CheckedIcon />{t('Search your menu by location, category or price you want')}</p>
                <p><CheckedIcon />{t('We have a wide variety of beer, you know')}</p>
              </div>
              <img className="hamburgerImg"src={RightSideImg}/>
            </Grid>
        </Grid>
      <Router>
        <Route exact path="/register" render={(props) => <Register {...props} t={t} />} />
        <Route exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
        <Route exact path="/provider" render={(props) => <Provider {...props} t={t} />} />
        <Route exact path="/bill" render={(props) => <Bill {...props} t={t} />} />
        <Route exact path="/browseMenu" render={(props) => <MenuBrowser {...props} t={t} />} />
      </Router>
    </div>
  );
}


export default withTranslation()(App);
