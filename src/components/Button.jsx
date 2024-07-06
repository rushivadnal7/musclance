import React from "react";
import { Wrapper } from "../wrappers/Button";

const Button = ({ text, className , onClick}) => {
  return (
    <>
      <Wrapper onClick={onClick} className={`${className} button`}>{text}</Wrapper>
    </>
  );
};

export default Button;
