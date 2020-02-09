import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header.jsx";
import Cars from "./components/Cars/Cars.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Settings from './components/Settings/Settings';
import ShowCar from './components/Cars/ShowCar/ShowCar';


class App extends Component {
    
    render() {
        return (
            <div className="container">

                <Header />

                <br />

                <Switch>
                    <Route path="/" exact>
                        <Cars />
                    </Route>

                    <Route path="/cars">
                        <Cars />
                    </Route>

                    <Route path="/car/:carId">
                        <ShowCar />
                    </Route>
                    
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    
                    <Route path="/settings">
                        <Settings />
                    </Route>
                </Switch>
                
            </div>
        );
    }
}

export default App;
