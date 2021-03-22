import React from "react";
import "./DrawingArea.sass";

const DrawingArea = (props) => {
  const drawingArea = () => {
    for (let i = 0; i < props.numberOfGrids; i++) {
      return <div></div>;
    }
  };

  return (
    <main>
      <h2>Create A Drawing</h2>
      <section className="drawingArea">{drawingArea}</section>
    </main>
  );
};

export default DrawingArea;
