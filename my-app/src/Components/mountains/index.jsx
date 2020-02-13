import React, { useContext } from "react";
import Hover from "../hover";
import { AppContext, ThemeContext, LocalContext } from "../../Context/context";

export function Mountain(props) {
  const { addToCart } = useContext(AppContext);
  const {isLightTheme, dark, light} = useContext(ThemeContext);
  const { language } = useContext(LocalContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Hover
      render={isHover => (
        <div className={`mountain-item ${isHover ? "hover" : ""}`} style={{background: theme.ui, color: theme.syntax}}>
          <span>Peak: {props.peak}</span>
          <span>Mountains: {props.mountain}</span>
          <span>County: {props.county}</span>
          <span>Height: {props.height}m</span>
          <span>Language: {language}</span>
          <span>
            Cottage:
            {props.cottage ? props.cottage : "There is no cottage!"}
          </span>
          <button onClick={() => addToCart(props.itemId)}>Get the trip</button>
        </div>
      )}
    />
  );
}
