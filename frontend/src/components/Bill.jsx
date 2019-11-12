import React from 'react';
import Button from 'react-bootstrap/Button';
import CardPayment from './CardPayment.jsx';


class Bill extends React.Component{

   constructor(props){
       super(props);
       this.state = {
           paymentComponent: null,
       }
       this.handleClick = this.handleClick.bind(this);
   } 

   handleClick(){
        this.setState(state => ({
            paymentComponent: <CardPayment />
        }));
    }

    render(){
        return (
            <div>
                <p>Su saldo es de: (mock)</p>
                <Button onClick={this.handleClick}>Agregar saldo</Button>
                {this.state.paymentComponent}                     
            </div>
        )
    }
}

export default Bill;