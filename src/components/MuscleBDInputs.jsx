import React from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Wrapper } from "../wrappers/MuscleBDInputs";
import background_image from "../assets/muscleBreakdownComponent_bg1.jpeg";
import Musclegroup from "./InputComponents/Musclegroup";

const MuscleBDInputs = () => {
  const navigate = useNavigate();

  return (
    <>
      <BackgroundImage>
        <img src={background_image} alt="" />
      </BackgroundImage>

      <Wrapper>
        <div className="header">
          <div
            className="back-arrow"
            onClick={() => navigate("/musclebreakdown")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <div className="progress-bar">
            <div className="progress-bar-inner"></div>
          </div>
        </div>

        <Musclegroup/>
      </Wrapper>
    </>
  );
};

export default MuscleBDInputs;
