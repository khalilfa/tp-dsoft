import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/provider.css';
import '../../css/main.css';
import MenuEditRow from './MenuEditRow';
import { useAuth0 } from '../../react-auth0-spa';
import history from '../../utils/history';

const Provider = (props) => {
  const { user } = useAuth0();
  const { nickname } = user;
  const { t } = props;
  const { idProvider } = props.match.params;
  const [provider, setProvider] = useState({
    menuList: [],
  });

  useEffect(() => {
    const url = `http://127.0.0.1:8080/provider/${idProvider}`;
    axios.get(url)
      .then((res) => {
        const newProvider = res.data;
        setProvider(newProvider);
      })
      .catch((error) => error);
  }, [idProvider]);

  const deleteMenu = (idMenu) => {
    axios.delete(`http://127.0.0.1:8080/provider/${idProvider}/menu/${idMenu}`)
      .then((res) => res.data)
      .then((data) => {
        const newProvider = { ...provider };
        newProvider.menuList = data;
        setProvider({ ...newProvider });
      })
      .catch((error) => console.info(error));
  };

  const openCreateMenu = () => {
    history.push(`/client/${nickname}/provider/${idProvider}/createMenu`);
  };

  const menuListRender = provider.menuList.map((menu, key) => (
    <MenuEditRow
      key={key}
      keyId={key}
      deleteMenu={deleteMenu}
      individualMenu={menu}
      t={t}
    />
  ));

  return (
    <div className="row component-container">
      <div className="main-title col-12">
        <h2>{t('My menus for sale')}</h2>
      </div>
      <div className="col-12">
        <div className="row main-list-container">
          <div className="menu-column-value col-3">
            <h5>{t('Name')}:</h5>
          </div>

          <div className="menu-column-value col-3">
            <h5>{t('Price')}:</h5>
          </div>

          <div className="menu-column-value col-3">
            <h5>{t('Max')}:</h5>
          </div>

          <div className="menu-column-value col-3">
            <h5>{t('Options')}:</h5>
          </div>

          <div className="col-12">
            {menuListRender}
          </div>

          <div role="button" className="main-button add-menu-button col-md-2" onClick={() => openCreateMenu()}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provider;
