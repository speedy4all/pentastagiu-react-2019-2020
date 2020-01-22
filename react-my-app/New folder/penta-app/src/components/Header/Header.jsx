import * as React from 'react';
import './Header.css';

export class Header extends React.Component {
    render () {
        return (
            <div>
                <div className='header-container'>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            </div>
        )
    }
}


