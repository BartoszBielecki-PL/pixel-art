import React, { Component } from "react";

import "./GridSizeChoose.sass";

class GridSizeChoose extends Component {
  state = {
    width: 0,
    height: 0,
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
    if (width > 0 && height > 0) {
      this.props.createGrid(width, height);
      this.setState({
        width: 0,
        height: 0,
      });
    } else {
      alert("Grid width and height have to be bigger than 0!");
    }
  };

  render() {
    const { width, height } = this.state;

    return (
      <section className="gridSizeChoose">
        <h2> Grid Size Choose </h2>
        <label htmlFor="pixelWidth"> Pixels width </label>
        <input type="number" value={width} onChange={this.handleWidthChange} />
        <label htmlFor="pixelHeight"> Pixels height </label>
        <input
          type="number"
          value={height}
          onChange={this.handleHeightChange}
        />
        <button className="btn btn-success" onClick={this.handleClick}>
          Create Grid
        </button>
      </section>
    );
  }
}

export default GridSizeChoose;
