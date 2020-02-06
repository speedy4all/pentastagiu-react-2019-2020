import * as React from 'react';
import Hover from '../Hover';

export class CartItem extends React.PureComponent {

    render() {
        return (
            <Hover 
                render={(isHover) => {
                    return (
                        <div className={`cart-item ${isHover ? 'hover' : ''}`}>
                            <span>
                            <b>{this.props.count}x</b> {this.props.provider} |{" "}{this.props.date}</span>
                            <span>{this.props.name} | {this.props.age} ani</span>
                            <span>{this.props.price} Lei </span>
                            <span>Language: {this.props.language}</span>
                            <button onClick={() => this.props.add(this.props.itemId)}>+</button>
                            <button onClick={() => this.props.decreseCount(this.props.itemId)}>-</button>
                            <button onClick={() => this.props.remove(this.props.itemId)}>X</button>
                        </div>
                    );
                }}
            />
        );
    }
}