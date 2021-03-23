import React, { Component } from "react";
import "./ColorPick.sass";
// import PixelColor from "./PixelColor";

// const API = "https://colornames.org/fresh/json/";

class ColorPick extends Component {
  state = {
    color: "#ffffff",
  };

  componentDidMount() {
    this.props.colorPick(this.state.color);
  }

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

  handleColorChange = (e) => {
    this.props.colorPick(e.target.value);
    this.setState({
      color: e.target.value,
    });
  };

  render() {
    return (
      <section className="colorPick">
        <h2>Pick A Color</h2>
        <input
          type="color"
          value={this.state.color}
          onChange={this.handleColorChange}
        />
      </section>
    );
  }
}

export default ColorPick;
