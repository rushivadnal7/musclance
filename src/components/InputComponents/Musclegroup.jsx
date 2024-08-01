import React, { useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/MuscleGroup";

import bicep from "../../assets/bicep.png";
import tricep from "../../assets/tricep.png";
import chest from "../../assets/chest.png";
import back from "../../assets/back.png";
import legs from "../../assets/leg.png";
import shoulder from "../../assets/shoulder.png";

const Musclegroup = ({selectedMuscleGroup , style}) => {
  const musclesArray = [
    { title: "bicep", image: bicep },
    { title: "tricep", image: tricep },
    { title: "chest", image: chest },
    { title: "shoulder", image: shoulder },
    { title: "back", image: back },
    { title: "legs", image: legs },
  ];

  const [click, setClick] = useState(null);

  const clickHandler = (muscle) => {
    setClick(muscle);
  };
  selectedMuscleGroup(click)

  return (
    <>
      <Wrapper>
        <span className="title">Select Muscle Group</span>
        <div className="muscle-group-container">
          {musclesArray.map((val, index) => {
            return (
              <>
                <div
                  className={`${val.title} muscle`}
                  onClick={() => clickHandler(val.title)}
                  key={index}
                >
                  <img
                    src={val.image}
                    className={`${click === val.title ? "muscle-clicked" : ""}`}
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
