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
    alert(`${this.state.name} ${this.state.lastname}`);
  }

  render() {
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
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="register-label row">
              <span className="register-text col">Nombre: </span>
              <input
                type="text"
                value={this.state.name}
                name="name"
                placeholder="Ingresar nombre"
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">Apellido: </span>
              <input
                type="text"
                value={this.state.lastname}
                name="lastname"
                placeholder="Ingresar apellido"
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">Email: </span>
              <input
                type="email"
                value={this.state.email}
                name="email"
                placeholder="Ingresar email"
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">Contraseña: </span>
              <input
                type="password"
                value={this.state.password}
                name="password"
                placeholder="Ingresar contraseña"
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">Repetir: </span>
              <input
                type="password"
                value={this.state.repeatPassword}
                name="repeatPassword"
                placeholder="Repitar la contraseña"
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">Telefono: </span>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                placeholder="Ingresar telefono"
                onChange={this.handleInputChange}
              />
            </label>

            <label className="register-label row">
              <span className="register-text col">Direccion: </span>
              <input
                type="text"
                value={this.state.address}
                name="address"
                placeholder="Ingresar direccion"
                onChange={this.handleInputChange}
              />
            </label>

            <button type="submit" className="btn btn-primary">Registrar</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Register;
