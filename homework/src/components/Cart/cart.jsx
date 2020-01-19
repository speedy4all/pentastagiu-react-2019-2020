import React from 'react';
import CartItem from './cartItem';

class Cart extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            cartItems: [],
            itemLoaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                cartItem: [
                {id: 1, brand:'Dacia', model:'Sandero', cm3: '898', color: 'ROUGE FUSION', description:'Un hatchback cu stil unic.', price: 8700},
                {id: 2, brand:'Dacia', model:'Duster', cm3: '1332', color: 'GRIS HIGHLAND',/* description:'Dacia Duster. Mai Duster ca oricând!',*/ price: 13500},
                {id: 3, brand:'Dacia', model:'Logan', cm3: '898', color: 'BLANC GLACIER',/* description:'Dacia Logan. Sedanul de familie cu cel mai bun preț!',*/ price: 7430},
                {id: 4, brand:'Dacia', model:'Lodgy', cm3: '1332', color: 'BLEU IRON', description:'Mașina de familie cu 7 locuri dinamică și robustă.', price: 14100},
                {id: 5, brand:'Dacia', model:'Dokker Van', cm3: '1332', color: 'BLEU NAVY', description:'Furgoneta cu design practic.', price: 11785}
                ],
                itemLoaded: true
            });
        }, 3000);
        
    }
    
    renderCartItems = () => this.state.cartItem.map(cartItem => <CartItem key={cartItem.id} brand={cartItem.brand} model={cartItem.model} color={cartItem.color} price={cartItem.price} />)
    
    render() {
        if(!this.state.itemLoaded){
            return <div>Loading ...</div>
        }
        return (
            <div className="cart"> {this.renderCartItems()} </div>
        );
    }
}

export default Cart;