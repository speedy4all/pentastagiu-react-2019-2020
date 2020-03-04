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
                <span className="lang-item-left">
                    Language: {this.props.language}
                    <form>
                        <select onChange={this.props.changeLanguage.bind(this)}>
                            <option value="ro" >Ro</option>
                            <option value="en" >En</option>
                        </select>
                    </form>
                </span>
                <span className="theme-item-left">
                    Theme: {this.props.theme}
                    <form>
                            <select onChange={this.props.changeTheme.bind(this)}>
                                <option value="light" >Light</option>
                                <option value="dark" >Dark</option>
                            </select>
                    </form>
                </span>
            </div>
        );
    }
}