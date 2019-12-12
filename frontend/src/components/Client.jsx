import React from 'react';
import Axios from 'axios';
import '../css/client.css';
import Pagination from './Pagination';
import FilterSide from './FilterSide';
import Grid from '@material-ui/core/Grid';
import MenuListSide from './MenuListSide';

export default class Client extends React.Component {
  constructor(props) {
    super(props);
    const { state } = this.props.location;
    this.state = {
      filter: undefined,
      pageable: undefined,
      menus: [],
      page: 0,
      client: {
        name: state.name,
        lastName: this.props.lastName,
        email: state.email,
        address: this.props.address,
        password: this.props.password,
        credit: this.props.credit,
      },
    };
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.getMenus = this.getMenus.bind(this);
  }

  componentDidMount() {
    this.getClient();
    this.getMenus();
  }

  getMenus(page = 0) {
    Axios.get(`http://127.0.0.1:8080/menus?page=${page}&elements=${5}`)
      .then((res) => res.data)
      .then((pageable) => {
        this.setState({ pageable, page, menus: pageable.content });
      });
  }

  getClient() {
    const clientId = this.props.match.params.idClient;
    Axios.get(`http://127.0.0.1:8080/client/${clientId}`)
      .then((res) => res.data)
      .then((client) => this.setState({ client }));
  }

  handleChangeFilter(e) {
    const filter = e.target.value;
    this.setState({ filter });
  }

  render() {
    const { t } = this.props;
    const { menus, pageable, page } = this.state;

    return (
      <Grid container>
        <Grid item xs={3}>
          <FilterSide t={t} menus={this.state.menus}/>
        </Grid>
        <Grid item xs={9}>
          <MenuListSide t={t} menus={this.state.menus} />
          <div className="pagination">
            <Pagination  {...pageable} page={page} getMenus={this.getMenus} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

Client.defaultProps = {
  name: 'Pepe',
  lastName: 'Argento',
  email: 'pepe_argento@gmail.com',
  address: 'Las heras nº3244',
  password: 'pepito',
  credit: 500,
};

/*
    const { t } = this.props;
    return (
      
    );
*/


/*const foo = () => (
      <div className="client-container col">
        <div className="client-header row">
          <h1 className="client-name col-md-11">{name}</h1>
          <div className="col-md-1 align-self-center d-flex justify-content-center">
            <input
              type="image"
              alt="config client"
              src={configButton}
              className="client-config-button"
            />
          </div>
        </div>

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

          <div className="menu-filters col-md-3 align-self-center d-flex justify-content-center" />
        </div>

        <div className="menu-list">
          {menusRows}
        </div>
          

      </div>
    );*/