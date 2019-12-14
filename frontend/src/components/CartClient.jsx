import React from 'react';
import Axios from 'axios';


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
                    <ItemPurchased cart={cart}/> :
                    <h1>loadinggg...</h1>
                }
            </>
        );
    }
}

const ItemPurchased = props => {
    return  <div>
                {props.cart.items.map( item => <RowItemPurchases {...item}/>) }
            </div>
}



function RowItemPurchases({id,menu,quantity}) {
    const { name, deliveryFrom, deliveryTo, price} = menu;
    return (
        <>
            <p>{name}</p>
            <p>{price}</p>
            <p>{id}</p>
            <p>{quantity}</p>
        </>
    )
    
}