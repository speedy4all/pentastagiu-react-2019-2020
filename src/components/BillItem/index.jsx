import React, { useContext } from "react";
import { LocaleContext, ThemeContext, AppContext } from "../../context";
import Hover from "../Hover";

export default function BillItem(props) {
  const { addToCart } = useContext(AppContext);
  const { style } = useContext(ThemeContext);
  const { language } = useContext(LocaleContext);

  return (
    <Hover
      render={isHover => (
        <div className={`item ${style} ${isHover ? "hover" : ""}`}>
          <span>
            Titlu: <b>{props.movieTitle}</b>
          </span>
          <span>Data: {props.date}</span>
          <span>Pret: {props.price} RON</span>
          <span>Language: {language}</span>
          <button onClick={() => addToCart(props.id)}>Add to cart</button>
        </div>
      )}
    />
  );
}