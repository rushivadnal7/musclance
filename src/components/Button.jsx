import React from "react";
import { Wrapper } from "../wrappers/Button";

const Button = ({
  text,
  className,
  onClick,
  bgcolor,
  type,
  width,
  svg,
  disable,
  style,
  color,
}) => {
  return (
    <>
      <Wrapper
        disabled={disable}
        style={{ opacity: style }}
        type={type}
        width={width}
        bgcolor={bgcolor}
        onClick={onClick}
        className={`${className}`}
        color={color}
      >
        {text}
        {svg}
      </Wrapper>
    </>
  );
};

export default Button;
