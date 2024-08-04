import React, { useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/Exercises";

const Exercises = ({ image, name }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(1);

  const values = [1, 2, 3, 4, 5, 6];
  const getPreviousValue = (value) => (value === 1 ? 6 : value - 1);
  const getNextValue = (value) => (value === 6 ? 1 : value + 1);

  const drawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRotate = (direction) => {
    if (direction === "up") {
      setCurrentValue(getNextValue(currentValue));
    } else if (direction === "down") {
      setCurrentValue(getPreviousValue(currentValue));
    }
  };

  return (
    <>
      <Wrapper>
        <div className="exercise-image" onClick={drawerHandler}>
          <h1>{name}</h1>
          <img src={image} alt={name} />
        </div>
        <div className={`exercise-details ${drawerOpen ? "flex" : "hidden"}`}>
          <div className="sets flex">
            <span>sets</span>
            <div className="bezel">
              <div
                className="previous-value"
                onClick={() => handleRotate("down")}
              >
                {getPreviousValue(currentValue)}
              </div>
              <div className="main-value">{currentValue}</div>
              <div className="next-value" onClick={() => handleRotate("up")}>
                {getNextValue(currentValue)}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Exercises;
