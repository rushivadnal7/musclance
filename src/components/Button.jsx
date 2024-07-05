import React from "react";
import { Wrapper } from "../wrappers/Button";

const Button = ({ text, className }) => {
  return (
    <>
      <Wrapper className={`${className} button`}>{text}</Wrapper>
    </>
  );
};

export default Button;
