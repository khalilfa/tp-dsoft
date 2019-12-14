import React from 'react';
import { withTranslation } from 'react-i18next';
import { Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import { useAuth0 } from './react-auth0-spa';
import Register from './components/Register';
import Maps from './components/Maps';
import Provider from './components/Provider';
import Bill from './components/Bill';
import CreateProvider from './components/CreateProvider';
import LanguageButton from './components/LanguageButton';
import Client from './components/Client';
import Profile from './components/Profile';
import history from './utils/history';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import CartClient from './components/CartClient';


function App({ t }) {
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  const navBar = isAuthenticated ? <NavBar /> : null;

  return (
    <div className="container">
      <Router history={history}>
        <header className="row">
          <LanguageButton />
          { navBar }
        </header>

        <Switch>
          <Route exact path="/" render={(props) => <Index {...props} t={t} />} />
          <PrivateRoute exact path="/profile" render={(props) => <Profile {...props} t={t} />} />
          <PrivateRoute exact path="/client/:idClient" render={(props) => <Client {...props} t={t} />} />
          <PrivateRoute exact path="/register" render={(props) => <Register {...props} t={t} />} />
          <PrivateRoute exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
          <PrivateRoute exact path="/provider/:idProvider" render={(props) => <Provider {...props} t={t} />} />
          <PrivateRoute exact path="/bill" render={(props) => <Bill {...props} t={t} />} />
          <PrivateRoute exact path="/createProvider" render={(props) => <CreateProvider {...props} t={t} />} />
          <PrivateRoute exact path="/client/:idClient/cart" render={(props) => <CartClient {...props} t={t} />} />
        </Switch>
      </Router>
    </div>
  );
}


export default withTranslation()(App);
