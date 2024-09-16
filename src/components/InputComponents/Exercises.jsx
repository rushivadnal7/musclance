import React, { useEffect, useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/Exercises";

const Exercises = ({ image, name, ExerciseDetails }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [animationEnabled, setAnimationEnabled] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [currentRep, setCurrentRep] = useState(1);
  const [FinalSet, setFinalSet] = useState(null);
  const [FinalRep, setFinalRep] = useState(null);
  const [FinalWeight, setFinalWeight] = useState(null);
  const trimmedExerciseName = name.replace(/ /g , '')



  const getSetPrevValue = (value) => (value === 1 ? 6 : value - 1);
  const getSetsNextValue = (value) => (value === 6 ? 1 : value + 1);

  const getRepPrevValue = (value) => (value === 1 ? 25 : value - 1);
  const getRepsNextValue = (value) => (value === 25 ? 1 : value + 1);

  const drawerHandler = () => {
    setAnimationEnabled(true);
    setDrawerOpen(!drawerOpen);
  };

  const handleRotateSet = (direction) => {
    setCurrentSet((prevSet) => {
      const newSet =
        direction === "left"
          ? getSetsNextValue(prevSet)
          : getSetPrevValue(prevSet);
      setFinalSet(newSet);
      return newSet;
    });
  };

  const handleRotateRep = (direction) => {
    setCurrentRep((prevRep) => {
      const newRep =
        direction === "left"
          ? getRepsNextValue(prevRep)
          : getRepPrevValue(prevRep);
      setFinalRep(newRep);
      return newRep;
    });
  };

  useEffect(() => {
    if (FinalSet !== null && FinalRep !== null && FinalWeight !== null) {
      ExerciseDetails({
        name : trimmedExerciseName,
        sets: FinalSet,
        reps: FinalRep,
        weight: FinalWeight,
      });
    }
  }, [FinalSet, FinalRep, FinalWeight]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (handler) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSlide = distance > minSwipeDistance;
    const isRightSlide = distance < -minSwipeDistance;
    if (isLeftSlide || isRightSlide) {
      handler(isLeftSlide ? "left" : "right");
    }
  };

  return (
    <Wrapper animationEnabled={animationEnabled}>
      <div
        className={`exercise-image ${drawerOpen ? "blur-sm" : ""}`}
        onClick={drawerHandler}
      >
        <h1>{name}</h1>
        <img src={image} alt={name} />
        {FinalRep && FinalSet ? (
          <div
            className={`sets-reps-display ${!drawerOpen ? "flex" : "hidden"}`}
          >

            <span id="sets">weight : {FinalWeight}</span>
            <span id="sets">Sets : {FinalSet}</span>
            <span id="reps">Reps : {FinalRep}</span>
          </div>
        ) : (
          " "
        )}
      </div>
      <div
        className={`exercise-details ${
          drawerOpen ? "open-drawer" : "close-drawer"
        }`}
      >
        <div className={`close-slider`} onClick={drawerHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="weight-div">
          <span>Weights : </span>
          <input
            type="number"
            onChange={(e) => setFinalWeight(e.target.value)}
            id="weight-input"
          />
        </div>
        <div className="container">
          <div
            className="sets flex"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => onTouchEnd(handleRotateSet)}
          >
            <span>sets</span>
            <div className="bezel">
              <div
                className="previous-value"
                onClick={() => handleRotateSet("right")}
              >
                {getSetPrevValue(currentSet)}
              </div>
              <div className="main-value">{currentSet}</div>
              <div
                className="next-value"
                onClick={() => handleRotateSet("left")}
              >
                {getSetsNextValue(currentSet)}
              </div>
            </div>
          </div>
          <div
            className="reps flex"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => onTouchEnd(handleRotateRep)}
          >
            <span>reps</span>
            <div className="bezel">
              <div
                className="previous-value"
                onClick={() => handleRotateRep("right")}
              >
                {getRepPrevValue(currentRep)}
              </div>
              <div className="main-value">{currentRep}</div>
              <div
                className="next-value"
                onClick={() => handleRotateRep("left")}
              >
                {getRepsNextValue(currentRep)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Exercises;
