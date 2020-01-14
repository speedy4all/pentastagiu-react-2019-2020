import React from 'react';

class Car extends React.Component {
     
    render() {
        return (
                <tr>
                    <td>{ this.props.brand?this.props.brand:'Not stated' }</td>
                    <td>{ this.props.fuel?this.props.fuel:'Not stated' }</td>
                    <td>{ this.props.power?this.props.power:'Not stated' }</td>
                    <td>{ this.props.productionYear?this.props.productionYear:'Not stated' }</td>
                    <td>{ this.props.color?this.props.color:'Not stated' }</td>
                    <td>{ this.props.price?this.props.price:'Not stated' }</td>
                </tr>
        )
    }
}

export default Car;