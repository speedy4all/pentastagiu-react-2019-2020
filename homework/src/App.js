import React, { Component } from "react";
import "./App.css";

import Header from "./components/header/header";
//import Laptop from "./components/laptop/laptop";
import CartItemList from "./components/cartItemList/cartItemList";
import LaptopList from "./components/laptoplist/laptoplist";
import { LocalContext, ThemeContext, AppContext } from "./context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/about/about";
import Refurbished from "./components/refurbished/refurbished";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Chip from "@material-ui/core/Chip";

class App extends Component {
  static contextType = AppContext;

  componentDidUpdate() {
    console.log(this.context);
  }

  /*renderList = () => (
    <LaptopList
      items={this.context.laptops}
      addToCart={this.context.addToCart}
    />
  );*/

  /* renderCart = () =>
    this.context.laptopsCart.map((item, index) => (
      <CartItem
        className="col-sm-6"
        key={`${item.id}-${index}`}
        removeFromCart={this.context.removeFromCart}
        add={this.context.addToCart}
        itemId={item.id}
        name={item.name}
        description={item.description}
        color={item.color}
        price={item.price}
        count={item.count}
        decreaseCount={this.context.removeOneFromCart}
        type={this.context.type}
      />
    ));*/

  /*if (itemToRemove) {
      //const index = this.state.laptopsCart.indexOf(itemToRemove);
      const cartUpdated = this.state.laptopsCart.splice(0, 1);
      this.setState({ laptopsCart: cartUpdated });
    }*/

  render() {
    const { showInfo } = this.context;

    return (
      <ThemeContext.Provider value={{ theme: this.context.theme }}>
        <LocalContext.Provider value={{ type: this.context.type }}>
          <BrowserRouter>
            <Header branding="About" headline="Refurbished" />
            <Grid container>
              <Switch>
                <Route exact path="/About" component={About} />
                <Route exact path="/Refurbished" component={Refurbished} />
              </Switch>
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  style={{ margin: 10 }}
                  startIcon={<Icon>send</Icon>}
                  onClick={this.context.onShowClick}
                >
                  Show Products
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  style={{ margin: 10 }}
                  startIcon={<DeleteIcon />}
                  onClick={this.context.cleanCart}
                >
                  Clear Cart
                </Button>

                <Chip label={this.context.type} color="secondary" />

                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  style={{ margin: 10 }}
                  startIcon={<ChangeHistoryIcon />}
                  onClick={this.context.changeType}
                >
                  Change Type
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  style={{ margin: 10 }}
                  startIcon={<SaveIcon />}
                  onClick={this.context.changeTheme}
                >
                  Change Theme
                </Button>
              </Grid>
              <Grid item xs={6}>
                {showInfo ? <CartItemList /> : null}
              </Grid>
              <Grid item xs={6}>
                {showInfo ? <LaptopList /> : null}
              </Grid>
            </Grid>
          </BrowserRouter>
        </LocalContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
