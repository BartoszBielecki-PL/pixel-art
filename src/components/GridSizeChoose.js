import React, { Component } from "react";

import "./GridSizeChoose.sass";

class GridSizeChoose extends Component {
  state = {
    width: 1,
    height: 1,
  };

  handleWidthChange = (e) => {
    this.setState({
      width: e.target.value,
    });
  };

  handleHeightChange = (e) => {
    this.setState({
      height: e.target.value,
    });
  };

  render() {
    const { width, height } = this.state;

    return (
      <section className="gridSizeChoose">
        <h2>Grid Size Choose</h2>
        <label htmlFor="pixelWidth">Pixels width</label>
        <input type="number" value={width} onChange={this.handleWidthChange} />
        <label htmlFor="pixelHeight">Pixels height</label>
        <input
          type="number"
          value={height}
          onChange={this.handleHeightChange}
        />
      </section>
    );
  }
}

export default GridSizeChoose;
