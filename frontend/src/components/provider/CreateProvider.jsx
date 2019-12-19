import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import '../../css/create-provider.css';
import '../../css/main.css';
import Axios from 'axios';
import { toast } from 'react-toastify';
import TimeSelect from '../TimeSelect';
import Multiselect from '../Multiselect';
import Map from '../Map';
import { useAuth0 } from '../../react-auth0-spa';
import history from '../../utils/history';

const CreateProvider = ({ t, setExistProvider }) => {
  const { user } = useAuth0();
  const { nickname } = user;
  const clientEmail = user.email;
  const date = new Date();
  const options = [t('Monday'), t('Tuesday'), t('Wednesday'), t('Thursday'), t('Friday'), t('Saturday'),
    t('Sunday')];

  const [name, setName] = useState('');
  const [logo, setLogo] = useState(undefined);
  const [locality, setLocality] = useState('');
  const [gmapLocation, setGmapLocation] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [urlSite, setUrlSite] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [from, setFrom] = useState(`${date.getHours()}:${date.getMinutes()}`);
  const [to, setTo] = useState(`${date.getHours()}:${date.getMinutes()}`);
  const [ableDays, setAbleDays] = useState([]);
  const [metersRadioDelivery, setMetersRadioDelivery] = useState('');
  const [completeLocality, setCompleteLocality] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const schedule = { from, to, ableDays };
    const provider = { name,
      locality,
      gmapLocation,
      serviceDescription,
      urlSite,
      email,
      phoneNumber,
      metersRadioDelivery,
      schedule };

    const formData = new FormData();
    formData.append('file', logo);

    Axios.post(`http://localhost:8080/provider?email=${clientEmail}`, provider)
      .then((res) => res.data)
      .then((data) => {
        Axios.post(`http://localhost:8080/provider/${data.id}/logo`, formData)
          .then(() => {
            const text = t('The provider was created successfully');
            toast.success(text);
            setExistProvider(true);
            history.push(`/client/${nickname}/provider/${data.id}`);
          })
          .catch((error) => console.info(error));
      })
      .catch((error) => console.info(error));
  };

  return (
    <div className="component-container row justify-content-center">
      <div className="col-12 main-title">
        <h2>{t('Create provider')}</h2>
      </div>

      <div className="col-12">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">{t('Name')}: </label>
                  <Input
                    className="col-md-6 col-6"
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

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">{t('Logo')}: </label>
                  <Input
                    className="col-md-6 col-6"
                    type="file"
                    accept="image/*"
                    required
                    name="logo"
                    onChange={(e) => setLogo(e.target.files[0])}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">{t('Description')}: </label>
                  <Input
                    className="col-md-6 col-6"
                    type="text"
                    pattern="\S+.*"
                    minLength="30"
                    maxLength="200"
                    required
                    name="serviceDescription"
                    value={serviceDescription}
                    onChange={(e) => setServiceDescription(e.target.value)}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">{t('Email')}: </label>
                  <Input
                    className="col-md-6 col-6"
                    type="email"
                    pattern="\S+.*"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">{t('Phone number')}: </label>
                  <Input
                    className="col-md-6 col-6"
                    type="text"
                    required
                    pattern="\d{13}"
                    minLength="13"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">{t('Website')}: </label>
                  <Input
                    className="col-md-6 col-6"
                    type="text"
                    pattern="\S+.*"
                    name="urlSite"
                    value={urlSite}
                    onChange={(e) => setUrlSite(e.target.value)}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1 align-self-center">{t('Open days')}: </label>
                  <Multiselect
                    className="col-md-6 col-6 align-self-center"
                    options={options}
                    onChangeCategories={(e) => setAbleDays(e.target.value)}
                    categories={ableDays}
                    name="ableDays"
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1 align-self-center">
                    {t('Open from')}:
                  </label>
                  <TimeSelect
                    idTimePiker="timePikerFrom"
                    className="col-md-6 col-6 align-self-center"
                    time={from}
                    handleChange={(newFrom) => setFrom(newFrom)}
                    t={t}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1 align-self-center">
                    {t('Open to')}:
                  </label>
                  <TimeSelect
                    idTimePiker="timePikerTo"
                    className="col-md-6 col-6 align-self-center"
                    time={to}
                    handleChange={(newTo) => setTo(newTo)}
                    t={t}
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">
                    {t('Locality')}:
                  </label>
                  <Input
                    className="col-md-6 col-6"
                    type="text"
                    required
                    pattern="\S+.*"
                    name="locality"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    onBlur={(e) => setCompleteLocality(e.target.value)}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-md-3 col-4 offset-1">
                    {t('Radius')}:
                  </label>
                  <Input
                    className="col-md-6 col-6"
                    type="number"
                    required
                    pattern="\S+.*"
                    name="metersRadioDelivery"
                    value={metersRadioDelivery}
                    onChange={(e) => setMetersRadioDelivery(e.target.value)}
                  />
                </div>

              </div>

              <div className="col-12">
                <div className="form-item row">
                  <label className="col-10 offset-1">{t('Select your address')}: </label>
                  <Map
                    locality={completeLocality}
                    changePosition={(newGmapLocation) => setGmapLocation(newGmapLocation)}
                  />
                </div>

              </div>
            </div>
          </div>

          <button type="submit" className="main-button create-provider-button col-md-3 offset-md-1">
            {t('Create')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProvider;
