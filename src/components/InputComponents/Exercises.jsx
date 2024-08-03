import React from "react";
import { Wrapper } from "../../wrappers/InputWrappers/Exercises";

const Exercises = ({image , name}) => {

  return (
    <>
      <Wrapper>
        <h1>{name}</h1>
        <img src={image} alt="" />
      </Wrapper>
    </>
  );
};

export default Exercises;
