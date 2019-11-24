import React from 'react';
import Axios from 'axios';
import '../css/client.css';
import configButton from '../resources/config-button.png';
import pizzaIcon from '../resources/pizza-icon.png';
import beerIcon from '../resources/beer-icon.png';
import sushiIcon from '../resources/sushi-icon.png';
import empanadaIcon from '../resources/empanada-icon.png';
import hamburguerIcon from '../resources/hamburguer-icon.png';
import icecreamIcon from '../resources/icecream-icon.png';
import sushiVeganIcon from '../resources/sushi-vegan-icon.png';
import shoppingCartIcon from '../resources/shopping-cart-icon.svg';
import SimpleSelect from './SimpleSelect';
import MenuRow from './MenuRow';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import SearchMenus from './SearchMenus';


export default class Client extends React.Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    this.state = {
      filters: [
        t('Max price'),
        t('Min price'),
      ],
      filter: undefined,
      menus: [],
      client: {
        name: this.props.name,
        lastName: this.props.lastName,
        email: this.props.email,
        address: this.props.address,
        password: this.props.password,
        credit: this.props.credit,
      },
    };

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
  }

  componentDidMount() {
    this.getClient();
    this.getMenus();
  }

  getClient() {
    const clientId = this.props.match.params.idClient;
    Axios.get(`http://127.0.0.1:8080/client/${clientId}`)
      .then((res) => res.data)
      .then((client) => this.setState({ client }));
  }

  getMenus() {
    Axios.get('http://127.0.0.1:8080/menus')
      .then((res) => res.data)
      .then((menus) => this.setState({ menus }));
  }

  handleChangeFilter(e) {
    const filter = e.target.value;
    this.setState({ filter });
  }

  render() {
    const { t } = this.props;
    const { name } = this.state.client;
    const { menus } = this.state;
    const menusRows = menus.map((menu, key) => <MenuRow key={key} {...menu} />);
    return (
      <div>
        <Grid container>
          <Grid item className="left" xs={4}>
            <SearchMenus />
          </Grid >
          <Grid item className="right" xs={8}>

          </Grid>
        </Grid>

      </div>  
    );
  }
}
{/*
      <div className="client-container col">

        <div className="client-navbar row">
          <div className="client-navbar-option col-md-1">
            {t('Client')}
          </div>
          <div className="client-navbar-option col-md-1">
            {t('Provider')}
          </div>
          <div className="client-buy-options row col-md-2 offset-md-8">
            <input
              className="shopping-cart"
              type="image"
              src={shoppingCartIcon}
              alt="Shopping Cart"
            />

            <h4 className="client-credit">
              ${this.state.credit ? this.state.credit : 0}
            </h4>
          </div>
        </div>

        <div className="menu-options row">
          <div className="category-filters col-md-9">
            <input
              type="image"
              src={pizzaIcon}
              alt="Pizza"
              className="category-filter col-md-1"
            />
            <input
              type="image"
              src={beerIcon}
              alt="Beer"
              className="category-filter col-md-1"
            />

            <input
              type="image"
              src={sushiIcon}
              alt="Sushi"
              className="category-filter col-md-1"
            />

            <input
              type="image"
              src={empanadaIcon}
              alt="Empanadas"
              className="category-filter col-md-1"
            />

            <input
              type="image"
              src={hamburguerIcon}
              alt="Hamburguer"
              className="category-filter col-md-1"
            />

            <input
              type="image"
              src={icecreamIcon}
              alt="Ice-cream"
              className="category-filter col-md-1"
            />

            <input
              type="image"
              src={sushiVeganIcon}
              alt="Pizza"
              className="category-filter col-md-1"
            />
          </div>

          <div className="menu-filters col-md-3 align-self-center d-flex justify-content-center">
            <SimpleSelect
              items={this.state.filters}
              handleChange={this.handleChangeFilters}
              selector={this.state.filter}
              selectorName="Filter"
              t={t}
            />
          </div>
        </div>

        <div className="menu-list">
          {menusRows}
        </div>
      </div>
*/}
Client.defaultProps = {
  name: 'Pepe',
  lastName: 'Argento',
  email: 'pepe_argento@gmail.com',
  address: 'Las heras nº3244',
  password: 'pepito',
  credit: 500,
};