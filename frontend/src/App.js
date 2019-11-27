import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Register from './components/Register';
import Maps from './components/Maps';
import Provider from './components/Provider';
import MenuBrowser from './components/MenuBrowser';
import Bill from './components/Bill';
import CreateProvider from './components/CreateProvider';
import GeneralNavbar from './components/GeneralNavbar'
import Client from './components/Client';
import Checked from './resources/check-mark.png';
import RightSideImg from "./resources/hamburger.png";
import Grid from '@material-ui/core/Grid';
import Login from './components/Login';
import './css/indexGrid.css'

const CheckedIcon = () => {
  return (
    <span><img src={Checked} className="checkedIcon"/></span>
  );
};

function App({ t }) {

  const [user,setUser] = React.useState(null);

  return (
    <div>
      <Router>
        <div>
          <GeneralNavbar t={t}/>
          <Switch>
            <Route exact path="/browseMenu" render={(props) => <MenuBrowser {...props} t={t} />} />
            <Route exact path="/" render={(props) => <Login {...props} t={t} />} />
          </Switch>    
        </div>
      </Router>
                     
      {/*<Grid container className="wrapper">
        <Grid className="left" item xs={6}>
          <Login onLogged={(rol, userName) => handleLog()}t={t}/>
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
       */}
      {/*<Router>
      
        <Switch>
            todo aca adentro
        </Switch>
        <Route exact path="/client/:idClient" render={(props) => <Client {...props} t={t} />} />
        <Route exact path="/register" render={(props) => <Register {...props} t={t} />} />
        <Route exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
        <Route exact path="/provider/:idProvider" render={(props) => <Provider {...props} t={t} />} />
        <Route exact path="/bill" render={(props) => <Bill {...props} t={t} />} />
        <Route exact path="/browseMenu" render={(props) => <MenuBrowser {...props} t={t} />} />
        <Route exact path="/createProvider" render={(props) => <CreateProvider {...props} t={t} />} />
      </Router>*/}
    </div>
  );
}


export default withTranslation()(App);
