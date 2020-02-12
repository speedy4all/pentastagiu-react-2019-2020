import React, { Component } from "react";
import BillItem from "../BillItem";
import { AppContext } from "../../context";
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';

export default class BillItemList extends Component {
  static contextType = AppContext;

  handleClick = () => {
    this.props.history.push('/');
    this.props.history.push({
      pathname: '/',
      state: {
        id: 7,
        color: 'green'
      }
    })
  }
  render() {
    // const history = useHistory();
     console.log('BillItemList',this.props)
    return (
      <div className="list-container">
        {this.context.itemList.map(item => (
          <BillItem
            key={item.id}
            {...item}
          />
        ))}
        <button type="button" onClick={this.handleClick}>
          Go home
        </button>
      </div>
    );
  }
}
