import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Login from './components/Login';
import Register from './components/Register';
import Maps from './components/Maps';
import LanguageButton from './components/LanguageButton';
import Provider from './components/Provider';

const App = ({ t }) => (
  <div>
    <LanguageButton />
    <Router>
      <Route exact path="/" render={(props) => <Login {...props} t={t} />} />
      <Route exact path="/register" render={(props) => <Register {...props} t={t} />} />
      <Route exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
      <Route exact path="/provider" render={(props) => <Provider {...props} t={t} />} />
    </Router>
  </div>
);

export default withTranslation()(App);
