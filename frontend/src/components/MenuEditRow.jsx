import React from 'react';
import '../css/provider.css';
import Popup from 'reactjs-popup';
import editButton from '../resources/edit-button.jpg';
import deleteButton from '../resources/delete-button.png';
import CreateMenu from './CreateMenu';

const MenuEditRow = ({ keyId, individualMenu, deleteMenu, updateMenu, t }) => {
  const par = (keyId % 2) === 0 ? 'menu-column-pair row' : 'menu-column row';
  return (
    <div className={par}>
      <div className="menu-column-value col-sm-3">{ individualMenu.name }</div>
      <div className="menu-column-value col-sm-3">{ individualMenu.price }</div>
      <div className="menu-column-value col-sm-3">{ individualMenu.maxSales }</div>
      <div className="menu-column-value col-sm-3">
        <input
          type="image"
          className="button"
          src={deleteButton}
          alt="delete button"
          onClick={() => deleteMenu(individualMenu.id)}
        />
        <Popup
          modal
          trigger={(
            <input type="image" className="button" src={editButton} alt="edit button" />
            )}
        >
          {(close) => (
            <CreateMenu
              close={close}
              idMenu={individualMenu.id}
              updateMenu={updateMenu}
              {...individualMenu}
            />
          )}
        </Popup>
      </div>
    </div>
  );
};

export default MenuEditRow;
