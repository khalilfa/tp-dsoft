import React from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import LoginWithFacebook from '../resources/facebook-icon.png';
import LoginWithGoogle from '../resources/google-icon.png';

const Login = ({ t }) => (
  <div className="app">
    <div className="app-title row col-ms-4 offset-md-4">
      <span className="app-logo">V⅄</span>
      <h1 className="app-name col align-self-center">ViandasYa</h1>
    </div>
    <div className="login row col-md-4 offset-md-4">
      <h1 className="login-title col-md-8 aling-self-left">
        {t('Login')}
      </h1>
      <img className="login-with-icon col" src={LoginWithFacebook} alt={t('Login with facebook')} />
      <img className="login-with-icon col" src={LoginWithGoogle} alt={t('Login with google')} />
      <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('Email')}</Form.Label>
          <Form.Control type="email" placeholder={t('Enter email')} />
          <Form.Text className="text-muted">
            {t('We will never share your email with anyone else.')}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('Password')}</Form.Label>
          <Form.Control type="password" placeholder={t('Enter password')} />
        </Form.Group>

        <div>
          <Button variant="primary" type="submit">
            {t('Enter')}
          </Button>
          <p className="register-text">
            {t('If you have not account, ')}<Link to="/register" className="register">{t('register')}!</Link>
          </p>
        </div>
      </Form>
    </div>
  </div>
);

export default Login;
