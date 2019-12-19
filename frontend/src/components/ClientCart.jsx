import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { css } from '@emotion/core';
import { RingLoader } from 'react-spinners';
import { useAuth0 } from '../react-auth0-spa';
import history from '../utils/history';
import '../css/main.css';
import '../css/cart.css';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: green;
`;

const MenuCartRow = ({ menu, quantity, id, deleteItem }) => (
  <div className="main-row row">
    <div className="col-md-3 col-4 main-menu-text-item  align-self-center">
      <h5>{menu.name}</h5>
    </div>
    <div className="col-md-4 col-6 main-menu-text-item align-self-center">
      <h5>{menu.description}</h5>
    </div>
    <div className="col-md-3 col-1 main-menu-text-item align-self-center">
      <h5>{quantity}</h5>
    </div>
    <div className="col-md-2 col-1 main-menu-text-item align-self-center">
      <h5>
        <div className="delete-item-cart" role="button" onClick={() => deleteItem(id)}>
          X
        </div>
      </h5>
    </div>
  </div>
);

const ClientCart = ({ t }) => {
  const { user } = useAuth0();
  const { email, nickname } = user;
  const [cart, setCart] = useState(undefined);
  const [client, setClient] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8080/client/cart?email=${email}`)
      .then((res) => res.data)
      .then((data) => {
        setCart(data);
      });
  }, [email, loading]);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8080/client?email=${email}`)
      .then((res) => res.data)
      .then((data) => {
        setClient(data);
      });
  }, [email, loading]);

  const deleteItem = (itemId) => {
    Axios.delete(`http://127.0.0.1:8080/client/cart?email=${email}&itemId=${itemId}`)
      .then((res) => res.data)
      .then((data) => {
        setCart(data);
        const text = t('The menu was successfully removed');
        toast.success(text);
      });
  };

  const buyItems = () => {
    if (cart.items.length === 0) {
      const text = t('The cart is empty');
      toast.error(text);
      history.push(`/client/${nickname}`);
    } else if (client.address) {
      if (client.credit >= cart.total) {
        setLoading(true);
        Axios.post(`http://127.0.0.1:8080/client/buy?email=${email}`)
          .then((res) => res.data)
          .then(() => {
            setLoading(false);
            const text = t('The purchase was successful');
            toast.success(text);
          });
      } else {
        const text = t('Not enough credit');
        toast.error(text);
        history.push(`/client/${nickname}/bill`);
      }
    } else {
      const text = t('There is no address');
      toast.error(text);
      history.push(`/client/${nickname}/edit`);
    }
  };

  const goBack = () => {
    history.goBack();
  };

  const menuList = cart
    ? cart.items.map((item, key) => <MenuCartRow key={key} {...item} deleteItem={deleteItem} />)
    : <h4>{t('There are no menus')}...</h4>;

  const clientCartRender = loading
    ? (
      <div className="row align-items-center">
        <div className="col-12 align-self-center">
          <RingLoader
            css={override}
            size={200}
            color="green"
          />
        </div>
      </div>
    )
    : (
      <div className="component-container row">
        <div className="col-12">
          <div className="main-list-container row">
            <div className="main-title col-12">
              <div className="row d-flex justify-content-between">
                <div className="col-md-2 col-2 align-self-center">
                  <h4><button type="button" className="go-back-button" onClick={() => goBack()}>{'<<'}</button></h4>
                </div>
                <div className="col-md-4 col-8 align-self-center">
                  <h2>{t('Shopping cart')}</h2>
                </div>
                <div className="col-md-1 col-2 align-self-center">
                  {client ? client.credit : 0}
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-md-3 d-none d-md-block align-self-center">
                  <h4>{t('Name')}:</h4>
                </div>
                <div className="col-md-4 d-none d-md-block align-self-center">
                  <h4>{t('Description')}:</h4>
                </div>
                <div className="col-md-3 d-none d-md-block align-self-center">
                  <h4>{t('Quantity')}:</h4>
                </div>
                <div className="col-md-2 d-none d-md-block align-self-center">
                  <h4>{t('Options')}:</h4>
                </div>
              </div>
            </div>
            <div className="col-12">
              {menuList}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row d-flex justify-content-between">
            <button
              type="submit"
              className="main-button buy-items-cart-button col-md-3 col-5"
              onClick={() => buyItems()}
            >
              {t('Buy')}
            </button>
            <div className="col-md-1 total-price-items align-self-center col-5">
          ${cart ? cart.total : 0}
            </div>
          </div>
        </div>
      </div>
    );

  return clientCartRender;
};

export default ClientCart;
