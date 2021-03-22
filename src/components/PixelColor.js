import React from "react";
import "./PixelColor.sass";

const PixelColor = (props) => {
  return (
    <option
      className="color"
      id={props.id}
      value={props.color}
      style={{ backgroundColor: "#" + props.color }}
    >
      {props.name}
    </option>
  );
};

export default PixelColor;
