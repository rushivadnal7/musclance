import React, { useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/ExerciseSelect";
import allExercises from "../ExerciseData";
import Exercises from "./Exercises";

const ExerciseSelect = ({muscle}) => {
  const muscleGrp = allExercises[muscle]
  
  return (
    <>
      <Wrapper>
        {
          Object.values(muscleGrp).map((val)=>{
           return  <Exercises image={val.image} name={val.name}/>
          })
        }
      </Wrapper>
    </>
  );
};

export default ExerciseSelect;
