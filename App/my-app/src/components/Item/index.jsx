import React from 'react';

export class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.id !== this.props.id ||
      nextProps.name !== this.props.name ||
      nextProps.recommendedAge !== this.props.recommendedGender ||
      nextProps.price !== this.props.price;
  }

  render() {
    return ( 
      <div>
        <span>id: {this.props.id} </span>
          <span>name: {this.props.name} </span>
          <span>recommended age: {this.props.recommendedAge} </span>
          <span>recommeded gender: {this.props.recommendedGender ? this.props.recommendedGender : "unisex"} </span>
          <span>price: {this.props.price} </span>
          <button onClick={()=>this.props.addToCart(this.props.id)}>Add to cart</button>
      </div>
    );
  }
}