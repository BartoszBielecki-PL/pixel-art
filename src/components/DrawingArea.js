import React from "react";
import "./DrawingArea.sass";
import Pixel from "./Pixel";

const DrawingArea = (props) => {
  const drawingAreaStyles = {
    width: props.drawingAreaWidth * 20 + "px",
  };

  const createDrawingArea = props.grids.map((grid) => (
    <Pixel
      key={grid.id}
      id={grid.id}
      colorPixel={props.colorPixel}
      newBackgroundColor={props.newBackgroundColor}
      currentBackgroundColor={grid.color}
    />
  ));

  return (
    <main>
      <h2>Create A Drawing</h2>
      <section className="drawingArea" style={drawingAreaStyles}>
        {createDrawingArea}
      </section>
    </main>
  );
};

export default DrawingArea;
