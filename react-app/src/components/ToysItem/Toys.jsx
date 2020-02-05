import React from 'react';
import './Toys.css';
import {LocaleContext, ThemeContext, AppContext} from '../../context';
import Hover from '../Hover';
import { useContext } from 'react';

export default function Toys(props) {

const {addToCart} = useContext(AppContext);
const {style} = useContext(style);
const {language} = useContext(language);
    

        return (
            <Hover 
                render={isHover => (
                    <div className={`toys-item ${style} ${isHover ? 'hover' : ''}`}>
                        <span>{props.id}. </span>
                        <span><b>{props.name}</b> </span>
                        <span>Pret: {props.price} LEI | </span>
                        <span>Varsta: {props.age} ani | </span>
                        <span>Culoare: {props.culoare ? props.culoare : 'Nu exista'} </span>
                        <span>Language: {contextValue.language} | </span>
                        <button onClick={() => props.addToCart(props.itemId)}>Add to Cart</button>
                    </div> 
                )}
            />
        );
 }
