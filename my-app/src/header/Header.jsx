import React from 'react';
import { DisplayListContext } from '../context/context';
import './Header.css';

class Header extends React.Component {

    render () {
        return (
            <>
            <DisplayListContext.Consumer>
                {(contextList) => (
                    <div className='header-container'>
                        <h1>{ this.props.title }</h1>
                        <h2>{ this.props.subtitle }</h2>
                        <button onClick={ () => this.props.toggleList(contextList.display) }>
                            Show { contextList.display === 'Cars' ? 'Cart' : 'Cars' }
                        </button>
                        <p>Select currency:</p>
                        <select onChange={ (e) => this.props.changeCurrency(e) }>
                            { this.props.currencyList.map(el => (
                                <option key={ el.coin } value={ el.coin }>{ el.coin }</option>
                            ))}
                        </select>
                    </div>)}
            </DisplayListContext.Consumer>
            </>
        )
    }
}

export default Header;