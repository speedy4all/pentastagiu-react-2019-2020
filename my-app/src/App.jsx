import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Mountain } from "./Components/mountains";
import { CartItem } from "./Components/cartItem";
import { Header } from "./Components/header";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: {},
      cartList: [],
      mountains: [],
      itemLoaded: false,
      cartLoaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        header: {
          title: "Trips in the magical romanian mountains",
          subtitle: "Are you sure that you know your country?"
        },
        mountains: [
          {
            id: 1,
            peak: "Moldoveanu",
            mountain: "Fagaras",
            county: "Sibiu",
            height: "2544",
            cottage: "Villa Balea"
          },
          {
            id: 2,
            peak: "Omu",
            mountain: "Bucegi",
            county: "Brasov",
            height: "2505"
          },
          {
            id: 3,
            peak: "Toaca",
            mountain: "Ceahlau",
            county: "Neamt",
            height: "1900"
          },
          {
            id: 4,
            peak: "Retezat",
            mountain: "Retezat",
            county: "Hunedoara",
            height: "2482"
          },
          {
            id: 5,
            peak: "Pietrosul Rodnei",
            mountain: "Rodna",
            county: "Maramures",
            height: "2303"
          }
        ],
        itemLoaded: true,
        cartLoaded: true
      });
    }, 300);
  }

  renderMountains = () =>
    this.state.mountains.map(mountain => (
      <Mountain
        addToCart={this.addToCart}
        key={mountain.id}
        itemId={mountain.id}
        peak={mountain.peak}
        mountain={mountain.mountain}
        county={mountain.county}
        height={mountain.height}
        cottage={mountain.cottage}
      />
    ));

  renderCart = () =>
    this.state.cartList.map((cartItem, index) => (
      <CartItem
        remove={this.removeFromCart}
        decrease={this.decrease}
        increase={this.addToCart}
        key={`${cartItem.id}-${index}`}
        itemId={cartItem.id} // id-ul unic
        peak={cartItem.peak}
        county={cartItem.county}
        cottage={cartItem.cottage}
        countItem={cartItem.countItem} // nr. de trips
      />
    ));
  cleanCart = () => {
    this.setState({ cartList: [] });
  };

  addToCart = itemId => {
    // debugger;
    const itemToAdd = this.state.mountains.find(item => item.id === itemId);
    if (!itemToAdd) {
      return undefined;
    }

    const cartUpdated = this.state.cartList.slice();
    const cartItem = cartUpdated.find(item => item.id === itemId);
    if (!cartItem) {
      // create a new trip
      const newItem = Object.assign({}, itemToAdd);
      newItem.countItem = 1;
      cartUpdated.push(newItem);
    } else {
      // increse the trips
      cartItem.countItem++;
    }
    this.setState({ cartList: cartUpdated });
  };
  decrease = itemId => {
    debugger;
    let cartUpdated = this.state.cartList.slice();
    let cartItem = cartUpdated.find(item => item.id === itemId);

    if (cartItem.countItem === 1) {
      // detlete row
      cartUpdated = cartUpdated.filter(x => x.id !== itemId);
    } else {
      // decrese the trips
      cartItem.countItem--;
    }
    this.setState({ cartList: cartUpdated });
  };
  removeFromCart = itemId => {
    const cartUpdated = this.state.cartList.filter(x => x.id !== itemId);
    this.setState({ cartList: cartUpdated });
  };
  render() {
    if (!this.state.itemLoaded || !this.state.cartLoaded)
      return <div>Loading...</div>;
    return (
      <>
        <header>
          <Header
            title={this.state.header.title}
            subtitle={this.state.header.subtitle}
          />
        </header>
        <div className="cart-container">
          {this.renderCart()}
          <button onClick={this.cleanCart}>Remove</button>
        </div>
        <div className="mountains-container">{this.renderMountains()}</div>
      </>
    );
  }
}
