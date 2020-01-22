import * as React from 'react';

export class CartItem extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.provider !== this.props.provider ||
            nextProps.date !== this.props.date ||
            nextProps.price !== this.props.price ||
            nextProps.payDate !== this.props.payDate ||
            (nextProps.count && nextProps.count !== this.props.count);
    }

    render() {
        return (
            <div className="cart-item">
                <span><b>{this.props.count}x</b> {this.props.provider} | {this.props.date} | Data scadenta:{this.props.payTill}</span>
                <span>{this.props.price * this.props.count}RON</span>
                <span>
                    <button onClick={() => this.props.add(this.props.itemId)}>+</button>
                    <button onClick={() => this.props.decreaseCount(this.props.itemId)}>-</button>
                    <button onClick={() => this.props.remove(this.props.itemId)}>X</button>
                </span>
            </div>
        );
    }
}