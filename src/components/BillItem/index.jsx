import * as React from "react";
import { LocaleContext, ThemeContext } from "../../context";
import Hover from "../Hover";

export default class BillItem extends React.PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ style }) => (
          <LocaleContext.Consumer>
            {contextValue => (
              <Hover
                render={isHover => (
                  <div
                    className={`item ${style} ${isHover ? "hover" : ""}`}
                  >
                    <span>
                      Titlu: <b>{this.props.movieTitle}</b>
                    </span>
                    <span>Data: {this.props.date}</span>
                    <span>Pret: {this.props.price} RON</span>
                    <span>Language: {contextValue.language}</span>
                    <button
                      onClick={() => this.props.addToCart(this.props.itemId)}
                    >
                      Add to cart
                    </button>
                  </div>
                )}
              />
            )}
          </LocaleContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
