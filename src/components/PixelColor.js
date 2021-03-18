import React from "react";
import "./PixelColor.sass";

const PixelColor = (props) => {
  return (
    <div
      className="color"
      id={props.id}
      style={{ backgroundColor: "#" + props.color }}
    ></div>
  );
};

export default PixelColor;
