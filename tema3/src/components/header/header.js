import React from 'react';
import './header.css';

export class Header extends React.Component{
    
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