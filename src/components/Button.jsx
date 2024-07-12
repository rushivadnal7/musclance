import React from "react";
import { Wrapper } from "../wrappers/Button";

const Button = ({ text, className , onClick , bgcolor , type, width , svg} , ) => {
  return (
    <>
      <Wrapper type={type} width={width} bgcolor={bgcolor} onClick={onClick} className={`${className}`}>{text}{svg}</Wrapper>
    </>
  );
};

export default Button;
