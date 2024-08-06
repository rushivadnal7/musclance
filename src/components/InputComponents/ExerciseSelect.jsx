import React, { useContext, useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/ExerciseSelect";
import allExercises from "../ExerciseData";
import Exercises from "./Exercises";
import { Context } from "../../Context/MyContext";

const ExerciseSelect = ({ muscle }) => {
  const muscleGrp = allExercises[muscle];
  const {WorkOutData, setWorkoutData} = useContext(Context)
  const [exerciseData, setExerciseData] = useState({});

  const ExerciseDetailsData = (Data) => {
    setExerciseData((prevData) => ({
      ...prevData,
      [Data.name]: {
        'muscle group' : muscle,
        sets: Data.sets,
        reps: Data.reps,
      },
    }));
  };

  // console.log(exerciseData)
  setWorkoutData(exerciseData)

  return (
    <>
      <Wrapper>
        {Object.values(muscleGrp).map((val) => {
          return (
            <Exercises
              key={val.name}
              image={val.image}
              ExerciseDetails={ExerciseDetailsData}
              name={val.name}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export default ExerciseSelect;
