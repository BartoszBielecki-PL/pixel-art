import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import Header from "./Header";
import GridSizeChoose from "./GridSizeChoose";
import ColorPick from "./ColorPick";
import DrawingArea from "./DrawingArea";
class App extends Component {
  counter = 0;

  state = {
    grids: [],
    drawingAreaWidth: "",
    color: "",
  };

  createGrids = (gridWidth, gridHeight) => {
    const numberOfGrids = gridHeight * gridWidth;
    let tempGrids = [];
    for (let i = 0; i < numberOfGrids; i++) {
      const grid = {
        id: this.counter,
        color: "000000",
      };
      tempGrids.push(grid);
      this.counter++;
    }
    this.setState({
      grids: [...tempGrids],
    });
  };

  setDrawingAreaWidth = (gridWidth) => {
    this.setState({
      drawingAreaWidth: gridWidth,
    });
  };

  setPixelBackgroundColor = (backgroundColor) => {
    this.setState({
      color: backgroundColor,
    });
  };

  colorPick = (color) => {
    this.setState({
      color,
    });
  };

  colorPixel = (id, newColor) => {
    let grids = [...this.state.grids];
    grids.forEach((grid) => {
      if (grid.id === id) {
        grid.color = newColor;
      }
    });
    this.setState({
      grids,
    });
  };

  render() {
    return (
      <div className="wrap">
        <Header />
        <GridSizeChoose
          createGrids={this.createGrids}
          setDrawingAreaWidth={this.setDrawingAreaWidth}
        />
        <ColorPick colorPick={this.colorPick} />
        <DrawingArea
          grids={this.state.grids}
          drawingAreaWidth={this.state.drawingAreaWidth}
          newBackgroundColor={this.state.color}
          colorPixel={this.colorPixel}
        />
      </div>
    );
  }
}

export default App;
