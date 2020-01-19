import * as React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        )
    }
}