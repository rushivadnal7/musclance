import React, { useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/Exercises";

const Exercises = ({ image, name }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);

  const drawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRotation = (e, type) => {
    const { clientY } = e.touches ? e.touches[0] : e;
    const { top, height } = e.target.getBoundingClientRect();
    const y = clientY - (top + height / 2);
    const newValue = Math.min(
      type === "sets" ? 6 : 25,
      Math.max(1, Math.floor(y / 10) + 1)
    );

    if (type === "sets") {
      setSets(newValue);
    } else {
      setReps(newValue);
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
          <div
            className="bezel"
            onMouseMove={(e) => handleRotation(e, "sets")}
            onTouchMove={(e) => handleRotation(e, "sets")}
          >
            <div className="marker"></div>
            <input type="number" placeholder="sets" value={sets} readOnly />
          </div>
          <div
            className="bezel"
            onMouseMove={(e) => handleRotation(e, "reps")}
            onTouchMove={(e) => handleRotation(e, "reps")}
          >
            <div className="marker"></div>
            <input type="number" placeholder="reps" value={reps} readOnly />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Exercises;
