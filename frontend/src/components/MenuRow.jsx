import React from 'react';
import '../css/client.css';
import ShoppingCartIcon from '../resources/shopping-cart-icon.svg';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import MockMenuImage from '../resources/pizzaMenuImage.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 100,
  },
  menuImage:{
    width: "15%",
    marginRight: "12px",
  },
  menuName:{
    fontSize: "16px",
    
  },
  menuDescription: {
    fontSize: "14px",
  },
  boxNameDesc:{
    marginRight: "10px",
  },
  shoppingCartIcon:{
    width:"30%"
  },
}));

function NameDescriptionBlock( {name, description} ){

  const classes = useStyles();
  return (
    <div className={classes.boxNameDesc}>
      <p className={classes.menuName}>{name}</p>
      <p className={classes.menuDescription}>{description}</p>
    </div>
  );
  
}

export default function MenuRow({ name, description, price }){

  const classes = useStyles();  

  return (
    <div>
      <ListItem className={classes.root}>
          <img className={classes.menuImage} src={MockMenuImage} alt="mockMenuimage" />
          <Grid container >
          <Grid item xs={6}>
            <ListItemText primary={NameDescriptionBlock({name, description})} />
          </Grid>
          <Grid item xs={4}>
            <ListItemText>$ {price}</ListItemText>
          </Grid>
          <Grid item xs={2}>
              <img className={classes.shoppingCartIcon} src={ShoppingCartIcon}/>
          </Grid>
        </Grid>
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