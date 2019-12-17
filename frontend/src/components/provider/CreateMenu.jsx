import 'date-fns';
import React, { useState, useEffect } from 'react';
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
  const [update, setUpdate] = useState(false);
  const options = ['PIZZA', 'BEER', 'SUSHI', 'SUSHIVEGAN', 'EMPANADAS', 'HAMBURGUER', 'ICECREAM'];
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [deliveryPrice, setDeliveryPrice] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [price, setPrice] = useState('');
  const [cantMin1, setCantMin1] = useState('');
  const [cantMin1Price, setCantMin1Price] = useState('');
  const [cantMin2, setCantMin2] = useState('');
  const [cantMin2Price, setCantMin2Price] = useState('');
  const [maxSales, setMaxSales] = useState('');
  const [deliveryFrom, setDeliveryFrom] = useState('');
  const [deliveryTo, setDeliveryTo] = useState('');
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

  useEffect(() => {
    const menuId = props.location.state ? props.location.state.menuId : null;
    if (menuId) {
      setUpdate(true);
      Axios.get(`http://127.0.0.1:8080/provider/${idProvider}/menu/${props.location.state.menuId}`)
        .then((res) => res.data)
        .then((data) => {
          setName(data.name);
          setDescription(data.description);
          setDeliveryPrice(data.deliveryPrice);
          setCategories(data.categories);
          setValidTo(data.validTo);
          setValidFrom(data.validFrom);
          setDeliveryFrom(data.deliveryFrom);
          setDeliveryTo(data.deliveryTo);
          setDeliveryTime(data.deliveryTime);
          setPrice(data.price);
          setCantMin1(data.cantMin1);
          setCantMin1Price(data.cantMin1Price);
          setCantMin2(data.cantMin2);
          setCantMin2Price(data.cantMin2Price);
          setMaxSales(data.maxSales);
        })
        .catch((error) => console.info(error));
    }
  }, [idProvider, props.location.state]);

  const createMenu = (data) => {
    Axios.post(`http://127.0.0.1:8080/provider/${idProvider}/menu`, data)
      .then(() => history.push(`/client/${nickname}/provider/${idProvider}`))
      .catch((error) => console.info(error));
  };

  const updateMenu = (data) => {
    Axios.put(`http://127.0.0.1:8080/provider/${idProvider}/menu/${props.location.state.menuId}`, data)
      .then(() => history.push(`/client/${nickname}/provider/${idProvider}`))
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

  const sendMenu = (event) => {
    event.preventDefault();
    if (!update) {
      const newData = prepareData();
      createMenu(newData);
    } else {
      updateMenu(state);
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