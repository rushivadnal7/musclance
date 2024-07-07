import React from "react";
import { Wrapper } from "../wrappers/Button";

const Button = ({ text, className , onClick , bgcolor , width}) => {
  return (
    <>
      <Wrapper width={width} bgcolor={bgcolor} onClick={onClick} className={`${className}`}>{text}</Wrapper>
    </>
  );
};

export default Button;
