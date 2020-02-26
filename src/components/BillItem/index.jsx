import React, { useContext, useState, useEffect } from "react";
import { LocaleContext, ThemeContext, AppContext } from "../../context";
import Hover from "../Hover";

export default function BillItem(props) {
  const { addToCart } = useContext(AppContext);
  const { style } = useContext(ThemeContext);
  const { language } = useContext(LocaleContext);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() =>{
    document.title = `${count}`
    console.log('clicked BillItem', count)
  });


  return (
    <Hover
      render={isHover => (
        <div className={`item ${style} ${isHover ? "hover" : ""}`}>
          <span>
            <h3>Count {count}</h3>
            <h3>Name {name}</h3>
            Titlu: <b>{props.movieTitle}</b>
          </span>
          <span>Data: {props.date}</span>
          <span>Pret: {props.price} RON</span>
          <span>Language: {language}</span>
          <input value={name} onChange={(event) => setName(event.target.value)}/>
          <button onClick={() => addToCart(props.id)}>Add to cart</button>
          <button onClick={() => setCount(count +1)}>Count</button>
        </div>
      )}
    />
  );
}
