import React from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import CreateMenu from './CreateMenu';
import ServicesList from './ServicesList';
import '../css/provider.css';

export default class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider: {},
      idProvider: this.props.match.params.idProvider,
    };

    this.deleteMenu = this.deleteMenu.bind(this);
    this.createMenu = this.createMenu.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
  }

  componentDidMount() {
    this.getProvider();
  }

  getProvider() {
    axios.get(`http://127.0.0.1:8080/provider/${this.state.idProvider}`)
      .then((res) => {
        const provider = res.data;
        this.setState({ provider });
      })
      .catch((error) => error);
  }

  deleteMenu(idMenu) {
    axios.delete(`http://127.0.0.1:8080/provider/${this.state.idProvider}/menu/${idMenu}`)
      .then((res) => {
        const { provider } = this.state;
        provider.menuList = res.data;
        this.setState({ provider });
      })
      .catch((error) => console.info(error));
  }

  createMenu(data) {
    axios.post(`http://127.0.0.1:8080/provider/${this.state.idProvider}/menu`, data)
      .then((res) => res.data)
      .then((menuList) => {
        const { provider } = this.state;
        provider.menuList = menuList;
        this.setState({ provider });
      })
      .catch((error) => console.info(error));
  }

  updateMenu(data, idMenu) {
    axios.put(`http://127.0.0.1:8080/provider/${this.state.idProvider}/menu/${idMenu}`, data)
      .then((res) => res.data)
      .then((menuList) => {
        const { provider } = this.state;
        provider.menuList = menuList;
        this.setState({ provider });
      })
      .catch((error) => console.info(error));
  }

  render() {
    const { menuList } = this.state.provider;
    const { t } = this.props;
    return (
      <div className="provider-view">
        <div className="row">
          <h1 className="provider-name col-md-11">{t('Provider')}</h1>
          <Popup
            modal
            trigger={(
              <button type="button" className="new-menu-button">
                +
              </button>
            )}
          >
            {(close) => <CreateMenu t={t} close={close} createMenu={this.createMenu} />}
          </Popup>
        </div>
        <ServicesList
          t={t}
          className="row"
          menuList={menuList}
          deleteMenu={this.deleteMenu}
          updateMenu={this.updateMenu}
        />
      </div>
    );
  }
}
