import React from 'react';
import { Input } from '@material-ui/core';
import '../css/create-provider.css';
import Axios from 'axios';
import TimeSelect from './TimeSelect';
import Multiselect from './Multiselect';
import Map from './Map';

export default class CreateProvider extends React.Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    this.state = {
      options: [
        t('Monday'),
        t('Tuesday'),
        t('Wednesday'),
        t('Thursday'),
        t('Friday'),
        t('Saturday'),
        t('Sunday'),
      ],
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
      completeLocality: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleLocalityChange = this.handleLocalityChange.bind(this);
    this.handleGmapLocationChange = this.handleGmapLocationChange.bind(this);
    this.handleChangeAbleDays = this.handleChangeAbleDays.bind(this);
    this.handleChangeLogo = this.handleChangeLogo.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeFrom(from) {
    const lastSchedule = this.state.schedule;
    const schedule = {
      ...lastSchedule,
      from,
    };
    this.setState({ schedule });
  }

  handleChangeTo(to) {
    const lastSchedule = this.state.schedule;
    const schedule = {
      ...lastSchedule,
      to,
    };
    this.setState({ schedule });
  }

  handleLocalityChange(e) {
    const completeLocality = e.target.value;
    this.setState({ completeLocality });
  }

  handleGmapLocationChange(gmapLocation) {
    this.setState({ gmapLocation });
  }

  handleChangeAbleDays(e) {
    const lastSchedule = this.state.schedule;
    const ableDays = e.target.value;
    const schedule = {
      ...lastSchedule,
      ableDays,
    };
    this.setState({ schedule });
  }

  handleChangeLogo(e) {
    this.setState({ logo: e.target.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:8080/provider';
    const formData = new FormData();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const { schedule } = this.state;
    const { logo } = this.state;
    const provider = {
      name: this.state.name,
      locality: this.state.locality,
      gmapLocation: this.state.gmapLocation,
      serviceDescription: this.state.serviceDescription,
      urlSite: this.state.urlSite,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      metersRadioDelivery: this.state.metersRadioDelivery,
    };

    formData.append('file', logo);
    formData.append('provider', provider);
    formData.append('schedule', schedule);

    Axios.post(url, formData, config)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
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
                onChange={this.handleChangeLogo}
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
              <label className="col-md-4">{t('Open days')}: </label>
              <Multiselect
                className="col-md-6"
                options={this.state.options}
                onChangeCategories={this.handleChangeAbleDays}
                categories={this.state.schedule.ableDays}
                name="ableDays"
              />
            </div>

            <div className="row field">
              <label className="col-md-4 d-flex align-items-center">
                {t('Open from')}:
              </label>
              <TimeSelect
                className="col-md-6"
                time={this.state.schedule.from}
                handleChange={this.handleChangeFrom}
                t={t}
              />
            </div>

            <div className="row field">
              <label className="col-md-4 d-flex align-items-center">
                {t('Open to')}:
              </label>
              <TimeSelect
                className="col-md-6"
                time={this.state.schedule.to}
                handleChange={this.handleChangeTo}
                t={t}
              />
            </div>

            <button type="submit" className="btn btn-secondary col-md-3">
              {t('Create')}
            </button>
          </div>

          <div className="col-md-6">
            <div className="row field">
              <label className="col-md-4">
                {t('Locality')}:
              </label>
              <Input
                className="col-md-6"
                type="text"
                required
                pattern="\S+.*"
                name="locality"
                value={this.state.locality}
                onChange={this.handleChange}
                onBlur={this.handleLocalityChange}
              />
            </div>

            <div className="row field">
              <label className="col-md-4">
                {t('Radius in meters')}:
              </label>
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
              <label className="col-md-10">{t('Select your address')}: </label>
              <Map
                locality={this.state.completeLocality}
                changePosition={this.handleGmapLocationChange}
              />
            </div>
          </div>

        </form>
      </div>
    );
  }
}
