import React from 'react';
import MenuEditRow from './MenuEditRow';
import '../css/provider.css';

const ServicesList = ({ menuList, deleteMenu }) => {
  const list = menuList
    ? (
      <div className="menus-container col">
        <div className="menu-edit-column row">
          <div className="menu-column-title col-sm-3">Name:</div>
          <div className="menu-column-title col-sm-3">Price:</div>
          <div className="menu-column-title col-sm-3">Max:</div>
          <div className="menu-column-title col-sm-3">Options:</div>
        </div>
        {menuList.map((individualMenu, key) => (
          <MenuEditRow {...individualMenu} key={key} keyId={key} deleteMenu={deleteMenu} />
        ))}
      </div>
    )
    : <h1>Cargando</h1>;
  return list;
};


export default ServicesList;
