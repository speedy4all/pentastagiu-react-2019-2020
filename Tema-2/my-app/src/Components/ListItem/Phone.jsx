import * as React from 'react';




export class Phone extends React.Component {
      
    render(){
        return(<div className="phone-item item-list">
                 <p>{this.props.name}</p>
                 <p>Memory:{this.props.memory}</p>
                 <p>Storage:{this.props.storage}</p>
                 <p>Pret:{this.props.price}</p>
                 <p>{this.props.state ? this.props.state : "resigilat"}</p>
                 <button onClick={() => this.props.addToCart(this.props.itemId)}>Add to cart</button>
                 
        </div>);
    }

}