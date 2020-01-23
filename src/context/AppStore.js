import React, { Component } from "react";

const defaultContext = {
  itemList: [],
  itemLoaded: false,
  cartList: []
};

const fetchItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, movieTitle: "X-Men", price: 27, date: "22/02/2020" },
        {
          id: 2,
          movieTitle: "The Dark Knight",
          price: 40,
          date: "03/03/2020"
        },
        { id: 3, movieTitle: "WALL·E", price: 21, date: "12/03/2020" }
      ])
    }, 2000);

  });
};

const ApiContext = React.createContext();

export default class AppStore extends Component {
  constructor(props) {
    super(props);
    this.state = {...defaultContext};
    this.loadItems = this.loadItems.bind(this);
  }

  loadItems = () => {
    this.setState({ itemLoaded: false });
    fetchItems().then(items => {
      this.setState({
        itemLoaded: true,
        itemList: items
      });
    });
    
  };

  render() {
    return (
      <ApiContext.Provider
        value={{
          ...this.state,
          loadItems: this.loadItems
        }}
      >
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}

export { ApiContext };
