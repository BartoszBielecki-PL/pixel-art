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
      // console.log("w: " + gridWidth + " h: " + gridHeight);
      const grid = {
        id: this.counter,
      };
      tempGrids.push(grid);

      this.counter++;
      // console.log(grids);
    }

    // let grids = [...this.state.grids];
    // grids.push(grid);
    this.setState({
      grids: [...tempGrids],
    });
  };

  setDrawingAreaWidth = (gridWidth) => {
    this.setState({
      drawingAreaWidth: gridWidth,
    });
  };

  colorPick = (color) => {
    this.setState({
      color,
    });
  };

  render() {
    console.log(this.state.grids);
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
        />
      </div>
    );
  }
}

export default App;
