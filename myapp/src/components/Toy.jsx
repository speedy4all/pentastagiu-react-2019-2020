import React from 'react';

export class Toy extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <div className="toy-item">
              <span style={{color: 'blue'}}>{this.props.name}</span><div> - </div>
              <span>Type: {this.props.type}</span><div> - </div>
              <span>{this.props.description ? this.props.description : "Nu Exista!"}</span><div> - </div>
              <span>Price: {this.props.price}</span><div> - </div>
              <button>Add to cart</button><div> - </div>
            </div>
        );
    }
}