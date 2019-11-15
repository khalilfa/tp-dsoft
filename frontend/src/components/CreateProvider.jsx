import React from 'react';
import { Input } from '@material-ui/core';
import '../css/create-provider.css';
import TimeSelect from './TimeSelect';

export default class CreateProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logo: undefined,
      locality: '',
      gmapLocation: '',
      serviceDescription: '',
      urlSite: '',
      email: '',
      phoneNumber: '',
      schedule: {
        from: '',
        to: '',
        ableDays: [],
      },
      metersRadioDelivery: '',
      menuList: [],
      credit: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { t } = this.props;
    return (
      <div className="create-provider col-md-10 offset-md-1">
        <h1>{t('Create provider')}</h1>

        <form className="row" onSubmit={this.handleSubmit}>
          <div className="col-md-6">
            <div className="row field">
              <label className="col-md-4">{t('Name')}: </label>
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
              <label className="col-md-4">{t('Logo')}: </label>
              <Input
                className="col-md-6"
                type="file"
                accept="image/*"
                required
                name="logo"
                value={this.state.logo}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Description')}: </label>
              <Input
                className="col-md-6"
                type="text"
                pattern="\S+.*"
                minLength="30"
                maxLength="200"
                name="serviceDescription"
                value={this.state.serviceDescription}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Email')}: </label>
              <Input
                className="col-md-6"
                type="email"
                pattern="\S+.*"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Phone number')}: </label>
              <Input
                className="col-md-6"
                type="text"
                required
                pattern="\d{13}"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Website')}: </label>
              <Input
                className="col-md-6"
                type="text"
                pattern="\S+.*"
                name="urlSite"
                value={this.state.urlSite}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Locality')}: </label>
              <Input
                className="col-md-6"
                type="text"
                required
                pattern="\S+.*"
                name="locality"
                value={this.state.locality}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="row field">
              <label className="col-md-4">{t('Radius in meters')}: </label>
              <Input
                className="col-md-6"
                type="number"
                required
                pattern="\S+.*"
                name="metersRadioDelivery"
                value={this.state.metersRadioDelivery}
                onChange={this.handleChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">{t('Open from')}: </label>
              <TimeSelect />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
