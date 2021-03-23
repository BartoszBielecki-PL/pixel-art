import React from "react";
import "./DrawingArea.sass";
import Pixel from "./Pixel";

const DrawingArea = (props) => {
  const drawingAreaStyles = {
    width: props.drawingAreaWidth * 20 + "px",
  };

  const createDrawingArea = props.grids.map((grid) => <Pixel key={grid.id} />);

  console.log(props.grids);

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
