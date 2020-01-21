import React from 'react';

class Car extends React.Component {

    shouldComponentUpdate (nextProps) {
        return(
            nextProps.brand !== this.props.brand ||
            nextProps.fuel !== this.props.fuel ||
            nextProps.power !== this.props.power ||
            nextProps.productionYear !== this.props.productionYear ||
            nextProps.color !== this.props.color ||
            nextProps.price !== this.props.price 
        )
    }
     
    render() {
        return (
                <tr>
                    <td>{ this.props.brand?this.props.brand:'Not stated' }</td>
                    <td>{ this.props.fuel?this.props.fuel:'Not stated' }</td>
                    <td>{ this.props.power?this.props.power:'Not stated' }</td>
                    <td>{ this.props.productionYear?this.props.productionYear:'Not stated' }</td>
                    <td>{ this.props.color?this.props.color:'Not stated' }</td>
                    <td>{ this.props.price?this.props.price:'Not stated' }</td>
                    <td><button onClick={ () => this.props.addToCart(this.props.id) }>Add to cart</button></td>
                </tr>
        )
    }
}

export default Car;