import React from "react";
import { Wrapper } from "../wrappers/Musclebreakdown";

import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import background_image from "../assets/muscleBreakdownComponent_bg1.jpeg";
import logo from "../assets/logo_icon.png";

import { useNavigate } from "react-router-dom";

const MuscleBreakdown = () => {
  const navigate = useNavigate();
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(
    ({ down, movement: [mx], direction: [dx], distance, cancel }) => {
      const sliderWidth = 390; 
      const buttonWidth = 130; 
      const maxMovement = sliderWidth - buttonWidth;

      const threshold = 260

      if (down && distance > threshold && dx > 0) {
        console.log('slded' + distance)
        cancel();
        set({ x: 0 });
        navigate('/mbdtracker')
      } else {
        set({ x: down ? Math.min(Math.max(mx, 0), maxMovement) : 0 });
      }
    }
  );

  return (
    <>
      <Wrapper>
        <div className="background-image">
          <img src={background_image} alt="" />
        </div>
        <div onClick={() => navigate('/home')} className="logo">
          <img src={logo} alt="logo"  />
        </div>

        <div className="content">
          <span>
            Muscle Breakdown <br /> Percent
          </span>
          <span>
            Track your workout and know the muscle breakdown you acheived
          </span>
        </div>

        <div className="slider-platform">
          <animated.div
            {...bind()}
            className="start-button"
            style={{ transform: x.to((x) => `translate3d(${x}px, -50%, 0)`) }}
          >
            start
          </animated.div>
          <div className="arrow-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default MuscleBreakdown;
