import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Index from './components/Index';
import Register from './components/Register';
import Maps from './components/Maps';
import Provider from './components/Provider';
import Bill from './components/Bill';
import CreateProvider from './components/CreateProvider';
import LanguageButton from './components/LanguageButton';
import Client from './components/Client';
import SimpleSelect from './components/SimpleSelect';
import GeneralNavbar from './components/GeneralNavbar';

function App({ t }) {
  return (
    <div>
      
      <Router>
        <GeneralNavbar t={t} />
        <Switch>
          <Route exact path="/" render={(props) => <Index {...props} t={t} />} />
          <Route exact path="/client/:idClient" render={(props) => <Client {...props} t={t} />} />
          <Route exact path="/register" render={(props) => <Register {...props} t={t} />} />
          <Route exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
          <Route exact path="/provider/:idProvider" render={(props) => <Provider {...props} t={t} />} />
          <Route exact path="/bill" render={(props) => <Bill {...props} t={t} />} />
          <Route exact path="/createProvider" render={(props) => <CreateProvider {...props} t={t} />} />
          <Route exact path="/test" render={(props) => <SimpleSelect {...props} t={t} />} />
        </Switch>
        
      </Router>
    </div>
  );
}


export default withTranslation()(App);


/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Register from './components/Register';
import Maps from './components/Maps';
import Provider from './components/Provider';
import Bill from './components/Bill';
import CreateProvider from './components/CreateProvider';
import GeneralNavbar from './components/GeneralNavbar';
import Client from './components/Client';
import Index from './components/Index';
import HomePageClient from './components/HomePageClient';
import './css/indexGrid.css';

function App({ t }) {
  //  const [user,setUser] = React.useState(null); -- to set onLogged // ToDo
  //  const [rol,setRol]   = React.useState(null); -- to set onLogged // ToDo

  function handleLog(event) {
    event.preventDefault();
    // to do
  }
  return (
    <div>
      <Router>
        <div>

          <GeneralNavbar t={t} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Index
                  {...props}
                  t={t}
                  onLogged={(event) => handleLog(event)}
                />
              )}
            />
            />
            <Route exact path="/client/:idClient" render={(props) => <Client {...props} t={t} />} />
            <Route exact path="/register" render={(props) => <Register {...props} t={t} />} />
            <Route exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
            <Route exact path="/provider/:idProvider" render={(props) => <Provider {...props} t={t} />} />
            <Route exact path="/bill" render={(props) => <Bill {...props} t={t} />} />
            <Route exact path="/createProvider" render={(props) => <CreateProvider {...props} t={t} />} />
            <Route exact path="/home" render={(props) => <HomePageClient {...props} t={t} />} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default withTranslation()(App);
*/
