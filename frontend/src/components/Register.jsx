import React from 'react';
import '../css/login.css';
import '../css/register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '',
      address: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { t } = this.props;
    return (
      <div className="app">
        <div className="app-title row col-ms-4 offset-md-4">
          <span className="app-logo">V⅄</span>
          <h1 className="app-name col align-self-center">ViandasYa</h1>
        </div>
        <div className="login row col-md-4 offset-md-4">
          <h1 className="login-title col-md-9 aling-self-left">
            {t('Register')}
          </h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="register-label row">
              <span className="register-text col">{'Name'}: </span>
              <input
                type="text"
                value={this.state.name}
                name="name"
                placeholder={t('Enter name')}
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">{t('Lastname')}: </span>
              <input
                type="text"
                value={this.state.lastname}
                name="lastname"
                placeholder={t('Enter lastname')}
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">{t('Email')}: </span>
              <input
                type="email"
                value={this.state.email}
                name="email"
                placeholder={t('Enter email')}
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">{t('Password')}: </span>
              <input
                type="password"
                value={this.state.password}
                name="password"
                placeholder={t('Enter password')}
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">{t('Repeat')}: </span>
              <input
                type="password"
                value={this.state.repeatPassword}
                name="repeatPassword"
                placeholder={t('Repeat password')}
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">{t('Phone')}: </span>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder={t('Enter phone number')}
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">{t('Address')}: </span>
              <input
                type="text"
                value={this.state.address}
                name="address"
                placeholder={t('Enter address')}
                onChange={this.handleInputChange}
              />
            </label>

            <button type="submit" className="btn btn-primary">{t('Register')}</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Register;
