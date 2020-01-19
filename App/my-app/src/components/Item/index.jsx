import React from 'react';

export class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Recommended Age</th>
          <th>Recommended Gender</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>{this.props.id}</td>
          <td>{this.props.name}</td>
          <td>{this.props.recommendedAge}</td>
          <td>{this.props.recommendedGender ? this.props.recommendedGender : "unisex"}</td>
          <td>{this.props.price}</td>
        </tr>
      </table>
    );
  }
}