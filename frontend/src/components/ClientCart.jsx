import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useAuth0 } from '../react-auth0-spa';
import '../css/main.css';

const MenuCartRow = ({ menu, quantity }) => (
  <div className="main-row row">
    <div className="col-3 main-menu-text-item  align-self-center">
      <h5>{menu.name}</h5>
    </div>
    <div className="col-4 main-menu-text-item align-self-center">
      <h5>{menu.description}</h5>
    </div>
    <div className="col-3 main-menu-text-item align-self-center">
      <h5>{quantity}</h5>
    </div>
    <div className="col-2 main-menu-text-item align-self-center">
      <h5>X</h5>
    </div>
  </div>
);

const ClientCart = ({ t }) => {
  const { user } = useAuth0();
  const { email } = user;
  const [cart, setCart] = useState(undefined);

  useEffect(() => {
    Axios.get(`http://127.0.0.1:8080/client/cart?email=${email}`)
      .then((res) => res.data)
      .then((data) => setCart(data));
  }, [email]);

  const menuList = cart
    ? cart.items.map((item) => <MenuCartRow {...item} />)
    : <h4>{t('There are no menus')}...</h4>;

  return (
    <div className="component-container row">
      <div className="col-12">
        <div className="main-list-container row">
          <div className="main-title col-12">
            <h2>{t('Shopping cart')}</h2>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-3 align-self-center">
                <h4>{t('Name')}:</h4>
              </div>
              <div className="col-4 align-self-center">
                <h4>{t('Description')}:</h4>
              </div>
              <div className="col-3 align-self-center">
                <h4>{t('Quantity')}:</h4>
              </div>
              <div className="col-2 align-self-center">
                <h4>{t('Options')}:</h4>
              </div>
            </div>
          </div>
          <div className="col-12">
            {menuList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCart;

// export default class CartClient extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cart: null,
//       client: { },
//       isLoaded: false,
//     };
//     this.getClient = this.getClient.bind(this);
//     this.getCart = this.getCart.bind(this);
//   }

//   componentDidMount() {
//     this.getClient();
//     this.getCart();
//   }

//   getCart() {
//     const { idClient } = this.props.match.params;

//     Axios.get(`http://127.0.0.1:8080/client/${idClient}/cart`)
//       .then((res) => res.data)
//       .then((cart) => this.setState({
//         cart,
//         isLoaded: true,
//       }));
//   }

//   getClient() {
//     // foo
//   }

//   render() {
//     const { cart, isLoaded } = this.state;

//     return (
//       <>
//         {isLoaded
//           ? <ShowItems cart={cart} />

//           : <h1>loadinggg...</h1>}
//       </>
//     );
//   }
// }

// const useStyles = makeStyles({
//   container: {
//     width: '80%',
//     backgroundColor: '#fff',
//   },
// });

// function ShowItems({ cart }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.container}>
//       <h3>My bought menus</h3>
//       <ItemsPurchased cart={cart} />

//     </div>
//   );
// }

// const ItemsPurchased = (props) => (
//   <div>
//     {props.cart.items.map((item) => <RowItemPurchases {...item} />) }
//   </div>
// );


// function RowItemPurchases({ id, menu, quantity }) {
//   const { name, deliveryFrom, deliveryTo, price } = menu;
//   return (
//     <div>
//       <ListItem>
//         <Grid container>
//           <Grid item xs={3}>
//             {name}
//           </Grid>
//           <Grid item xs={3}>
//                         Precio: {price}
//           </Grid>
//           <Grid item xs={3}>
//             <PopOver deliveryFrom={deliveryFrom} deliveryTo={deliveryTo} />
//           </Grid>
//           <Grid item xs={3}>
//             <p>Calificar</p>
//             <SimpleRating />
//           </Grid>
//         </Grid>
//       </ListItem>
//       <Divider />
//     </div>
//   );
// }
