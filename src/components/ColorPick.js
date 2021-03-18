import React, { Component } from "react";
import "./ColorPick.sass";

class ColorPick extends Component {
  state = {};
  render() {
    return (
      <section className="colorPick">
        <h2>Pick A Color</h2>
        <select name="color" id="color"></select>
      </section>
    );
  }
}

export default ColorPick;
