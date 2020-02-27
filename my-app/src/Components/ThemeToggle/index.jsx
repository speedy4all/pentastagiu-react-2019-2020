import React, { PureComponent } from "react";
import { ThemeContext } from "../../Context/context";

export class ThemeToggle extends PureComponent {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button className="button theme-btn" onClick={toggleTheme}>Toggle Theme</button>;
  }
}
