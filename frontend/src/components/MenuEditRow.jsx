import React from 'react';
import '../css/provider.css';
import editButton from '../resources/edit-button.jpg';
import deleteButton from '../resources/delete-button.png';

const MenuEditRow = ({ id, keyId, name, price, maxSales, deleteMenu }) => {
  const par = (keyId % 2) === 0 ? 'menu-column-pair row' : 'menu-column row';
  return (
    <div className={par}>
      <div className="menu-column-value col-sm-3">{ name }</div>
      <div className="menu-column-value col-sm-3">{ price }</div>
      <div className="menu-column-value col-sm-3">{ maxSales }</div>
      <div className="menu-column-value col-sm-3">
        <input
          type="image"
          className="button"
          src={deleteButton}
          alt="delete button"
          onClick={() => deleteMenu(id)}
        />
        <input type="image" className="button" src={editButton} alt="edit button" />
      </div>
    </div>
  );
};

export default MenuEditRow;
