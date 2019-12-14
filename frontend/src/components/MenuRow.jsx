import React from 'react';
import '../css/client.css';
import { makeStyles } from '@material-ui/core/styles';
import MockMenuImage from '../resources/pizzaMenuImage.jpg';
import ShoppingCartIcon from '../resources/shopping-cart-icon.svg';

const useStyles = makeStyles(() => ({
  menuImage: {
    borderRadius: '6px',
    padding: '5px',
  },
  menuName: {
    fontSize: '16px',
  },
  menuDescription: {
    fontSize: '14px',
  },
  shoppingCartIcon: {
    width: '30%',
    '&:hover': {
      width: '40%',
    },
  },
  menuRow: {
    background: 'rgba(0, 0, 0, 0.4)',
    marginBottom: '10px',
    marginRight: '5px',
    marginLeft: '5px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    color: '#e8e8e8',
    '&:hover': {
      background: 'rgba(103, 131, 78, 0.7)',
    },
  },
}));

export default function MenuRow({ id, name, description, price, openMenu }) {
  const classes = useStyles();

  return (
    <div className={`${classes.menuRow} row`}>
      {/* <div className="col-3" role="button" onClick={() => openMenu(id)}>

      </div> */}
      <img className={`${classes.menuImage} col-2`} src={MockMenuImage} alt="mockMenuimage" />

      <div className="col-6 align-self-center">
        <div className="row">
          <div
            className={`${classes.menuName} col-12 align-self-center`}
            role="button"
            onClick={() => openMenu(id)}
          >
            {name}
          </div>

          <div className={`${classes.menuDescription} col-12 align-self-center`}>
            {description}
          </div>
        </div>
      </div>

      <div className="col-2 align-self-center">
        ${price}
      </div>

      <div className="col-2 align-self-center">
        <img className={classes.shoppingCartIcon} src={ShoppingCartIcon} alt="Shopping cart" />
      </div>
    </div>
  );
}
