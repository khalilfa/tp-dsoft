import React from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import LoginWithFacebook from '../resources/facebook-icon.png';
import LoginWithGoogle from '../resources/google-icon.png';

function Login() {
  return (
    <div className="app">
      <div className="app-title row col-ms-4 offset-md-4">
        <span className="app-logo">V⅄</span>
        <h1 className="app-name col align-self-center">ViandasYa</h1>
      </div>
      <div className="login row col-md-4 offset-md-4">
        <h1 className="login-title col-md-9 aling-self-left">
          Ingreso
        </h1>
        <img className="login-with-icon col" src={LoginWithFacebook} alt="Login with facebook" />
        <img className="login-with-icon col" src={LoginWithGoogle} alt="Login with google" />
        <Form className="form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresar email" />
            <Form.Text className="text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresar contraseña" />
          </Form.Group>

          <div>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
            <p className="register-text">
              Si no tenes cuenta, <Link to="/register" className="register">registrate!</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
