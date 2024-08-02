import React from "react";
import { Wrapper } from "../../wrappers/InputWrappers/Exercises";

const Exercises = ({image , name}) => {

  return (
    <>
      <Wrapper>
        <h2>{name}</h2>
        <img src={image} alt="" />
      </Wrapper>
    </>
  );
};

export default Exercises;
