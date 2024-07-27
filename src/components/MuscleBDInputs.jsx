import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundImage, Wrapper } from "../wrappers/MuscleBDInputs";
import background_image from "../assets/muscleBreakdownComponent_bg1.jpeg";
import Musclegroup from "./InputComponents/Musclegroup";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import ExerciseSelect from "./InputComponents/ExerciseSelect";

const MuscleBDInputs = () => {
  const navigate = useNavigate();
  // const {currentRoute} = useParams()
  // console.log(currentRoute)

  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [showErrors, setShowErrors] = useState(false);
  const [InputContent, setInputContent] = useState("musclegroup");

  const muscleGroupSelector = (muscle) => {
    setSelectedMuscle(muscle);
  };

  const NextButtonHandler = () => {
    if (selectedMuscle === null) {
      setShowErrors(true);
    } else {
      setInputContent("exercises");
    }
  };

  const progresBarHandler = () => {
    setShowErrors(false);
  };

  return (
    <>
      <BackgroundImage>
        <img src={background_image} alt="" />
      </BackgroundImage>

      <Wrapper>
        {showErrors && (
          <div className="error-container">
            <span>Select a muscle group</span>
            <ProgressBar
              maxValue={5}
              width={"100"}
              onComplete={progresBarHandler}
            />
          </div>
        )}
        <div className="header">
          <div
            className="back-arrow"
            onClick={() => {
              InputContent === "exercises"
                ? setInputContent("musclegroup")
                : navigate(`/musclebreakdown`);
            }}
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

        {InputContent === "musclegroup" ? (
          <Musclegroup selectedMuscleGroup={muscleGroupSelector} />
        ) : (
          <ExerciseSelect />
        )}

        <Button
          text="next"
          className="small-button button"
          width={100}
          bgcolor="secondary"
          onClick={NextButtonHandler}
        />
      </Wrapper>
    </>
  );
};

export default MuscleBDInputs;
