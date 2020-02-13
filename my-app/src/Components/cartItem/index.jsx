import * as React from "react";
import Hover from "../hover";
import { ThemeContext } from "../../Context/context";
export class CartItem extends React.PureComponent {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, dark, light } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <Hover
        render={isHover => {
          return (
            <div
              className={`cart-item ${isHover ? "hover" : ""}`}
              style={{ background: theme.bg, color: theme.syntax }}
            >
              <span>{this.props.peak} |</span>
              <span>{this.props.county} |</span>
              <span>
                {this.props.cottage
                  ? this.props.cottage
                  : "There is no cottage!"}
              </span>
              <span>Nr. {this.props.countItem}</span>
              <span>Language {this.props.language}</span>
              <button onClick={() => this.props.decrease(this.props.itemId)}>
                -
              </button>
              <button onClick={() => this.props.increase(this.props.itemId)}>
                +
              </button>{" "}
              {/* // it works but it's not good, i'll update it */}
              <button onClick={() => this.props.remove(this.props.itemId)}>
                x
              </button>
            </div>
          );
        }}
      />
    );
  }
}
