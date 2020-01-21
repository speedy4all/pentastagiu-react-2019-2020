import React from 'react';
import './loader.css';

export class Loader extends React.Component{
    
    render() {
        return (
            <div>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}