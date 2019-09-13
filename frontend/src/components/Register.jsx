import React from 'react';
import '../css/login.css';
import '../css/register.css';

function Register() {
  return (
    <div className="app">
      <div className="app-title row col-ms-4 offset-md-4">
        <span className="app-logo">V⅄</span>
        <h1 className="app-name col align-self-center">ViandasYa</h1>
      </div>
      <div className="login row col-md-4 offset-md-4">
        <h1 className="login-title col-md-9 aling-self-left">
          Registro
        </h1>
        <form className="form">
          <label className="register-label row">
            <span className="register-text col">Nombre: </span>
            <input type="text" name="name" placeholder="Ingresar nombre" />
          </label>

          <label className="register-label row">
            <span className="register-text col">Apellido: </span>
            <input type="text" name="lastname" placeholder="Ingresar apellido" />
          </label>

          <label className="register-label row">
            <span className="register-text col">Email: </span>
            <input type="email" name="email" placeholder="Ingresar email" />
          </label>

          <label className="register-label row">
            <span className="register-text col">Contraseña: </span>
            <input type="password" name="password" placeholder="Ingresar contraseña" />
          </label>

          <label className="register-label row">
            <span className="register-text col">Repetir: </span>
            <input type="password" name="passwordRepeat" placeholder="Repitar la contraseña" />
          </label>

          <label className="register-label row">
            <span className="register-text col">Telefono: </span>
            <input type="text" name="phone" placeholder="Ingresar telefono" />
          </label>

          <label className="register-label row">
            <span className="register-text col">Direccion: </span>
            <input type="text" name="address" placeholder="Ingresar direccion" />
          </label>

          <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
