import React, { Component } from 'react';

const defaultContext = {
    toys: [],
    itemLoaded: false,
    cartList: []
};

const fetchItems= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
               { id: 1, name: 'Masina', price: 150, age: '3-12', culoare: "Albastru" },
               { id: 2, name: 'Papusa', price: 99, age: '3-12' },
               { id: 3, name: 'Set LEGO', price: 245, age: '8-16' },
               { id: 4, name: 'Set Castel', price: 120, age: '3-10', culoare: "Gri" },
               { id: 5, name: 'Puzzle', price: 100, age: '6-15' }
            ]

            )
        }, 500);
    }
    );
};


const ApiContext = React.createContext();

export default class AppStore extends Component {
    constructor(props) {
        super(props);
        this.state = {...defaultContext};
        this.loadItems = this.loadItems.bind(this);
    }

    loadItems = () => {
        this.setState({ itemLoaded: false })
        fetchItems().then(items => {
            this.setState({
                itemLoaded: true,
                toys: items
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