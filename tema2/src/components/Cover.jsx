import React from 'react';

export class Cover extends React.Component{


render() {
    return(
    <div className='covers-item'>
        <img src={this.props.imageUrl} alt=''/>
        <span>{this.props.name}</span>
        <span>Price: {this.props.price}  EUR</span>
        <span>{this.props.stock ? this.props.stock : 'Out of stock'}</span>
        <button>Add to cart</button>
    </div>
    );
}
}