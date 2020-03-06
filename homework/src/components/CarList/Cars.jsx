import React from 'react';
import { Car } from './Car';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CartItem from '../Cart/cartItem';
import axios from 'axios';


export default class Cars extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cars: [],
            cartItems: [],
            listLoaded: false
        }
    }

    componentDidMount(){

        setTimeout(async () => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/mihaivoina/siit-git/cars');
            console.log('response: ', response.data);
            const data = response.data;
            this.setState({
                cars: data,
                
                /*[
                    {id: 1, brand:'Dacia', model:'Sandero', cm3: '898', color: 'ROUGE FUSION', description:'Un hatchback cu stil unic.', price: 8700},
                    {id: 2, brand:'Dacia', model:'Duster', cm3: '1332', color: 'GRIS HIGHLAND', description:'Dacia Duster. Mai Duster ca oricând!', price: 13500},
                    {id: 3, brand:'Dacia', model:'Logan', cm3: '898', color: 'BLANC GLACIER', description:'Dacia Logan. Sedanul de familie cu cel mai bun preț!', price: 7430},
                    {id: 4, brand:'Dacia', model:'Lodgy', cm3: '1332', color: 'BLEU IRON', description:'Mașina de familie cu 7 locuri dinamică și robustă.', price: 14100},
                    {id: 5, brand:'Dacia', model:'Dokker Van', cm3: '1332', color: 'BLEU NAVY', description:'Furgoneta cu design practic.', price: 11785}
                ],*/
                // cartItems:[
                //     {id: 5, brand:'Dacia', model:'Dokker Van', cm3: '1332', color: 'BLEU NAVY', description:'Furgoneta cu design practic.', price: 11785}
                // ],
                listLoaded: true
        });
        } catch (error) {
            console.error(error);
        }
        }, 1500)
    }

    renderCars = () => {
        return this.state.cars.map(car => <Car
            key = {car.id} 
            addToCart = {this.addToCart}
            carId= {car.id}
            brand = {car.brand} 
            model = {car.model} 
            cm3 = {car.cm3} 
            color = {car.color} 
            description = {car.description} 
            price = {car.price}
        />)
    }

    renderCartItems = () => {
        return this.state.cartItems.map((cartItem, index) => <CartItem 
           key = {`${cartItem.id} - ${index}`} 
           removeFromCart = {this.removeFromCart}
           cartId = {cartItem.id}
           brand = {cartItem.brand} 
           model = {cartItem.model} 
           color = {cartItem.color} 
           price = {cartItem.price}
           counter = {cartItem.counter} 
       />)
   }

    // addToCart = (itemId) => {
    //     const itemToAdd = this.state.cars.find(item => item.id === itemId);

    //     if(itemToAdd) {
    //         const cartUpdated = this.state.cartItems.slice();
    //         cartUpdated.push(itemToAdd);
    //         console.log(cartUpdated);
            
    //         this.setState({cartItems: cartUpdated});
    //     }
    // }


    addToCart = (itemId) => {
        const itemToAdd = this.state.cars.find(item => item.id === itemId);

        const cartUpdated = this.state.cartItems.slice();

        const itemExist = cartUpdated.find(elem => elem.id === itemId)
        
        if(itemExist) {
            itemToAdd.counter += 1;
        } else {
            itemToAdd.counter = 1;
            cartUpdated.push(itemToAdd);
        }

        this.setState({cartItems: cartUpdated});
        
    }

    removeFromCart = (itemId) => {
        const cartUpdated = this.state.cartItems.filter(item => item.id !== itemId);

        this.setState({cartItems: cartUpdated});
    }


    render() {
        if(!this.state.listLoaded) {
            return <div className="loading">Loading ...</div>
        }
        return(
            <React.Fragment>
                <div className="App-main-paige">
                    <Container>
                        <div className={`cart ${this.state.cartItems.length === 0 ? "hidden" : ""} `}> {this.renderCartItems()} </div>
                        <Row>{this.renderCars()}</Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
