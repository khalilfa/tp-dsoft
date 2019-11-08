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
    };

    this.deleteMenu = this.deleteMenu.bind(this);
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/provider/3')
      .then((res) => {
        const provider = res.data;
        this.setState({ provider });
      })
      .catch((error) => error);
  }

  deleteMenu(idMenu) {
    axios.delete(`http://127.0.0.1:8080/provider/3/menu/${idMenu}`)
      .then((res) => {
        const { provider } = this.state;
        provider.menuList = res.data;
        this.setState({ provider });
      })
      .catch((error) => console.info(error));
  }


  render() {
    const { menuList } = this.state.provider;
    return (
      <div className="provider-view">
        <div className="row">
          <h1 className="provider-name col-md-11">Provider</h1>
          <Popup
            modal
            trigger={(
              <button type="button" className="new-menu-button">
                +
              </button>
            )}
          >
            {(close) => <CreateMenu close={close} />}
          </Popup>
        </div>
        <ServicesList className="row" menuList={menuList} deleteMenu={this.deleteMenu} />
      </div>
    );
  }
}
