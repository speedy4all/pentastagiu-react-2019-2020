import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Layout extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="container" style={{marginTop: '30px'}}>
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default Layout;