import React from "react";
import { Wrapper } from "../wrappers/Button";

const Button = ({ text, className , onClick , bgcolor , type, width}) => {
  return (
    <>
      <Wrapper type={type} width={width} bgcolor={bgcolor} onClick={onClick} className={`${className}`}>{text}</Wrapper>
    </>
  );
};

export default Button;
