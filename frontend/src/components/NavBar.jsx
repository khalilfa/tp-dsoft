import React, { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Axios from 'axios';
import { useAuth0 } from '../react-auth0-spa';
import LanguageButton from './LanguageButton';
import history from '../utils/history';
import '../css/navbar.css';

const NavBar = ({ existProvider, existClient, setExistProvider ,changeDolarCurrency}) => {
  const { logout, user } = useAuth0();
  const { nickname, email } = user;
  const [client, setClient] = useState({});

  useEffect(() => {
    if (existProvider) {
      Axios.get(`http://127.0.0.1:8080/client?email=${email}`)
        .then((res) => res.data)
        .then((newClient) => setClient(newClient));
    }
  }, [existProvider, email]);

  useEffect(() => {
    if (existClient) {
      Axios.get(`http://127.0.0.1:8080/client/provider?email=${email}`)
        .then((res) => res.data)
        .then((data) => {
          setExistProvider(data);
        })
        .catch((error) => console.info(error));
    }
  }, [existClient, setExistProvider, email]);

  const providerNavBar = existProvider
    ? (
      <div>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => history.push(`/client/${nickname}/provider/${client.provider.id}`)}>Home</NavDropdown.Item>
        <NavDropdown.Item onClick={() => logout()}>Summaries</NavDropdown.Item>
      </div>
    )
    : (
      <div>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => history.push(`/client/${nickname}/createProvider`, {})}>Provider</NavDropdown.Item>
      </div>
    );

  const clientImageNavBar = <img className="client-image-navbar" src={user.picture} alt="User picature" />;
  return (
    <div className="row d-flex justify-content-between">
      <NavDropdown className="col-auto client-navbar" title={clientImageNavBar} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={() => history.push(`/client/${nickname}`)}>Home</NavDropdown.Item>
        <NavDropdown.Item onClick={() => history.push(`/client/${nickname}/edit`)}>Edit</NavDropdown.Item>
        <NavDropdown.Item onClick={() => history.push(`/client/${nickname}/cart`)}>Cart</NavDropdown.Item>
        <NavDropdown.Item onClick={() => history.push(`/client/${nickname}/summaries`)}>Summaries</NavDropdown.Item>
        {providerNavBar}
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => logout()}>Log out</NavDropdown.Item>
      </NavDropdown>

      <LanguageButton className="col-auto d-flex align-items-end" 
                      changeDolarCurrency={changeDolarCurrency}/>
    </div>
  );
};

export default NavBar;
