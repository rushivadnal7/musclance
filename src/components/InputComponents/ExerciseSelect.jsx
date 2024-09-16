import React, { useContext, useState, useEffect } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/ExerciseSelect";
import allExercises from "../ExerciseData";
import Exercises from "./Exercises";
import { Context } from "../../Context/MyContext";

const ExerciseSelect = ({ muscle }) => {
  // console.log(muscle);

  let muscleGrp;

  const { setWorkoutData } = useContext(Context);
  const [exerciseData, setExerciseData] = useState({});

  // console.log(allExercises['chest'])

  //exercise details object. here all the data is created and stored
  const ExerciseDetailsData = (Data) => {
    setExerciseData((prevData) => ({
      ...prevData,
      [Data.name]: {
        name: Data.name,
        musclegroup: muscle,
        weight: Data.weight,
        sets: Data.sets,
        reps: Data.reps,
      },
    }));
  };

  useEffect(() => {
    setWorkoutData(exerciseData);
  }, [exerciseData, setWorkoutData]); // context data

  return (
    <>
      <Wrapper>
        {Object.values(muscle).map((value) => {
          muscleGrp = allExercises[value];
          return (
            <>
              <h1 className="MuscleGroup-title">{value}</h1>
              {Object.values(muscleGrp).map((val) => (
                <Exercises
                  key={val.name}
                  image={val.image}
                  ExerciseDetails={ExerciseDetailsData}
                  name={val.name}
                />
              ))}
            </>
          );
        })}
      </Wrapper>
    </>
  );
};

export default ExerciseSelect;
