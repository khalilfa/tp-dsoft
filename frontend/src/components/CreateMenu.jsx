import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';
import TimePicker from 'react-time-picker';
import '../css/create-menu.css';

const CreateMenu = ({ close }) => {
  const options = [
    { value: 'PIZZA' },
    { value: 'BEER' },
    { value: 'SUSHI' },
    { value: 'SUSHIVEGAN' },
    { value: 'EMPANADAS' },
    { value: 'HAMBURGUER' },
    { value: 'ICECREAM' },
  ];
  return (
    <div className="create-menu-popup">
      <div className="popup-header row">
        <h2 className="create-menu-title col-md-10">
          Create Menu
        </h2>
        <h2 className="close-popup col-md-2">
          <button
            className="close-popup-symbol"
            type="button"
            onClick={() => close()}
          >
            X
          </button>
        </h2>
      </div>

      <form className="row">

        <div className="col-md-6">
          <div className="row field">
            <label className="col-md-4">Name: </label>
            <input className="col-md-6" type="text" required pattern="\S+.*" minLength="4" maxLength="30" />
          </div>

          <div className="row field">
            <label className="col-md-4">Description: </label>
            <input className="col-md-6" type="text" required pattern="\S+.*" minLength="20" maxLength="40" />
          </div>

          <div className="row field">
            <label className="col-md-4">Categories: </label>
            <Multiselect className="categories-select col-md-6" data={options} multiple required />
          </div>

          <div className="row field">
            <label className="col-md-4">Delivery price: </label>
            <input className="col-md-6" type="number" required min="10" max="40" />
          </div>

          <div className="row field">
            <label className="col-md-4">Valid from -- to: </label>
            <TimePicker
              className="react-time-picker"
              format="h:m a"
              clockIcon={null}
              clearIcon={null}
              disableClock
              clearAriaLabel="Clear value"
              required
            />
            <span>----</span>
            <TimePicker
              className="react-time-picker"
              format="h:m a"
              clockIcon={null}
              clearIcon={null}
              disableClock
              clearAriaLabel="Clear value"
              required
            />
          </div>

          <div className="row field">
            <label className="col-md-4">Delivery time: </label>
            <input className="col-md-6" type="number" required />
          </div>
        </div>

        <div className="col-md-6">
          <div className="row field">
            <label className="col-md-4">Individual price: </label>
            <input className="col-md-6" type="number" required />
          </div>

          <div className="row field">
            <label className="col-md-4">Min. amount 1: </label>
            <input className="col-md-6" type="number" required />
          </div>

          <div className="row field">
            <label className="col-md-4">Amount price 1: </label>
            <input className="col-md-6" type="number" required />
          </div>

          <div className="row field">
            <label className="col-md-4">Min. amount 2: </label>
            <input className="col-md-6" type="number" />
          </div>

          <div className="row field">
            <label className="col-md-4">Amount price 2: </label>
            <input className="col-md-6" type="number" />
          </div>

          <div className="row field">
            <label className="col-md-4">Max. sales: </label>
            <input className="col-md-6" type="number" required />
          </div>
        </div>

        <button
          type="submit"
          className="create-menu-button btn btn-secondary col-md-2"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateMenu;
