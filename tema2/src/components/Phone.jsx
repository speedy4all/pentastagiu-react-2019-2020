import React from 'react';

export class Phone extends React.Component{


render() {
    return(
    <div className='phones-item'>
        <img src={this.props.imageUrl} alt=''/>
        <span>{this.props.name}</span>
        <span>Price: {this.props.price}  EUR</span>
        <span>{this.props.stoc ? this.props.stoc : 'Out of stock'}</span>
        <button>Add to cart</button>
    </div>
    );
}






}