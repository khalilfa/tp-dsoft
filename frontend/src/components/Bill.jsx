import React from 'react';
import Button from 'react-bootstrap/Button';
import CardPayment from './CardPayment.jsx';
import '../css/bill.css'


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
            <div id="wrapper"> 
                <nav></nav> {/* fake nav */}
                <h2>Su saldo es de: $ 100</h2>
                <Button variant="success" onClick={this.handleClick}>Agregar saldo</Button>
                {this.state.paymentComponent}                     
            </div>
        )
    }
}

export default Bill;