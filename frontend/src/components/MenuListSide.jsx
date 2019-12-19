import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuRow from './MenuRow';

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

function MenuListSide({ menus, t, openMenu, isDolarCurrency}) {
  const classes = useStyles();
  const menuList = menus.map((menu, key) => <MenuRow key={key} 
                                                     menu={menu}
                                                     openMenu={openMenu} 
                                                     isDolarCurrency={isDolarCurrency} />);
  const emptyMenus = <h3 className={`${classes.text} col-12`}>No existe ningun menu...</h3>;

  return (
    <div className={`${classes.menuListContainer} row justify-content-center`}>
      <h1 className={`${classes.menuTitle} col-12 align-self-center`}>{t('Menu list')}</h1>
      <div className={`${classes.menu} col-12`}>
        {(menus.length !== 0) ? menuList : emptyMenus}
      </div>
    </div>
  );
}

export default MenuListSide;
