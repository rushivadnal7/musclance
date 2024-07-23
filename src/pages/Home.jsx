import React from "react";
import { Content, Wrapper } from "../wrappers/Home";
import { useNavigate } from "react-router-dom";

import MobileNavbar from "../components/MobileNavbar";
import icon from "../assets/logo_icon.png";
import dumbel from "../assets/dumbell.png";
import muscleBD_bg from "../assets/musclebreakdown_bg_image.jpeg";
import calorie_bg from "../assets/calorie_bg.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const clickHandler = (navigateTo) => {
    navigate(`/${navigateTo}`);
  };

  return (
    <>
      <Wrapper>
        <Content>
          <span className="heading-text">Welcome back Name!</span>
          <div className="weekly-data">
            <div className="exercise-count">
              <div className="header">
                <span>
                  workout <br /> count
                </span>
                <img src={dumbel} className="w-8 h-8" alt="image" />
              </div>
              <div className="data">4/6</div>
            </div>
            <div className="calories-burned">
              <div className="header">
                <span>
                  calories <br /> burned
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                  />
                </svg>
              </div>
              <div className="data">777</div>
            </div>
            <div className="musclebreakdown-count">
                <span>
                  This week muscle breakdown 
                </span>
              <div className="data">30%</div>
            </div>
          </div>
          <h1 className="container-title">Calculators</h1>
          <div className="calculator-container">
            <div
              className="calculator musclebreakdown"
              style={{
                backgroundImage: `url(${muscleBD_bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              // onClick={() => clickHandler("musclebreakdown")}
            >
              <h1>Muscle Breakdown Calculator</h1>
            </div>
            <div
              className="calculator calorie"
              style={{
                backgroundImage: `url(${calorie_bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              // onClick={() => clickHandler("musclebreakdown")}
            >
              <h1>Calorie counter calculator</h1>
            </div>
          </div>
        </Content>
        <MobileNavbar />
      </Wrapper>
    </>
  );
};

export default Home;
