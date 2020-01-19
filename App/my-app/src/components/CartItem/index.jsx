import React from 'react';

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.price}</td>
        </tr>
      </table>
    );
  }
}