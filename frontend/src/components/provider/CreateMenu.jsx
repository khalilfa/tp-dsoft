import 'date-fns';
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
  KeyboardDatePicker } from '@material-ui/pickers';
import { Input } from '@material-ui/core';
import Axios from 'axios';
import Multiselect from '../Multiselect';
import '../../css/create-menu.css';
import '../../css/main.css';
import { useAuth0 } from '../../react-auth0-spa';
import history from '../../utils/history';

const buildDate = (date) => {
  const dateList = date.split('-');
  return (new Date(dateList[0], (dateList[1] - 1), dateList[2]));
};

const CreateMenu = (props) => {
  const { user } = useAuth0();
  const { nickname } = user;
  const { idProvider } = props.match.params;
  const { t } = props;
  const options = ['PIZZA', 'BEER', 'SUSHI', 'SUSHIVEGAN', 'EMPANADAS', 'HAMBURGUER', 'ICECREAM'];
  const [name, setName] = useState('Ricardo');
  const [description, setDescription] = useState('El mejor ricardo de la escena');
  const [categories, setCategories] = useState(['PIZZA']);
  const [deliveryPrice, setDeliveryPrice] = useState(30);
  const [deliveryTime, setDeliveryTime] = useState(30);
  const [price, setPrice] = useState(300);
  const [cantMin1, setCantMin1] = useState(10);
  const [cantMin1Price, setCantMin1Price] = useState(250);
  const [cantMin2, setCantMin2] = useState(40);
  const [cantMin2Price, setCantMin2Price] = useState(200);
  const [maxSales, setMaxSales] = useState(500);
  const [deliveryFrom, setDeliveryFrom] = useState('10:00');
  const [deliveryTo, setDeliveryTo] = useState('20:00');
  const [validFrom, setValidFrom] = useState(props.validFrom
    ? buildDate(props.validFrom) : new Date());
  const [validTo, setValidTo] = useState(props.validTo
    ? buildDate(props.validTo) : new Date());

  const state = {
    name,
    description,
    categories,
    deliveryPrice,
    deliveryTime,
    price,
    cantMin1,
    cantMin1Price,
    cantMin2,
    cantMin2Price,
    maxSales,
    deliveryFrom,
    deliveryTo,
    validFrom,
    validTo,
  };

  const createMenu = (data) => {
    Axios.post(`http://127.0.0.1:8080/provider/${idProvider}/menu`, data)
      .catch((error) => console.info(error));
  };

  const updateMenu = (data, idMenu) => {
    Axios.put(`http://127.0.0.1:8080/provider/${idProvider}/menu/${idMenu}`, data)
      .catch((error) => console.info(error));
  };

  const prepareData = () => {
    const newValidFrom = validFrom.toJSON().slice(0, 10);
    const newValidTo = validTo.toJSON().slice(0, 10);
    const newData = {
      ...state,
      validFrom: newValidFrom,
      validTo: newValidTo,
    };
    return newData;
  };

  const sendMenu = () => {
    const newData = prepareData();
    if (true) {
      createMenu(newData);
    } else {
      updateMenu(state, props.idMenu);
    }
  };

  const goBack = () => {
    history.push(`/client/${nickname}/provider/${idProvider}`);
  };

  return (
    <div className="row component-container">
      <div className="col-12 main-title">
        <div className="row">
          <div className="col-md-2 col-2 align-self-center">
            <h4><button type="button" className="go-back-button" onClick={goBack}>{'<<'}</button></h4>
          </div>
          <div className="col-md-8 offset-md-2 col-10">
            <h2>
              {t('Create menu')}
            </h2>
          </div>
        </div>
      </div>

      <div className="col-12">
        <form className="row" onSubmit={sendMenu}>

          <div className="col-md-6">
            <div className="row field">
              <label className="col-md-4 float-right">{t('Name')}: </label>
              <Input
                className="col-md-6 col-10"
                type="text"
                required
                pattern="\S+.*"
                minLength="4"
                maxLength="30"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4 float-right">{t('Description')}: </label>
              <Input
                className="col-md-6 col-10"
                type="text"
                required
                pattern="\S+.*"
                minLength="20"
                maxLength="40"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Categories')}: </label>
              <Multiselect
                className="col-md-6 col-10"
                options={options}
                onChangeCategories={(e) => setCategories(e.target.value)}
                categories={categories}
                name="categories"
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Delivery price')}: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                required
                min="10"
                max="40"
                name="deliveryPrice"
                value={deliveryPrice}
                onChange={(e) => setDeliveryPrice(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Delivery time')}: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                required
                name="deliveryTime"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Individual price')}: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                required
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Min. amount')} 1: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                required
                min="10"
                max="70"
                name="cantMin1"
                value={cantMin1}
                onChange={(e) => setCantMin1(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Amount price')} 1: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                required
                min="0"
                max="1000"
                name="cantMin1Price"
                value={cantMin1Price}
                onChange={(e) => setCantMin1Price(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Min. amount')} 2: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                min="40"
                max="150"
                name="cantMin2"
                value={cantMin2}
                onChange={(e) => setCantMin2(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Amount price')} 2: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                min="0"
                max="1000"
                name="cantMin2Price"
                value={cantMin2Price}
                onChange={(e) => setCantMin2Price(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row field">
              <label className="col-md-4">{t('Max. sales')}: </label>
              <Input
                className="col-md-6 col-10"
                type="number"
                required
                name="maxSales"
                value={maxSales}
                onChange={(e) => setMaxSales(e.target.value)}
              />
            </div>

            <div className="row field">
              <label className="col-md-4 d-flex align-items-center">{t('Delivery from')}: </label>
              <TimePicker
                className="react-time-picker col-md-6 col-10"
                format="h:m a"
                clockIcon={null}
                clearIcon={null}
                disableClock
                clearAriaLabel="Clear value"
                required
                name="deliveryFrom"
                value={deliveryFrom}
                onChange={(data) => {
                  setDeliveryFrom(data);
                  console.log(data);
                }}
              />
            </div>

            <div className="row field">
              <label className="col-md-4 d-flex align-items-center">{t('Delivery to')}: </label>
              <TimePicker
                className="react-time-picker col-md-6 col-10"
                format="h:m a"
                clockIcon={null}
                clearIcon={null}
                disableClock
                clearAriaLabel="Clear value"
                required
                name="deliveryTo"
                value={deliveryTo}
                onChange={(data) => setDeliveryTo(data)}
              />
            </div>

            <div className="row field">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <label className="valid col-md-4">{t('Valid from')}: </label>
                <KeyboardDatePicker
                  className="col-md-7 col-10"
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label={t('Select')}
                  value={validFrom}
                  onChange={(data) => setValidFrom(data)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

                <label className="valid col-md-4">{t('Valid to')}: </label>
                <KeyboardDatePicker
                  className="col-md-7 col-10"
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label={t('Select')}
                  value={validTo}
                  onChange={(data) => setValidTo(data)}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>

          <button
            type="submit"
            className="main-button create-menu-button col-md-3"
          >
            {t('Create')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenu;

//   onChangeValid(valid) {
//     const validFrom = valid[0];
//     const validTo = valid[1];
//     this.setState({
//       validFrom,
//       validTo,
//     });
//   }