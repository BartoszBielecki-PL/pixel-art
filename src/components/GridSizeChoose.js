import React, { Component } from "react";

import "./GridSizeChoose.sass";

class GridSizeChoose extends Component {
  state = {};
  render() {
    return (
      <section className="gridSizeChoose">
        <h2>Grid Size Choose</h2>
        <label htmlFor="pixelWidth">Pixels width</label>
        <input type="number" />
        <label htmlFor="pixelHeight">Pixels height</label>
        <input type="number" />
      </section>
    );
  }
}

export default GridSizeChoose;
