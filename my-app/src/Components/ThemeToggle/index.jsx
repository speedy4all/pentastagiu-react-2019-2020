import React, { PureComponent } from "react";
import { ThemeContext } from "../../Context/context";

export class ThemeToggle extends PureComponent {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the theme</button>;
  }
}
