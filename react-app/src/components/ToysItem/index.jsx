import React from 'react';
import {LocaleContext, ThemeContext, AppContext} from '../../context';
import Hover from '../Hover';
import { useContext } from 'react';

export default function Toys(props) {

const {addToCart} = useContext(AppContext);
const {style} = useContext(ThemeContext);
const {language} = useContext(LocaleContext);
    

        return (
            <Hover 
                render={isHover => (
                    <div className={`toys ${style} ${isHover ? "hover" : ""}`}>
                        <span>{props.id}. </span>
                        <span><b>{props.name}</b> </span>
                        <span>Pret: {props.price} LEI | </span>
                        <span>Varsta: {props.age} ani | </span>
                        <span>Culoare: {props.culoare ? props.culoare : 'Nu exista'} </span>
                        <span>Language: {language} | </span>
                        <button onClick={() => addToCart(props.id)}>Add to Cart</button>
                    </div> 
                )}
            />
        );
 }
