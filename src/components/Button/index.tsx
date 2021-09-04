import React from "react";
import "./Button.scss";
import Chevron from "../../assets/chevron.svg";

interface IButton {
  type: ButtonType;
}

export enum ButtonType {
  Circle = "circle",
  Rectangle = "rectangle",
}

function Button(props: IButton) {
  const { type } = props;

  return (
    <button className={`button ${type}`}>
      <img src={Chevron} alt="" />
    </button>
  );
}

export default Button;
