import React from 'react';
import '../css/index.css';
import '../css/main.css';
import Axios from 'axios';
import Checked from '../resources/check-mark.png';
import RightSideImg from '../resources/hamburger.png';
import { useAuth0 } from '../react-auth0-spa';
import history from '../utils/history';

const CheckedIcon = () => (
  <span><img src={Checked} className="checkedIcon" alt="Check" /></span>
);

const Index = ({ t }) => {
  const { user, loginWithRedirect } = useAuth0();

  const createClientIfNotExist = () => {
    const { email } = user;
    const urlExist = `http://127.0.0.1:8080/client/exist?email=${email}`;
    const urlCreateClient = 'http://127.0.0.1:8080/client/';
    const newClient = {
      email,
      name: user.given_name,
      lastName: user.family_name,
    };
    Axios.get(urlExist)
      .then((res) => res.data)
      .then((exist) => {
        if (!exist) {
          Axios.post(urlCreateClient, newClient);
        }
      });
  };

  if (user) {
    createClientIfNotExist();
    history.push(`/client/${user.nickname}`, user);
  }


  return (
    <div className="index-info row">
      <h1 className="title col-12">ViandasYa</h1>
      <div className="col-md-6 col-sm-12">
        <p className="text-item"><CheckedIcon /> {t('Make your menu order and we will send it to you by delivery')}</p>
        <p className="text-item"><CheckedIcon /> {t('Search your menu by location, category or price you want')}</p>
        <p className="text-item"><CheckedIcon /> {t('We have a wide variety of beer, you know')}</p>
      </div>
      <div className="burger-img col-md-4 col-sm-12 offset-md-2">
        <img src={RightSideImg} alt="hamburger" />
      </div>
      <div
        role="button"
        className="main-button login-button col-md-8 col-sm-12 offset-md-2"
        onClick={() => loginWithRedirect({})}
      >
        {t('Enter')}
      </div>
    </div>
  );
};
export default Index;
