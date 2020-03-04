import * as React from 'react';
import Hover from '../Hover';
import { Button } from '@material-ui/core';

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
                            <Button color='default' variant="contained" onClick={() => this.props.add(this.props.itemId)}>+</Button>
                            <Button color='secondary' variant="contained" onClick={() => this.props.decreaseCount(this.props.itemId)}>-</Button>
                            <Button color='secondary' variant="contained" onClick={() => this.props.remove(this.props.itemId)}>X</Button>
                        </div>
                    );
                }}
            />
        );
    }
}