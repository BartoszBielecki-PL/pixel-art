import React, { Component } from "react";

import "./App.scss";
import Header from "./Header";
import GridSizeChoose from "./GridSizeChoose";
import ColorPick from "./ColorPick";
import DrawingArea from "./DrawingArea";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="wrap">
        <Header />
        <GridSizeChoose />
        <ColorPick />
        <DrawingArea />
      </div>
    );
  }
}

export default App;
