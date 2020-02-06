import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header.jsx";
import Cars from "./components/Cars/Cars.jsx";
import Cart from "./components/Cart/Cart.jsx";
import * as list from './store';
import Select from './components/Select/Select.jsx';


class App extends Component {
    
    render() {
        return (
                <div className="container">
                <Header />

                <br />

                <div className="row">
                    <div className="col-md-4">
                        <Select options={list.currency} />
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>

                <br />

                <div className="row">
                    <div className="col-md-8">
                        <Cars />
                    </div>
                    <div className="col-md-4" style={{height: '650px', overflowX: 'auto'}}>
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
