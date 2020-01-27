import * as React from 'react';


export class CartList extends React.Component {
    
  
    render(){
        return(<div className="phone-item item-list">
                 <p>{this.props.name}</p>
                 <p>Pret:{this.props.price}</p>
                 <p>{this.props.state ? this.props.state : "resigilat"}</p>
                 <p>{this.props.count}</p>
                 <button onClick={() => this.props.add(this.props.itemId)}>+</button>
                 <button onClick={() => this.props.decreaseCount(this.props.itemId)}>-</button>
                 <button onClick={() => this.props.removeFromCart(this.props.itemId)}>x</button>
                 
                
        </div>)
    }


} 