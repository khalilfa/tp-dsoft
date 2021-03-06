import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth0 } from '../react-auth0-spa';
import MenuRow from './MenuRow';
import '../css/main.css';

const useStyles = makeStyles({
  menu: {
    color: 'black',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    margin: '10px',
  },
  menuListContainer: {
    paddingTop: '10px',
  },
  menuTitle: {
    marginLeft: '5px',
  },
});

function MenuListSide({ menus, t, openMenu, isDolarCurrency }) {
  const classes = useStyles();
  const { user } = useAuth0();
  const { email } = user;

  const addMenuToCart = (idMenu) => {
    Axios.post(`http://127.0.0.1:8080/client/cart?email=${email}&menuId=${idMenu}&menuQ=1`)
      .then(() => {
        const text = t('The menu has been added to the cart');
        toast.success(text);
      });
  };

  const menuList = menus.map((menu, key) => (
    <MenuRow
      key={key}
      menu={menu}
      openMenu={openMenu}
      addMenuToCart={addMenuToCart}
      isDolarCurrency={isDolarCurrency}
    />
  ));
  const emptyMenus = <h3 className={`${classes.text} col-12`}>{t('There are no menus...')}</h3>;

  return (
    <div className={`${classes.menuListContainer} row justify-content-center`}>
      <h1 className={`${classes.menuTitle} col-12 align-self-center main-title`}>{t('Menu list')}</h1>
      <div className={`${classes.menu} col-12`}>
        {(menus.length !== 0) ? menuList : emptyMenus}
      </div>
    </div>
  );
}

export default MenuListSide;
