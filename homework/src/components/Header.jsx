import React, { Component } from 'react';

export default class Header extends Component {

    render() {
        return(
            <div className="App-header">
                <span><img src={this.props.logo} alt="logo" height="50px"></img></span>
                <span className="title-header">
                    <h2> {this.props.title} </h2>
                    <div> {this.props.subtitle} </div>
                </span>
            </div>
        );
    }
}