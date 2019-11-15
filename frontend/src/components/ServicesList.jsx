import React from 'react';
import MenuEditRow from './MenuEditRow';
import '../css/provider.css';

const ServicesList = ({ menuList, deleteMenu, updateMenu, t }) => {
  const list = menuList
    ? (
      <div className="menus-container col">
        <div className="menu-edit-column row">
          <div className="menu-column-title col-sm-3">{t('Name')}:</div>
          <div className="menu-column-title col-sm-3">{t('Price')}:</div>
          <div className="menu-column-title col-sm-3">{t('Max')}:</div>
          <div className="menu-column-title col-sm-3">{t('Options')}:</div>
        </div>
        {menuList.map((individualMenu, key) => (
          <MenuEditRow
            individualMenu={individualMenu}
            key={key}
            keyId={key}
            deleteMenu={deleteMenu}
            updateMenu={updateMenu}
          />
        ))}
      </div>
    )
    : <h1>{t('Loading')}...</h1>;
  return list;
};


export default ServicesList;
