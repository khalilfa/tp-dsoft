import React from 'react';
import '../css/client.css';
import shoppingCartIcon from '../resources/shopping-cart-icon.svg';

const MenuRow = ({ name, description, price }) => (
  <div className="menu-row row">
    <h3 className="col-md-2 align-self-center">{name}</h3>
    <h3 className="col-md-6 align-self-center">{description}</h3>
    <h3 className="col-md-1 align-self-center">${price}</h3>
    <div className="col-md-3 align-self-center d-flex justify-content-end">
      <input
        className="buy-icon"
        type="image"
        src={shoppingCartIcon}
        alt="Shopping Cart"
      />
    </div>
  </div>
);

export default MenuRow;
