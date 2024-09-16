import React, { useEffect, useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/MuscleGroup";

import bicep from "../../assets/bicep.png";
import tricep from "../../assets/tricep.png";
import chest from "../../assets/chest.png";
import back from "../../assets/back.png";
import legs from "../../assets/leg.png";
import shoulder from "../../assets/shoulder.png";

const Musclegroup = ({ selectedMuscleGroup }) => {
  const musclesArray = [
    { title: "bicep", image: bicep },
    { title: "tricep", image: tricep },
    { title: "chest", image: chest },
    { title: "shoulder", image: shoulder },
    { title: "back", image: back },
    { title: "legs", image: legs },
  ];

  const [clickedMuscleArray, setClickedMuscleArray] = useState([]);

  const clickHandler = (muscle) => {
    setClickedMuscleArray((prevArray) => {
      if (prevArray.includes(muscle)) {
        // Muscle is already in the array, so remove it
        return prevArray.filter((item) => item !== muscle);
      } else {
        // Muscle is not in the array, so add it
        return [...prevArray, muscle];
      }
    });
  };

  selectedMuscleGroup(clickedMuscleArray)

  // useEffect(() => {
  //   console.log(clickedMuscleArray);
  // }, [clickedMuscleArray]);

  return (
    <>
      <Wrapper>
        <span className="title">Select Muscle Group</span>
        <div className="muscle-group-container">
          {musclesArray.map((val, index) => {
            const [click, setClick] = useState(false);
            return (
              <>
                <div
                  className={`${val.title} muscle`}
                  onClick={() => {
                    setClick(!click)
                    clickHandler(val.title);
                  }}
                  key={index}
                >
                  <img
                    src={val.image}
                    className={`${click ? "muscle-clicked" : ""}`}
                    alt={`${val.title}`}
                  />
                  <span
                    className={`${click === val.title ? "muscle-clicked" : ""}`}
                  >
                    {val.title}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </Wrapper>
    </>
  );
};

export default Musclegroup;
