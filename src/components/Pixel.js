import React from "react";

const Pixel = (props) => {
  const pixelStyles = {
    backgroundColor: props.currentBackgroundColor,
  };
  return (
    <div
      className="pixel"
      id={props.id}
      onClick={() => props.colorPixel(props.id, props.newBackgroundColor)}
      style={pixelStyles}
    ></div>
  );
};

export default Pixel;
