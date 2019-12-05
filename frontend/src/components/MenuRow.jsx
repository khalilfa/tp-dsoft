import React from 'react';
import '../css/client.css';
import shoppingCartIcon from '../resources/shopping-cart-icon.svg';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import MockMenuImage from '../resources/pizzaMenuImage.jpg';

const useStyles = makeStyles(theme =>({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  menuImage:{
    width: "15%",
  }
}));

export default function MenuRow({ name, description, price }){

  const classes = useStyles();
  return (
    <div>
      <ListItem className={classes.root}>
        <img className={classes.menuImage} src={MockMenuImage} alt="mockMenuimage" />
        <ListItemText primary={name} />
        <ListItemText primary={description} />
        <ListItemText primary={price} />
        
      </ListItem>
      <Divider />
    </div>
  );
}
/**
 *     <h3 className="col-md-2 align-self-center">{name}</h3>
    <h3 className="col-md-6 align-self-center">{description}</h3>
    <h3 className="col-md-1 align-self-center">${price}</h3>
    <div className="col-md-3 align-self-center d-flex justify-content-end">
      <input
        className="buy-icon"
        type="image"
        src={shoppingCartIcon}
        alt="Shopping Cart"
      />
    </div>
 */