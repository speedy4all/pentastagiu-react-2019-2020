import React from 'react';

class CartItem extends React.Component {
     
    render() {
        return (
                <tr>
                    <td>{ this.props.brand?this.props.brand:'Not stated' }</td>
                    <td>{ this.props.power?this.props.power:'Not stated' }</td>
                    <td>{ this.props.price?this.props.price:'Not stated' }</td>
                </tr>
        )
    }
}

export default CartItem;