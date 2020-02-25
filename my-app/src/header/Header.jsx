import React from 'react';
import { DisplayListContext } from '../context/context';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render () {
        return (
            <div className='header-container'>
                <div>
                    <h1>{ this.props.title }</h1>
                    <h2>{ this.props.subtitle }</h2>
                </div>
                <div className='link-container'>
                    <Link to='/home'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/products'>Products</Link>
                </div>
                <div>
                    <p>Select currency:</p>
                    <select onChange={ (e) => this.props.changeCurrency(e) }>
                        { this.props.currencyList.map(el => (
                            <option key={ el.coin } value={ el.coin }>{ el.coin }</option>
                            ))}
                    </select>
                </div>
            </div>
        )
    }
}

export default Header;