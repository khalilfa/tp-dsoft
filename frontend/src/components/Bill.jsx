import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useAuth0 } from '../react-auth0-spa';
import history from '../utils/history';
import '../css/bill.css';
import '../css/main.css';

const Bill = ({ t }) => {
  const { user } = useAuth0();
  const { email } = user;
  const [client, setClient] = useState(null);
  const [credit, setCredit] = useState(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8080/client?email=${email}`)
      .then((res) => res.data)
      .then((data) => setClient(data));
    setUpdate(false);
  }, [email, update]);

  const chargeCredit = () => {
    if (credit) {
      Axios.post(`http://127.0.0.1:8080/client/credit/${credit}?email=${email}`)
        .then(() => {
          setUpdate(true);
          const text = t('The credit was deposited');
          toast.success(text);
        });
    } else {
      const text = t('Enter an amount');
      toast.error(text);
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="component-container row">
      <div className="main-title col-12">
        <div className="row">
          <div className="col-md-2 col-2 align-self-center">
            <h4><button type="button" className="go-back-button" onClick={() => goBack()}>{'<<'}</button></h4>
          </div>
          <div className="col-md-8 offset-md-2 col-10">
            <h2>{t('Charge credit')}</h2>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <h2>{t('Credit to deposit')}</h2>
          </div>
          <div className="col-md-4">
            <h2>{t('Your balance is')}: $ {client ? client.credit : 0}</h2>
          </div>
        </div>
      </div>
      <div className="input-credit-bill col-md-3">
        <Input onChange={(e) => setCredit(e.target.value)} />
      </div>
      <div className="w-100" />
      <div
        role="button"
        className="load-data-bill-button main-button col-md-3"
        onClick={() => chargeCredit()}
      >
        {t('Load')}
      </div>
    </div>
  );
};

export default Bill;
