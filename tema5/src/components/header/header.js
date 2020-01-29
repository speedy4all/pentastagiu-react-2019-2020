import React from 'react';
import './header.css';

export class Header extends React.PureComponent{
    /*shouldComponentUpdate(nextProps){
        if (
            nextProps.name !== this.props.name ||
            nextProps.wish !== this.props.wish ||
            nextProps.itemcart !== this.props.itemcart
        ) {
            return true
        }
        return false
    }*/
    
    render() {
        return (
            <div>
              <ul>
                <li><a href="#home">{this.props.name}</a></li>
                <li><a href="#whishist">{this.props.wish}</a></li>
                <li><a href="#cart">{this.props.itemcart}</a></li>
            </ul>
            </div>
        );
    }
}