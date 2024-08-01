import React, { useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/ExerciseSelect";
import allExercises from "../ExerciseData";
import Exercises from "./Exercises";

const ExerciseSelect = ({muscle}) => {

  

  const muscleGrp = allExercises[muscle]
  // console.log(muscleGrp)
  
  return (
    <>
      <Wrapper>
        {
          Object.values(muscleGrp).map((val)=>{
           return  <Exercises image={val.image} name={val.Name}/>
          })
        }
      </Wrapper>
    </>
  );
};

export default ExerciseSelect;
