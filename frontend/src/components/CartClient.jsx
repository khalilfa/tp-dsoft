import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import PopOver from './PopOver';
import SimpleRating from './Rating'

export default class CartClient extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            cart: null,
            client : {

            },
            isLoaded: false,
        };
        this.getClient = this.getClient.bind(this);
        this.getCart  = this.getCart.bind(this);
    }
    componentDidMount(){
        this.getClient();
        this.getCart();
    }

    getCart(){
        const idClient = this.props.match.params.idClient

        Axios.get(`http://127.0.0.1:8080/client/${idClient}/cart`)
            .then( (res) => res.data)
            .then( (cart) => this.setState({
                cart:cart,
                isLoaded:true
            }))
    }

    getClient(){
        // foo
    }

    render(){
        const { cart, isLoaded } = this.state;

        return (
            <>
                {isLoaded ?
                    <ShowItems cart={cart} />:
                    
                    <h1>loadinggg...</h1>
                }
            </>
        );
    }
}

const useStyles = makeStyles({
    container: {
        width: "80%",
        backgroundColor: "#fff",
    }
})

function ShowItems({cart}) {
    
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h3>My bought menus</h3>
            <ItemsPurchased cart={cart} />
            
        </div>
    );
}

const ItemsPurchased = props => {
    return  <div>
                {props.cart.items.map( item => <RowItemPurchases {...item}/>) }
            </div>
}



function RowItemPurchases({id,menu,quantity}) {
    const { name, deliveryFrom, deliveryTo, price} = menu;
    return (
        <div>
            <ListItem>
                <Grid container>
                    <Grid item xs={3}>
                        {name}
                    </Grid>
                    <Grid item xs={3}>
                        Precio: {price}
                    </Grid>
                    <Grid item xs={3}>
                        <PopOver deliveryFrom={deliveryFrom} deliveryTo={deliveryTo}/>                        
                    </Grid>
                    <Grid item xs={3}>
                        <p>Calificar</p>
                        <SimpleRating />
                    </Grid>
                </Grid>
            </ListItem>
            <Divider />
        </div>
    );
}

{/* <p>{name}</p>
<p>{price}</p>
<p>{quantity}</p> */}