import React, { useState } from "react";
import { Wrapper } from "../../wrappers/InputWrappers/Exercises";

const Exercises = ({ image, name }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [currentRep, setCurrentRep] = useState(1);

  const getSetPrevValue = (value) => (value === 1 ? 6 : value - 1);
  const getSetsNextValue = (value) => (value === 6 ? 1 : value + 1);

  const getRepPrevValue = (value) => (value === 1 ? 25 : value - 1);
  const getRepsNextValue = (value) => (value === 25 ? 1 : value + 1);

  const drawerHandler = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRotateSet = (direction) => {
    if (direction === "up") {
      setCurrentSet(getSetsNextValue(currentSet));
    } else if (direction === "down") {
      setCurrentSet(getSetPrevValue(currentSet));
    }
  };

  const handleRotateRep = (direction) => {
    if (direction === "up") {
      setCurrentRep(getRepsNextValue(currentRep));
    } else if (direction === "down") {
      setCurrentRep(getRepPrevValue(currentRep));
    }
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = (handler) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSlide = distance > minSwipeDistance;
    const isDownSlide = distance < -minSwipeDistance;
    if (isUpSlide || isDownSlide) {
      console.log("swipe", isUpSlide ? "up" : "down");
      handler(isUpSlide ? "up" : "down");
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
            className="sets flex"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={() => onTouchEnd(handleRotateSet)}
          >
            <span>sets</span>
            <div className="bezel">
              <div
                className="previous-value"
                onClick={() => handleRotateSet("down")}
              >
                {getSetPrevValue(currentSet)}
              </div>
              <div className="main-value">{currentSet}</div>
              <div className="next-value" onClick={() => handleRotateSet("up")}>
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
                onClick={() => handleRotateRep("down")}
              >
                {getRepPrevValue(currentRep)}
              </div>
              <div className="main-value">{currentRep}</div>
              <div className="next-value" onClick={() => handleRotateRep("up")}>
                {getRepsNextValue(currentRep)}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Exercises;
