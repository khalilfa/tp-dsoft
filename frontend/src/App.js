import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Index from './components/Index';
import Register from './components/Register';
import Maps from './components/Maps';
import Provider from './components/Provider';
import GeneralNavbar from './components/GeneralNavbar';
import MenuBrowser from './components/MenuBrowser';
import Bill from './components/Bill';

function App ({ t }) {

  return (
    <div>
      <GeneralNavbar />
        
      <Router>
      <Route exact path="/" render={(props) => <Index {...props} t={t} />} />    
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
