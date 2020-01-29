import React from 'react';
import { CurrencyContext } from '../context/context';


class CartItem extends React.Component {

    shouldComponentUpdate (nextProps) {
        return(
            nextProps.brand !== this.props.brand ||
            nextProps.power !== this.props.power ||
            nextProps.price !== this.props.price ||
            nextProps.qty !== this.props.qty
        )
    }
     
    render() {
        return (
            <CurrencyContext.Consumer>
            { currencyContext => 
                <tr>
                    <td>{ this.props.brand?this.props.brand:'Not stated' }</td>
                    <td>{ this.props.power?this.props.power:'Not stated' }</td>
                    <td>{ this.props.price?`${(Number(this.props.price)*currencyContext.currency.rate).toFixed(2)} ${currencyContext.currency.coin}`:'Not stated' }</td>
                    <td>
                        <button onClick = {(e) => this.props.newQty(this.props.id, e) } data-direction ="-" >-</button>
                        { this.props.qty }
                        <button onClick = {(e) => this.props.newQty(this.props.id, e) } data-direction ="+" >+</button></td>
                    <td>
                        <button onClick = { (e) => this.props.removeItem(this.props.id, e) }>X</button>
                        </td>
                </tr>
            }
            </CurrencyContext.Consumer>
        )
    }
}

export default CartItem;