import React from 'react';

class Car extends React.Component {
     
    render() {
        return (
                <tr>
                    <td>{ this.props.carProps.brand?this.props.carProps.brand:'Not stated' }</td>
                    <td>{ this.props.carProps.fuel?this.props.carProps.fuel:'Not stated' }</td>
                    <td>{ this.props.carProps.power?this.props.carProps.power:'Not stated' }</td>
                    <td>{ this.props.carProps.productionYear?this.props.carProps.productionYear:'Not stated' }</td>
                    <td>{ this.props.carProps.color?this.props.carProps.color:'Not stated' }</td>
                    <td>{ this.props.carProps.price?this.props.carProps.price:'Not stated' }</td>
                </tr>
        )
    }
}

export default Car;