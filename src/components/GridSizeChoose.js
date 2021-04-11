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

  handleClick = () => {
    const { width, height } = this.state;
    if (width > 0 && height > 0 && width <= 100 && height <= 100) {
      this.props.createGrids(width, height);
      this.props.setDrawingAreaWidth(width);
      this.setState({
        width: 0,
        height: 0,
      });
    } else {
      alert(
        "Grid width and height have to be bigger than 0 and smaller than 100!"
      );
    }
  };

  render() {
    const { width, height } = this.state;

    return (
      <section className="gridSizeChoose">
        <h2> Grid Size Choose </h2>
        <label htmlFor="pixelWidth"> Pixels width </label>
        <input
          type="number"
          value={width}
          onChange={this.handleWidthChange}
          min="1"
          max="100"
        />
        <label htmlFor="pixelHeight"> Pixels height </label>
        <input
          type="number"
          value={height}
          onChange={this.handleHeightChange}
          min="1"
          max="100"
        />
        <button className="btn btn-success" onClick={this.handleClick}>
          Create Grid
        </button>
      </section>
    );
  }
}

export default GridSizeChoose;
