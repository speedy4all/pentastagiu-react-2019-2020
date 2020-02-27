import React, { Component } from "react";
import { Mountain } from "../mountains";
import CartList from '../CartList';
import { AppContext } from "../../Context/context";


export default class MountainList extends Component {
  static contextType = AppContext;
  // handleClick = () => {
  //   const {history} = this.props;
  //   history.push('/home');
  // };
  render() {
    return (
      <>
        <div className="mountains-container">
          <h3>Vacante la munte</h3>
          {this.context.mountains.map(mountain => (
            <Mountain key={mountain.id} itemId={mountain.id} {...mountain} />
          ))}
          {/* <button onClick={this.handleClick}>Go to Home</button> */}
        </div>
        <div className="cart-container">
          <CartList />
          <button onClick={this.context.cleanCart}>Remove</button>
        </div>
      </>
    );
  }
}
