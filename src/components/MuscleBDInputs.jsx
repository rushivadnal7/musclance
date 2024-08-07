import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackgroundImage, Wrapper } from "../wrappers/MuscleBDInputs";
import background_image from "../assets/muscleBreakdownComponent_bg1.jpeg";
import Musclegroup from "./InputComponents/Musclegroup";
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import ExerciseSelect from "./InputComponents/ExerciseSelect";
import { Context } from "../Context/MyContext";
import { calculateMuscleBreakdown } from "../functions/Musclebreakdownfunc";

const MuscleBDInputs = () => {
  const navigate = useNavigate();

  const { WorkOutData, setWorkoutData } = useContext(Context);
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

  const TrackButtonHandler = () => {
   const result =  calculateMuscleBreakdown(WorkOutData);
    console.log(result);

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
        <div className="header" style={{ opacity: showErrors ? 0.3 : "" }}>
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
            <div
              className={`progress-bar-inner ${
                InputContent === "exercises" ? "width-80" : "width-40"
              }`}
            ></div>
          </div>
        </div>

        {InputContent === "musclegroup" ? (
          <Musclegroup selectedMuscleGroup={muscleGroupSelector} />
        ) : (
          <ExerciseSelect muscle={selectedMuscle} />
        )}

        <Button
          text={InputContent === "musclegroup" ? "Next" : "Track"}
          className="small-button button"
          width={100}
          bgcolor="secondary"
          onClick={
            InputContent === "musclegroup"
              ? NextButtonHandler
              : TrackButtonHandler
          }
          disable={showErrors ? true : false}
          style={`${showErrors ? "0.3" : "1"}`}
        />
      </Wrapper>
    </>
  );
};

export default MuscleBDInputs;
