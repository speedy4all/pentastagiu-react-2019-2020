import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Contact from './Contact';
import Gallery from './Gallery';
import SiteMap from './SiteMap';

class Home extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className='list-container'>
                <h1>Home</h1>
                <ul>
                    <li><Link to={`${this.props.match.url}/contact`}>Contact</Link></li>
                    <li><Link to={`${this.props.match.url}/gallery`}>Gallery</Link></li>
                    <li><Link to={`${this.props.match.url}/map`}>Site map</Link></li>
                </ul>
                <Route path='/home/contact' component={ Contact } />
                <Route path='/home/gallery' component={ Gallery } />
                <Route path='/home/map' component={ SiteMap } />
            </div>
        );
    }
}

export default Home;