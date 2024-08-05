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

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSlide = distance > minSwipeDistance;
    const isDownSlide = distance < -minSwipeDistance;
    if (isUpSlide || isDownSlide) {
      console.log("swipe", isUpSlide ? "up" : "down");
      handleRotate(isUpSlide ? "up" : "down");
    }

    // add your conditional logic here
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
            onTouchEnd={onTouchEnd}
          >
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
