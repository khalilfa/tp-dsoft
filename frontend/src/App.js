import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Router, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import Index from './components/Index';
import { useAuth0 } from './react-auth0-spa';
import Maps from './components/Maps';
import Provider from './components/provider/Provider';
import Bill from './components/Bill';
import CreateProvider from './components/provider/CreateProvider';
import Client from './components/Client';
import history from './utils/history';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import ClientCart from './components/ClientCart';
import Menu from './components/Menu';
import EditClient from './components/EditClient';
import Summaries from './components/summary/Summaries';
import CreateMenu from './components/provider/CreateMenu';
import LanguageButton from './components/LanguageButton';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  position: 'top-center',
  autoClose: 2300,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
});

function App({ t }) {
  const { loading, isAuthenticated } = useAuth0();
  const [existClient, setExistClient] = useState(false);
  const [existProvider, setExistProvider] = useState(false);
  const [isDolarCurrency, setIsDolarCurrency] = useState(true);

  const setIsDolarCurrencyLB = () => { // LB = language button
    setIsDolarCurrency(!isDolarCurrency);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const navBar = isAuthenticated
    ? (
      <NavBar
        t={t}
        existProvider={existProvider}
        existClient={existClient}
        setExistProvider={setExistProvider}
        changeDolarCurrency={setIsDolarCurrencyLB}
      />
    )
    : <LanguageButton changeDolarCurrency={setIsDolarCurrencyLB} />;


  return (
    <div className="container">
      <Router history={history}>
        <header className="row">
          <div className="col-12">
            { navBar }
          </div>
        </header>

        <Switch>
          <Route exact path="/" render={(props) => <Index {...props} t={t} setExistClient={setExistClient} />} />
          <PrivateRoute exact path="/client/:idClient" render={(props) => <Client {...props} t={t} isDolarCurrency={isDolarCurrency} />} />
          <PrivateRoute exact path="/client/:idClient/summaries" render={(props) => <Summaries {...props} t={t} provider={false} isDolarCurrency={isDolarCurrency} />} />
          <PrivateRoute exact path="/client/:idClient" render={(props) => <Client {...props} t={t} isDolarCurrency={isDolarCurrency} />} />
          <PrivateRoute exact path="/client/:idClient/summaries" render={(props) => <Summaries {...props} t={t} provider={false} />} />
          <PrivateRoute exact path="/client/:idClient/edit" render={(props) => <EditClient {...props} t={t} />} />
          <PrivateRoute exact path="/client/:idClient/menu/:idMenu" render={(props) => <Menu {...props} t={t} />} />
          <PrivateRoute exact path="/client/:idClient/provider/:idProvider" render={(props) => <Provider {...props} t={t} />} />
          <PrivateRoute exact path="/client/:idClient/provider/:idProvider/modifyMenu" render={(props) => <CreateMenu {...props} t={t} />} />
          <PrivateRoute exact path="/client/:idClient/provider/:idProvider/summaries" render={(props) => <Summaries {...props} t={t} provider />} />
          <PrivateRoute exact path="/client/:idClient/createProvider" render={(props) => <CreateProvider {...props} t={t} setExistProvider={setExistProvider} />} />
          <PrivateRoute exact path="/client/:idClient/cart" render={(props) => <ClientCart {...props} t={t} isDolarCurrency={isDolarCurrency} />} />
          <PrivateRoute exact path="/maps" render={(props) => <Maps {...props} t={t} />} />
          <PrivateRoute exact path="/client/:idClient/bill" render={(props) => <Bill {...props} t={t} />} />
        </Switch>
      </Router>
    </div>
  );
}


export default withTranslation()(App);
