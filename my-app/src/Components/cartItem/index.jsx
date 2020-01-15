import * as React from 'react';

export class CartItem extends React.Component {
    render() {
        return(
            <div className="cart-item">
                <span>{this.props.peak} |</span>    
                <span> {this.props.county} |</span>    
                <span> {this.props.cottage}</span>    
            </div>
        );
    }
        

}