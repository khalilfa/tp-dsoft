import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Input } from '@material-ui/core';
import { useAuth0 } from '../react-auth0-spa';
import '../css/edit-client.css';
import '../css/main.css';

const EditClient = ({ t }) => {
  const { user } = useAuth0();
  const { email } = user;
  const urlGetClient = `http://127.0.0.1:8080/client?email=${email}`;

  const [client, setClient] = useState(null);
  useEffect(() => {
    Axios.get(urlGetClient)
      .then((res) => res.data)
      .then((data) => setClient(data));
  }, []);

  return (
    !client ? 'Loading...'
      : (
        <div className="component-container row justify-content-center">
          <div className="edit-client-title col-12">
            <h2>{t('Edit information')}</h2>
          </div>
          <div className="col-md-6 col-12 order-md-1 order-2">
            <div className="row">
              <div className="edit-colum col-12">
                <h4>{t('Name')}:</h4>
                <Input className="text-input-edit" value={client.name} />
              </div>
              <div className="edit-colum col-12">
                <h4>{t('Last name')}:</h4>
                <Input className="text-input-edit" value={client.lastName} />
              </div>
              <div className="edit-colum col-12">
                <h4>{t('Email')}:</h4>
                <Input className="text-input-edit" disabled value={client.email} />
              </div>
              <div className="edit-colum col-12">
                <h4>{t('Address')}:</h4>
                <Input className="text-input-edit" value={client.address} />
              </div>
            </div>
          </div>
          <div className="client-picture-container col-md-6 col-12 d-flex justify-content-md-end
          justify-content-start order-md-2 order-1"
          >
            <img className="client-picture" src={user.picture} alt={t('Client picture')} />
          </div>
          <div
            className="main-button save-button col-md-3 col-10 order-md-3 order-3"
            role="button"
          >
            {t('Save')}
          </div>
        </div>
      )
  );
};

export default EditClient;
