import React, { useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/Exercises";

const Exercises = ({ image, name }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [angle, setAngle] = useState(0);
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);

  const drawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRotation = (e) => {
    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    const newAngle = Math.atan2(y, x) * (180 / Math.PI);
    setAngle(newAngle);

    // Example logic to set reps and sets based on angle
    const newSets = Math.min(6, Math.max(1, Math.floor((newAngle + 360) / 60)));
    const newReps = Math.min(
      25,
      Math.max(1, Math.floor((newAngle + 360) / 15))
    );

    setSets(newSets);
    setReps(newReps);
  };

  return (
    <>
      <Wrapper>
        <div className="exercise-image" onClick={drawerHandler}>
          <h1>{name}</h1>
          <img src={image} alt="" />
        </div>
        <div
          onClick={drawerHandler}
          className={`exercise-details ${drawerOpen ? "flex" : "hidden"}`}
        >
          <div
            className="bezel"
            style={{ transform: `rotate(${angle}deg)` }}
            onMouseMove={handleRotation}
            onTouchMove={handleRotation}
          >
            <div className="marker"></div>
          </div>
          <input type="number" placeholder="set" value={sets} readOnly />
          <input type="number" placeholder="reps" value={reps} readOnly />
        </div>
      </Wrapper>
    </>
  );
};

export default Exercises;
