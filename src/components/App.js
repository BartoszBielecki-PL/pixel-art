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

  createGrid = (gridWidth, gridHeight) => {
    const numberOfGrids = gridHeight * gridWidth;
    if (gridWidth > 0 && gridHeight > 0) {
      this.setState({
        drawingAreaWidth: gridWidth,
      });
      for (let i = 0; i < numberOfGrids; i++) {
        const grid = {
          id: this.counter,
        };
        let grids = [...this.state.grids];
        grids.push(grid);
        this.setState({
          grids,
        });
        this.counter++;
        return true;
      }
    }
  };

  colorPick = (color) => {
    this.setState({
      color,
    });
  };

  render() {
    console.log(this.state.color);
    return (
      <div className="wrap">
        <Header />
        <GridSizeChoose createGrid={this.createGrid} />
        <ColorPick colorPick={this.colorPick} />
        <DrawingArea
          grids={this.state.grids}
          drawingAreaWidth={this.state.drawingAreaWidth}
        />
      </div>
    );
  }
}

export default App;
