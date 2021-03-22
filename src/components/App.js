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
    gridWidth: 0,
    gridHeight: 0,
    numberOfGrids: 0,
  };

  createGrid = (gridWidth, gridHeight) => {
    const area = gridWidth * gridHeight;
    if (gridWidth > 0 && gridHeight > 0) {
      this.setState({
        gridWidth,
        gridHeight,
        numberOfGrids: area,
      });
    }
  };

  render() {
    return (
      <div className="wrap">
        <Header />
        <GridSizeChoose createGrid={this.createGrid} />
        <ColorPick />
        <DrawingArea
          width={this.state.gridWidth}
          height={this.state.gridHeight}
          numberOfGrids={this.state.numberOfGrids}
        />
      </div>
    );
  }
}

export default App;
