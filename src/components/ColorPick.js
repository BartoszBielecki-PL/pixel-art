import React, { Component } from "react";
import "./ColorPick.sass";
// import PixelColor from "./PixelColor";

// const API = "https://colornames.org/fresh/json/";

class ColorPick extends Component {
  state = {
    colors: [],
  };

  // componentDidMount() {
  //   this._getData();
  // }

  // _getData = () => {
  //   fetch(API)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw Error(response.status);
  //     })
  //     .then((data) => {
  //       this.setState({
  //         colors: data,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // };

  // colorPalllete = this.state.colors.map((color) => {
  //   return (
  //     <PixelColor id={color.nameId} color={color.hexCode} name={color.name} />
  //   );
  // });

  render() {
    return (
      <section className="colorPick">
        <h2>Pick A Color</h2>
        <select name="color" id="color"></select>
      </section>
    );
  }
}

export default ColorPick;
