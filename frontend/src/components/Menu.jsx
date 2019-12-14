import React from 'react';
import '../css/menu.css';
import pizzaImg from '../resources/pizza-menu-image.jpg';

const Menu = (props) => {
  const { t } = props;
  const { name, description, deliveryTime, price, deliveryPrice } = props.history.location.state;
  return (
    <div className="menu-view row justify-content-center">
      <div className="col-12 align-self-center">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h1>{name}</h1>
          </div>
        </div>
      </div>

      <img className="menu-image col-md-5 col-12" src={pizzaImg} alt="pizza" />

      <div className="menu-info col-md-4 offset-md-1 col-12">
        <div className="row justify-content-center">

          <div className="col-12">
            <h4>{t('Description')}:</h4>
            <p>{description}</p>
          </div>

          <div className="col-12">
            <h4>{t('Price')}:</h4>
            <p>${price}</p>
          </div>

          <div className="col-12">
            <h4>{t('Delivery price')}:</h4>
            <p>${deliveryPrice}</p>
          </div>

          <div className="col-12">
            <h4>{t('Delivery time')}:</h4>
            <p>{deliveryTime} {t('minutes')}</p>
          </div>

          <div
            role="button"
            className="add-cart-button col-11"
            onClick={() => console.log('Me toca')}
          >
            {t('Add to cart')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
