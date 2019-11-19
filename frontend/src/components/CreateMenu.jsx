import 'date-fns';
import React from 'react';
import TimePicker from 'react-time-picker';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
  KeyboardDatePicker } from '@material-ui/pickers';
import { Input } from '@material-ui/core';
import Multiselect from './Multiselect';
import '../css/create-menu.css';

export default class CreateMenu extends React.Component {
  constructor(props) {
    super(props);

    const validFrom = this.props.validFrom ? this.buildDate(this.props.validFrom) : new Date();
    const validTo = this.props.validTo ? this.buildDate(this.props.validTo) : new Date();

    this.state = {
      options: [
        'PIZZA',
        'BEER',
        'SUSHI',
        'SUSHIVEGAN',
        'EMPANADAS',
        'HAMBURGUER',
        'ICECREAM',
      ],
      name: props.name,
      description: props.description,
      categories: props.categories,
      deliveryPrice: props.deliveryPrice,
      deliveryTime: props.deliveryTime,
      price: props.price,
      cantMin1: props.cantMin1,
      cantMin1Price: props.cantMin1Price,
      cantMin2: props.cantMin2,
      cantMin2Price: props.cantMin2Price,
      maxSales: props.maxSales,
      deliveryFrom: props.deliveryFrom,
      deliveryTo: props.deliveryTo,
      validFrom,
      validTo,
    };

    this.close = this.props.close.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeValid = this.onChangeValid.bind(this);
    this.sendMenu = this.sendMenu.bind(this);
    this.onChangeDeliveryFrom = this.onChangeDeliveryFrom.bind(this);
    this.onChangeDeliveryTo = this.onChangeDeliveryTo.bind(this);
    this.handleChangeValidFrom = this.handleChangeValidFrom.bind(this);
    this.handleChangeValidTo = this.handleChangeValidTo.bind(this);
  }

  onChangeValid(valid) {
    const validFrom = valid[0];
    const validTo = valid[1];
    this.setState({
      validFrom,
      validTo,
    });
  }

  onChangeDeliveryTo(deliveryTo) {
    this.setState({ deliveryTo });
  }

  onChangeDeliveryFrom(deliveryFrom) {
    this.setState({ deliveryFrom });
  }

  handleChangeValidFrom(data) {
    this.setState({ validFrom: data });
  }

  handleChangeValidTo(data) {
    this.setState({ validTo: data });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sendMenu(e) {
    this.close();
    const newData = this.prepareData(this.state);
    if (this.props.createMenu) {
      this.props.createMenu(newData);
    } else {
      this.props.updateMenu(this.state, this.props.idMenu);
    }
    e.preventDefault();
  }

  prepareData(data) {
    const validFrom = data.validFrom.toJSON().slice(0, 10);
    const validTo = data.validTo.toJSON().slice(0, 10);
    const newData = {
      ...data,
      validFrom,
      validTo,
    };
    return newData;
  }

  buildDate(date) {
    const dateList = date.split('-');
    return (new Date(dateList[0], (dateList[1] - 1), dateList[2]));
  }

  render() {
    const { t } = this.props;
    return (
      <div className="create-menu-popup">
        <div className="popup-header row">
          <h2 className="create-menu-title col-md-10">
            {t('Create menu')}
          </h2>
          <h2 className="close-popup col-md-2">
            <button
              className="close-popup-symbol"
              type="button"
              onClick={this.close}
            >
              X
            </button>
          </h2>
        </div>

        <form className="row" onSubmit={this.sendMenu}>

          <div className="col-md-6">
            <div className="row field">
              <label className="col-md-4 float-right">{t('Name')}: </label>
              <Input
                className="col-md-6"
                type="text"
                required
                pattern="\S+.*"
                minLength="4"
                maxLength="30"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4 float-right">{t('Description')}: </label>
              <Input
                className="col-md-6"
                type="text"
                required
                pattern="\S+.*"
                minLength="20"
                maxLength="40"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Categories')}: </label>
              <Multiselect
                className="col-md-6"
                options={this.state.options}
                onChangeCategories={this.handleChange}
                categories={this.state.categories}
                name="categories"
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Delivery price')}: </label>
              <Input
                className="col-md-6"
                type="number"
                required
                min="10"
                max="40"
                name="deliveryPrice"
                value={this.state.deliveryPrice}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Delivery time')}: </label>
              <Input
                className="col-md-6"
                type="number"
                required
                name="deliveryTime"
                value={this.state.deliveryTime}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Individual price')}: </label>
              <Input
                className="col-md-6"
                type="number"
                required
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Min. amount')} 1: </label>
              <Input
                className="col-md-6"
                type="number"
                required
                min="10"
                max="70"
                name="cantMin1"
                value={this.state.cantMin1}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Amount price')} 1: </label>
              <Input
                className="col-md-6"
                type="number"
                required
                min="0"
                max="1000"
                name="cantMin1Price"
                value={this.state.cantMin1Price}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Min. amount')} 2: </label>
              <Input
                className="col-md-6"
                type="number"
                min="40"
                max="150"
                name="cantMin2"
                value={this.state.cantMin2}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Amount price')} 2: </label>
              <Input
                className="col-md-6"
                type="number"
                min="0"
                max="1000"
                name="cantMin2Price"
                value={this.state.cantMin2Price}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row field">
              <label className="col-md-4">{t('Max. sales')}: </label>
              <Input
                className="col-md-6"
                type="number"
                required
                name="maxSales"
                value={this.state.maxSales}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4 d-flex align-items-center">{t('Delivery from')}: </label>
              <TimePicker
                className="react-time-picker col-md-6"
                format="h:m a"
                clockIcon={null}
                clearIcon={null}
                disableClock
                clearAriaLabel="Clear value"
                required
                name="deliveryFrom"
                value={this.state.deliveryFrom}
                onChange={this.onChangeDeliveryFrom}
              />
            </div>

            <div className="row field">
              <label className="col-md-4 d-flex align-items-center">{t('Delivery to')}: </label>
              <TimePicker
                className="react-time-picker col-md-6"
                format="h:m a"
                clockIcon={null}
                clearIcon={null}
                disableClock
                clearAriaLabel="Clear value"
                required
                name="deliveryTo"
                value={this.state.deliveryTo}
                onChange={this.onChangeDeliveryTo}
              />
            </div>

            <div className="row field">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <label className="valid col-md-4">{t('Valid from')}: </label>
                <KeyboardDatePicker
                  className="col-md-7"
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label={t('Select')}
                  value={this.state.validFrom}
                  onChange={this.handleChangeValidFrom}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />

                <label className="valid col-md-4">{t('Valid to')}: </label>
                <KeyboardDatePicker
                  className="col-md-7"
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label={t('Select')}
                  value={this.state.validTo}
                  onChange={this.handleChangeValidTo}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>

          <button
            type="submit"
            className="create-menu-button btn btn-secondary col-md-2"
          >
            {t('Create')}
          </button>
        </form>
      </div>
    );
  }
}

CreateMenu.defaultProps = {
  name: '',
  description: '',
  categories: [],
  deliveryPrice: '',
  deliveryTime: '',
  price: '',
  cantMin1: '',
  cantMin1Price: '',
  cantMin2: '',
  cantMin2Price: '',
  maxSales: '',
  deliveryFrom: undefined,
  deliveryTo: undefined,
};
